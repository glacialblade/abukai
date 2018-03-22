<?php

namespace App\Repositories\Customer;

use App\Models\Customer;
use App\Repositories\Customer\CustomerRepository;

class Eloquent implements CustomerRepository
{
	/**
	 * Model to be used.
	
	 * @var Customer
	 */
	protected $model;
	
	/**
	 * Initialize Attributes
	 *
	 * @param Customer $model
	 */
	public function __construct(Customer $model)
	{
		$this->model = $model;
	}
	
	/**
	 * Fetches a resource by ID.
	 *
	 * @param  $id
	 * @return Customer
	 */
	public function byId($id)
	{
		return $this->model->firstOrFail($id);
	}
	
	/**
	 * Fetches a resource by Email.
	 *
	 * @param  $email
	 * @return Customer
	 */
	public function byEmail($email)
	{
		return $this->model->where('email', $email)->firstOrFail();
	}
	
	/**
	 * Fetches a collection of the resource.
	 *
	 * @param   array $request
	 * @return  Illuminate\Support\Collection
	 */
	public function get(array $request = [])
	{
		return $this->model->get();
	}
	
	/**
	 * Stores a resource.
	 *
	 * @param  array $attributes
	 * @return  Customer
	 */
	public function store(array $attributes)
	{
		$model = clone $this->model;
		$model->fill($attributes);
		$model->save();
	
		return $model;
	}
	
	/**
	 * Updates a resource.
	 *
	 * @param  array $attributes
	 * @return  Customer
	 */
	public function update(array $attributes, $id)
	{
		$model = $this->byId($id);
		$model->fill($attributes);
		$model->save();
	
		return $model;
	}
	
}