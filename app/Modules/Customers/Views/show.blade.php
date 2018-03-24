@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8">
            <div class="panel panel-default">
                <div class="panel-heading">{{ $customer->first_name }} {{ $customer->last_name }}</div>

                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="{{ $customer->picture ? $customer->picture : '/images/default-profile.png' }}" style="width: 100%" />
                        </div>
                        <div class="col-md-8">
                            <div class="row">
                                <div class="col-md-6">
                                    <strong>Email</strong><br/>
                                    {{ $customer->email }}
                                    <br/><br/>
                                    <strong>First Name</strong><br/>
                                    {{ $customer->first_name }}
                                    <br/><br/>
                                    <strong>Last Name</strong><br/>
                                    {{ $customer->last_name }}
                                </div>
                                <div class="col-md-6">
                                    <strong>City</strong><br/>
                                    {{ $customer->city }}
                                    <br/><br/>
                                    <strong>Country</strong><br/>
                                    {{ $customer->country }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="panel panel-default">
                <div class="panel-heading">Calculator</div>
            </div>
        </div>
    </div>
</div>
@endsection
