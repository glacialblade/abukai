<?php

namespace App\Modules\Calculator\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CalculatorsController extends Controller
{
	public function index()
	{
		return view('Calculator::index');
	}

	public function buttons()
	{
		return view('Calculator::buttons');
	}

	public function display()
	{
		return view('Calculator::display');
	}
}