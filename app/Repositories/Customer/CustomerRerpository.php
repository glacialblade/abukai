<?php

namespace App\Repositories\Customer;

interface CustomerRepository
{
	/**
	 * Fetches a resource by ID.
	 *
	 * @param  $id
	 */
	public function byId($byId);

	/**
	 * Fetches a resource by Email.
	 *
	 * @param  $email
	 */
	public function byEmail($byEmail);
	
	/**
	 * Fetches a collection of the resource.
	 *
	 * @param  array $request
	 */
	public function get(array $request = []);
	
	/**
	 * Stores a resource.
	 *
	 * @param  array $attributes
	 */
	public function store(array $attributes);
	
	/**
	 * Updates a resource.
	 *
	 * @param  array $attributes
	 */
	public function update(array $attributes, $id);
}