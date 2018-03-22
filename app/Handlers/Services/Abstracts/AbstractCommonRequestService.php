<?php

namespace App\Handlers\Services\Abstracts;

use App\Services\Exceptions\ServiceException;

/**
 * Abstract Class for Services that Uses Request
 */
abstract class AbstractCommonRequestService extends \App\Handlers\Services\Abstracts\AbstractService 
{

	/**
	 * Request to be validated.
	 * 
     * @var Illuminate\Http\Request
	 */
	protected $request; 

	/**
	 * If request successfully passed the validation.
	 * Then call this function.
	 *
	 * @param  $result [Vesult of the validator.]
	 */
	abstract protected function requestValid($result);

	/**
	 * Abstract Function from AbstractService
	 * Validates the Request via Laravel Validation! returns abstracted function requestValid and they may override requestInvalid as well.
	 */
	public function __processService() 
	{
		$this->request = request();
		$result = $this->validate();

		return !$result->fails() ? $this->requestValid($result)
		                         : $this->requestInvalid($result);
	}

	/**
	 * Default Invalid Request Handler
	 * 
	 * @param   Illuminate\Validation\Validator
	 * @return  object
	 */
	public function requestInValid($validation)
	{
		return (object) ['data' => $validation->errors()->messages(), 'code' => 422];
	}

	/**
	 * Validates the set $validations.
	 * 
	 * @return Illuminate\Validation\Validator
 	 * @throws ServiceException if validation is not setup properly
	 */
	protected function validate() 
	{
		$validations = $this->createValidations();

		// Must set a $validation before processing
		if(is_array($validations)) 
		{
			return \Validator::make($this->request->all(), $validations);
		}
			
		throw new ServiceException('Validations set must be a type of an array.');
	}

	/**
	 * Returns Validation Array
	 * 
	 * @return array [Array of validations]
	 */
	protected function createValidations() 
	{
		return [];
	}

}