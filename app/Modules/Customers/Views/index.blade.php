@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Dashboard</div>
                
                <div class="panel-body">
                    <react-component component="CustomersForm" data-component_id="customers-form" data-trigger=".trigger-customers-form"></react-component>
                    
                    <button class="btn btn-sm btn-info trigger-customers-form">Add New Customer</button>
                    <br/><br/>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Email</td>
                                <td>City</td>
                                <td>Country</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($customers as $customer)
                                <tr>
                                    <td>{{ $customer->first_name }} {{ $customer->last_name }}</td>
                                    <td>{{ $customer->email }}</td>
                                    <td>{{ $customer->city }}</td>
                                    <td>{{ $customer->country }}</td>
                                    <td>
                                        <a class="btn btn-sm btn-success" href="{{ route('customers.show', [$customer->email]) }}">View</a>
                                        <button class="btn btn-sm btn-info trigger-customers-form" data-email="{{ $customer->email }}">Edit</button>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection