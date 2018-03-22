<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ModularServiceProvider extends ServiceProvider
{
	public function boot() {
		$modules = config('modules');
		$path    = base_path().'/app/Modules';

		if($modules && count($modules) > 0) 
		{
			foreach($modules as $module) {
				// Load Routes
				$routes = "$path/$module/routes.php";
				if(file_exists($routes))
				{
					include $routes;
				}

				// Load Views
				$views = "$path/$module/Views";
				if(is_dir($views)) 
				{
					$this->loadViewsFrom($views, $module);
				}
			}
		}
		else
		{
			throw new \Exception('No modules specified');
		}
	}

	public function register()
	{

	}
}