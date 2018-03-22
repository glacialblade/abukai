<?php

namespace App\Providers;

use App\Repositories\Customer\CustomerRepository;
use App\Repositories\Customer\Eloquent as CustomerEloquent;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
	public function boot() {

	}

	public function register()
	{
		$this->app->bind(CustomerRepository::class, CustomerEloquent::class);
	}
}