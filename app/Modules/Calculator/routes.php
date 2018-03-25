<?php

$controllerPath = "App\Modules\Calculator\Controllers\\";

/*
|--------------------------------------------------------------------------
| Calculator Iframe Routes
|--------------------------------------------------------------------------
*/


Route::middleware('web')->prefix('calculator')->group(function() use ($controllerPath)
{
	Route::get('/', "{$controllerPath}CalculatorsController@index")->name('calculator.index');
	Route::get('/display', "{$controllerPath}CalculatorsController@display")->name('calculator.display');
	Route::get('/buttons', "{$controllerPath}CalculatorsController@buttons")->name('calculator.buttons');
});