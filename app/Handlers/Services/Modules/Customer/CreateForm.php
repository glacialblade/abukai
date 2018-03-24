<?php

namespace App\Handlers\Services\Modules\Customer;

use App\Handlers\Services\Abstracts\AbstractCommonRequestService;
use App\Repositories\Customer\CustomerRepository;
use App\Handlers\Services\Helpers\Uploader\PictureUploader;

class CreateForm extends AbstractCommonRequestService
{

	/**
	 * Customer Repository
	 * 
	 * @var CustomerRepository
	 */
	protected $repository;

	/**
	 * Picture Uploader Class
	 * 
	 * @var PictureUploader
	 */
	protected $uploader;

	/**
	 * Initialize Attributes
	 * 
	 * @param CustomerRepository $customer
	 */
	public function __construct(CustomerRepository $repository, PictureUploader $uploader)
	{
		$this->repository = $repository;
		$this->uploader = $uploader;
	}

	/**
	 * Returns Validation Array
	 * 
	 * @return array [Array of validations]
	 */
	protected function createValidations() 
	{
		return [
			'first_name' => 'required',
			'last_name'  => 'required',
			'email'      => 'required|email',
			'city'       => 'required',
			'country'    => 'required',
			'picture'    => 'sometimes|file|image'	
		];
	}

	/**
	 * If request is Valid
	 * 
	 * @param  Validator $validation
	 * @return object
	 */
	protected function requestValid($validation)
	{
		$attributes = $this->request->all();

		// Uploads the Picture and Returns the File Path
		$attributes['picture'] = isset($attributes['picture']) ? $this->uploader->upload() : '';

		// Add Customer
		$customer = $this->repository->store($attributes);

		return (object) ['data' => $customer, 'code' => 200];
	}
}