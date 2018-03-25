<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Http\UploadedFile;

class CustomerUnitTest extends TestCase
{
    use DatabaseMigrations;

    public function setUp()
    {
        parent::setUp();

        makeCustomer([
        	'id'         => 1,
            'first_name' => 'John',
            'last_name'  => 'Doe',
            'email'      => 'johndoe@abukai.com',
            'city'       => 'Los Angeles',
            'country'    => 'USA',
            'picture'    => '/home/vagrant/code/public/images/users/pictures/5ab5c5c7918ab.png'
        ]);
    }

    /** @test */
    public function it_should_have_a_picture_uri_attribute()
    {
    	$customer = \App\Models\Customer::find(1);
    	$this->assertEquals($customer->picture_uri, '/images/users/pictures/5ab5c5c7918ab.png');
    }
}
