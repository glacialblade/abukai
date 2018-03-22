<?php

namespace App\Handlers\Services\Modules\Customer;

use App\Handlers\Services\Abstracts\AbstractCommonRequestService;
use App\Handlers\Services\Traits\IdResourceTrait;

class UpdateForm implements AbstractCommonRequestService
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
	 * Initialize Attributes
	 * 
	 * @param CustomerRepository $customer
	 */
	public function __construct(CustomerRepository $repository)
	{
		$this->repository = $repository;
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
			'country'    => 'required'
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
		// Update's the Customer
		$customer = $this->repository->update($this->request->except(['picture']), $this->id);

		return (object) ['data' => $customer, 'code' => 200];
	}
}