<?php

namespace App\Modules\ScreenShare\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Handlers\Services\Modules\Customer\UploadPicture;

class ScreenShareController extends Controller
{

	/**
	 * Screen Share Main View
	 *
	 * @return view
	 */
	public function index()
	{
		return view('ScreenShare::index');
	}

}