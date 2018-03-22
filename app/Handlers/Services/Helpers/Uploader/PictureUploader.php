<?php

namespace App\Handlers\Services\Helpers\Uploader;

use App\Handlers\Services\Exceptions\ServiceException;
use Illuminate\Http\Request;

class PictureUploader
{
	/**
	 * Key from the Illuminiate\Http\Request
	 * 
	 * @var string
	 */
	protected $requestFileKey = 'picture';

	/**
	 * File Upload Path
	 * 
	 * @var string
	 */
	protected $path = 'images/users/pictures';

	/**
	 * Illuminate Request
	 * 
	 * @var Request
	 */
	protected $request;

	/**
	 * File Object
	 * 
	 * @var object
	 */
	protected $file;

	/**
	 * Initialize Attributes
	 */
	public function __construct()
	{
		$this->request = request();
		$this->validate();
	}

	/**
	 * Validates the File
	 * 
	 * @throws ServiceException
	 */
	protected function validate()
	{
		if($this->request->hasFile(($requestFileKey))
		{
			$this->file = $this->request->($this->$requestFileKey);
		}

		throw new ServiceException('The request key specified does not contain a file.');
	}

	/**
	 * Upload the File
	 * 
	 * @return $path
	 */
	public function upload()
	{
		$filename = uniqid().'.'.$file->guessClientExtension();
		$path = public_path($this->path);

		// Save the File!
		$file->move($path, $filename);

		return "$path/$filename";
	}
}