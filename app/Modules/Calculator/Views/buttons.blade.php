@extends('layouts.calculator')

@section('content')

    <table style="width: 100%;">
        <tr>
            <td><button onClick="parent.Calculator.onButtonClick(7)" class="btn btn-default w-100">7</button></td>
            <td><button onClick="parent.Calculator.onButtonClick(8)" class="btn btn-default w-100">8</button></td>
            <td><button onClick="parent.Calculator.onButtonClick(9)" class="btn btn-default w-100">9</button></td>
        </tr>
        <tr>
            <td><button onClick="parent.Calculator.onButtonClick(4)" class="btn btn-default w-100">4</button></td>
            <td><button onClick="parent.Calculator.onButtonClick(5)" class="btn btn-default w-100">5</button></td>
            <td><button onClick="parent.Calculator.onButtonClick(6)" class="btn btn-default w-100">6</button></td>
        </tr>
        <tr>
            <td><button onClick="parent.Calculator.onButtonClick(1)" class="btn btn-default w-100">1</button></td>
            <td><button onClick="parent.Calculator.onButtonClick(2)" class="btn btn-default w-100">2</button></td>
            <td><button onClick="parent.Calculator.onButtonClick(3)" class="btn btn-default w-100">3</button></td>
        </tr>
        <tr>
            <td><button onClick="parent.Calculator.onButtonClick(0)" class="btn btn-default w-100">0</button></td>
            <td><button onClick="parent.Calculator.onButtonClick('+')" class="btn btn-default w-100">+</button></td>
            <td><button onClick="parent.Calculator.onButtonClick('-')" class="btn btn-default w-100">-</button></td>
        </tr>
        <tr>
            <td><button onClick="parent.Calculator.onButtonClick('=')" class="btn btn-default w-100">=</button></td>
        </tr>
    </table>
    
@endsection