<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
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
}