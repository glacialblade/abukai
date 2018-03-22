<?php

namespace App\Handlers\Services\Traits;

trait IdResourceTrait {

	protected $id;

	public function setId($id) 
	{
		$this->id = $id;
		return $this;
	}

	public function getId()
	{
		return $this->id;
	}
	
}