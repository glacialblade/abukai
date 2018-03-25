<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Http\UploadedFile;

class CustomerTest extends TestCase
{
    use DatabaseMigrations;

    protected $defaultParams;

    public function setUp()
    {
        parent::setUp();

        $this->defaultParams = [
            'first_name' => 'John',
            'last_name'  => 'Doe',
            'email'      => 'johndoe@abukai.com',
            'city'       => 'Los Angeles',
            'country'    => 'USA',
        ];
    }

    /** @test */
    public function it_displays_the_list_page()
    {
        $response = $this->get('/');
        $response->assertStatus(200);
    }

    /** @test */
    public function it_can_show_single_customer_details()
    {
        $customer = makeCustomer($this->defaultParams);

        // Email must exist before accessing the page.
        $response = $this->get(route('customers.show', 'randomargument'));
        $response->assertStatus(404);

        // Email must exist before accessing the page.
        $response = $this->get(route('customers.show', 'johndoe@abukai.com'));
        $response->assertStatus(200)
            ->assertSeeText('johndoe@abukai.com');
    }

    /** @test */
    public function it_can_list_customer_details()
    {
        makeCustomer([], 5);

        $response = $this->get(route('customers.index'));
        $response->assertStatus(200);
    }
    
    /** @test */
    public function it_can_validate_and_create_customer()
    {
        $uri = route('customers.store');

        // Validates Required Fields
        $response = $this->json('POST', $uri, []);
        $this->checkValidatedFields($response);

        // Validates Email
        $response = $this->json('POST', $uri, array_merge($this->defaultParams, ['email' => 'wrongFormat123']));
        $this->checkValidatedFields($response, ['email']);

        // Validates Picture(Must be a file)
        $nonImageFile = UploadedFile::fake()->create('file.txt', 600);
        $response = $this->json('POST', $uri, array_merge($this->defaultParams, ['picture' => $nonImageFile]));
        $this->checkValidatedFields($response, ['picture']);

        // Store the Customer Details WITHOUT an IMAGE!
        $response = $this->json('POST', $uri, $this->defaultParams);
        $response->assertStatus(200);

        // Email Address must be UNIQUE!
        $response = $this->json('POST', $uri, $this->defaultParams);
        $this->checkValidatedFields($response, ['email']);

        // Store the Customer Details WITH FULL DETAILS!
        $picture = UploadedFile::fake()->image('picture.png', 150, 150);
        $response = $this->json('POST', $uri, array_merge($this->defaultParams, ['email' => 'foo@bar.com', 'picture' => $picture]));
        $response->assertStatus(200);
    }

    /** @test */
    public function it_can_validate_and_update_customer()
    {
        $customer = makeCustomer(['email' => 'editme@abukai.com']);
        $customer2 = makeCustomer(['email' => 'dontduplicateme@abukai.com']);

        $uri = route('customers.update', [$customer->id]);

        // Validates Required Fields
        $response = $this->json('PUT', $uri, []);
        $this->checkValidatedFields($response);

        // Validates Email
        $response = $this->json('PUT', $uri, array_merge($this->defaultParams, ['email' => 'wrongFormat123']));
        $this->checkValidatedFields($response, ['email']);

        // Validates Email Unique
        $response = $this->json('PUT', $uri, array_merge($this->defaultParams, ['email' => 'dontduplicateme@abukai.com']));
        $this->checkValidatedFields($response, ['email']);

        // Update the Customer!
        $response = $this->json('PUT', $uri, array_merge($this->defaultParams, ['email' => 'foo@bar.com']));
        $response->assertStatus(200);
        $this->assertEquals('foo@bar.com', $response->getData()->email);
    }

    /** @test */
    public function it_can_validate_upload_an_image_alone_on_update()
    {
        $customer = makeCustomer();
        $uri = route('customers.picture.update', [$customer->id]);

        // Validates Picture Requirement
        $response = $this->json('PUT', $uri, ['picture' => '']);
        $this->checkValidatedFields($response, ['picture']);

        // Validates Picture(Must be a file)
        $nonImageFile = UploadedFile::fake()->create('file.txt', 600);
        $response = $this->json('PUT', $uri, ['picture' => $nonImageFile]);
        $this->checkValidatedFields($response, ['picture']);

        // Validates Picture(Must be a file)
        $image = UploadedFile::fake()->image('picture.png', 150, 150);
        $response = $this->json('PUT', $uri, ['picture' => $image]);
        $response->assertStatus(200);
    }

    /**
     * Checks Fields to be Validated.
     */
    protected function checkValidatedFields($response, $fields = ['first_name', 'last_name', 'email', 'city', 'country'])
    {
        $response->assertStatus(422);
        foreach($fields as $requiredField)
        {
            $this->assertObjectHasAttribute($requiredField, $response->getData());
        }
    }
}
