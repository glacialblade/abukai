<?php

namespace App\Handlers\Services\Abstracts;

use App\Services\Exceptions\ServiceException;

abstract class AbstractService {

	/**
	 * Attributes that are required to be set.
	 * 
     * @var array
	 */
	protected $requiredAttributes = [];

	
    /**
     * The function that contains the logic part of the service.
     */
	abstract protected function processService();

	/**
	 * Function that serves as the main public function of the service.
	 * Also checks if all required attributes are set before processing the service.
	 */
	public function run()
	{
		foreach($this->requiredAttributes as $attribute)
		{
			if(!$this->$attribute)
			{
				throw new ServiceException("Attribute $attribute is not set.");
			}
		}

		return $this->processService();
	}
	
}