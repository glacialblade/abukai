<?php

namespace App\Modules\Customers\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Response;
use App\Handlers\Services\Modules\Customer\UploadPicture;

class PicturesController extends Controller
{

	/**
	 * Updates the Customer
	 *
	 * @param  $id [Customer ID]
	 * @return Response
	 */
	public function update($id)
	{
		$result = (app()->make(UploadPicture::class))
			->setId($id)
			->run();
			
		return response()->json($result->data, $result->code);
	}

}