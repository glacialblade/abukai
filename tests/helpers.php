<?php

use App\Models\Customer;

function makeCustomer($attributes = [], $length = 1)
{
	return $length == 1 ? factory(Customer::class)->create($attributes)
	                    : factory(Customer::class, $length)->create($attributes);
}