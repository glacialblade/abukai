@extends('layouts.calculator')

@section('content')

    <iframe id="display" src="{{ route('calculator.display') }}" style="width: 100%; border: 0; height: 50px;"></iframe>
    <iframe id="buttons" src="{{ route('calculator.buttons') }}" style="width: 100%; border: 0; height: 300px;"></iframe>

@endsection

@section('scripts')
    <script>
        var Calculator = {
            equation: [],

            onButtonClick: function(value)
            {
                if(this.updateEquation(value)) {
                    // Calculate on equals(=)
                    if(value == '=') {
                        parent.calculateResult(this.equation);
                        this.equation = [];
                    }

                    // Update IFRAME displayre
                    $('#display')[0].contentWindow.updateDisplay(this.equation);
                }
            },

            /**
             * Updates the Equation
             * 
             * @param  value
             * @return boolean
             */
            updateEquation: function(value)
            {
                var lastValue = this.equation[this.equation.length - 1];

                if(!isNaN(parseInt(value)) || // For Numbers
                  (!isNaN(parseInt(lastValue)) && isNaN(parseInt(value)))) { // For Non Numbers
                    // No need to push =
                    this.equation.push(value != '=' ? value : '');   
                    return true; 
                }
            }
        }
    </script>
@endsection