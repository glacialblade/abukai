<?php

$controllerPath = "App\Modules\Customers\Controllers\\";

/*
|--------------------------------------------------------------------------
| Customer Routes
|--------------------------------------------------------------------------
*/


Route::middleware('web')->group(function() use ($controllerPath)
{
	Route::get('/', "{$controllerPath}CustomersController@index")->name('customers.index');
	Route::get('/{email}', "{$controllerPath}CustomersController@show")->name('customers.show');
	Route::post('/', "{$controllerPath}CustomersController@store")->name('customers.store');
	Route::put('/{id}', "{$controllerPath}CustomersController@update")->name('customers.update');

	Route::put('/{id}/upload', "{$controllerPath}UploadController@update")->name('customers.update');
});