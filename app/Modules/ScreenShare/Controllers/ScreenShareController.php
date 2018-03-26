<?php

namespace App\Modules\ScreenShare\Controllers;

use App\Handlers\Services\Modules\Customer\UploadPicture;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ScreenShareController extends Controller
{

	/**
	 * Screen Share Main View
	 *
	 * @return view
	 */
	public function index(Request $request)
	{
		return view('ScreenShare::index')->withView($request->view);
	}

}