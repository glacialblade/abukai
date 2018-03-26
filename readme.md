<h1>Abukai Exam</h1>
<strong>Please force the page to be HTTPS. and install <a href="https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk">SCREEN CAPTURING PLUGIN</a>. <a href="https://abukai.kevincotongco.com">Visit Page</a></strong>
<br/>
<h3>Technologies Used</h3>
<strong>List of technologies I used for this exam.</strong>
<ul>
	<li>PHP 7</li>
	<li>MYSQL</li>
	<li>PHPUNIT</li>
	<li>Laravel Framework 5.5</li>
	<li>React JS/jQuery</li>
</ul>
<br/><br/>
<h3>Pages</h3>
<strong>Customer's List</strong>
<ul>
	<li>Has an ability to open up a modal and add a customer.</li>
	<li>Has an ability to open up a modal and edit a customer.</li>
	<li>Has a default image.</li>
	<li>Everything is the form is required.</li>
	<li>Email is unique and must be in the right format.</li>
	<li>Auto Upload Picture only works on edit.</li>
	<li>Has a link to the view page.</li>
</ul>
<br/><br/>
<strong>View</strong>
<ul>
	<li>Able to display customer information.</li>
	<li>Has a calculator with iframes structure.</li>
</ul>
<br/><br/>
<strong>Screen Share</strong>
<ul>
	<li>Please force the page to be HTTPS.</li>
	<li>Please install <a href="https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk">plugin</a>.</li>
	<li>Shows a button to share screen.</li>
	<li>Links a button to a streaming page.</li>
</ul>
<br/><br/>
<h3>Codes</h3>
<strong>Modular Structure</strong><br/>
My approach is a modular structure see in app/Modules/ folder and modules can be setup in config/modules.php. This service is registered in config/app.php and the service class is in app/Providers/ModularServiceProvider.php.<br/>
I also have form handlers so controllers is much easier to read.
<br><br>
<strong>Repository Pattern</strong><br>
Also applied repository pattern as I don't want to bloat my models as well and I think it's a good way to have a good quality code, handle queries in much more larger apps and much more flexible in switching databases. This is registered via provider as well in config/app.php and file is app/Providers/RepositoryProvider.
<br/><br/>
<strong>Routing</strong><br>
I have different controllers with the customers basic crud and auto upload photo(on edit). Just to be true to the resourceful routes for much better and readable code. <br/>
Although exception for the calculator module I just applied the all of it in a single controller cause I don't think this one needs to be restful.
<br/><br/>
<strong>React JS</strong><br>
My react js is being compiled via webpack. See webpack.mix.js. My javascript files is located in resources/assets/js/*
<br/><br/>
<strong>PHP UNIT</strong><br>
I've written down several integration tests for backend and a little unit test because not much classes to test. Location is in /tests/*