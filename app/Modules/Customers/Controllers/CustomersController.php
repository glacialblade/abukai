<?php

namespace App\Modules\Customers\Controllers;

use App\Handlers\Services\Modules\Customer\CreateForm;
use App\Handlers\Services\Modules\Customer\UpdateForm;
use App\Http\Controllers\Controller;
use App\Repositories\Customer\CustomerRepository;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class CustomersController extends Controller
{
	/**
	 * Customer Repository
	 * 
	 * @var CustomerRepository
	 */
	protected $repository;

	/**
	 * Initialize Attributes
	 * 
	 * @param CustomerRepository $customer
	 */
	public function __construct(CustomerRepository $repository)
	{
		$this->repository = $repository;
	}

	/**
	 * Listing Page with Add/Edit Form
	 *
	 * @param  Request $request
	 * @return mixed(response|view)
	 */
	public function index(Request $request)
	{
		return !$request->ajax() 
			? view('Customers::index')
			: response()->json($this->repository->get(), 200);
	}

	/**
	 * Customer Detailed View
	 * 
	 * @param  email
	 * @return view
	 */
	public function show($email)
	{
		return view('Customers::show')->withCustomer(
			$this->repository->byEmail($email)
		);
	}

	/**
	 * Creates the Customer
	 * 
	 * @return Response
	 */
	public function store()
	{
		$result = (app()->make(CreateForm::class))->run();

		return response()->json($result->data, $result->code);
	}

	/**
	 * Updates the Customer
	 *
	 * @param  $id
	 * @return Response
	 */
	public function update($id)
	{
		$result = (app()->make(UpdateForm::class))
			->setId($id)
			->run();

		return response()->json($result->data, $result->code);
	}
}