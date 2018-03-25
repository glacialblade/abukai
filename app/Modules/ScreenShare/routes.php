<?php

$controllerPath = "App\Modules\ScreenShare\Controllers\\";

/*
|--------------------------------------------------------------------------
| Customer Routes
|--------------------------------------------------------------------------
*/


Route::middleware('web')->prefix('screen-share')->group(function() use ($controllerPath)
{
	Route::get('/', "{$controllerPath}ScreenShareController@index")->name('screen-share.index');
});