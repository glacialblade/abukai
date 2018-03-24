<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
	/**
	 * Appends Custom Attributes
	 * 
	 * @var array
	 */
	protected $appends = [
		'picture_uri'
	];

	/**
	 * Mass Assignable Columns
	 * 
	 * @var array
	 */
	protected $fillable = [
		'first_name',
		'last_name',
		'email',
		'city',
		'country',
		'picture'
	];

	/**
	 * Get the URI Displayer Path for the Picture
	 * 
	 * @return string
	 */
	public function getPictureUriAttribute()
	{
		if($this->picture)
		{
			return explode('public', $this->picture)[1];
		}

		return '';
	}
}