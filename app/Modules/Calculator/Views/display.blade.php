@extends('layouts.calculator')

@section('content')
    
    <input type="text" class="form-control" disabled/>
    
@endsection

@section('scripts')
	<script>
		function updateDisplay(equation)
		{
			$('input[type=text]').val(equation.join(''));
		}
	</script>
@endsection