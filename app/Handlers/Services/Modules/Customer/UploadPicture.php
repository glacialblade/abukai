<?php

namespace App\Handlers\Services\Modules\Customer;

use App\Handlers\Services\Abstracts\AbstractCommonRequestService;

class CreateForm implements AbstractCommonRequestService
{
	use IdResourceTrait;

	/**
	 * Required Attributes to run the class.
	 * 
	 * @var array
	 */
	protected $requiredAttributes = ['id'];

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
			'picture' => 'required|file|image'	
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
		$this->unlinkOldPicture();

		// Update Customer's Picture
		$customer = $this->repository->update(
			['picture' => $this->uploader->upload()],
			$this->id
		);

		return (object) ['data' => $customer, 'code' => 200];
	}

	/**
	 * Unlinks the Old Picture;
	 */
	protected function unlinkOldPicture()
	{
		$customer = $this->repository->byId($id);

		if(file_exists($customer->picture))
		{
			unlink($customer->picture);
		}
	}
}