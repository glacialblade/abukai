<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    protected function showError($response)
    {
    	$json = $response->json();
        
		dd([
			'message' => $json['message'],
			'exception' => $json['exception'],
			'file' => $json['file'],
			'line' => $json['line'],
		]);
    }
}
