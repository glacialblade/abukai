export class FormHelper
{
    constructor(component)
    {
        this.component = component;
    }

    /**
     * Converts a simple array to options
     *
     * @var  array
     */
    arrayToOptions(array)
    {
        if(array)
        {
            return array.map((val) =>
                <option value={ val } key={ val }>{ val }</option>
            )
        }

        return [];
    }

    /**
     * Displays the Error of the Field
     *
     * @var  key
     */
    formError(key)
    {
        return (
            <span>{ this.component.state.formErrors[key] ? <div className="text-danger">{ this.component.state.formErrors[key][0] }</div> : false }</span>
        );
    }

    /**
     * Handles the error codes from the server
     *
     * @var  data
     */
    handleServerError(data)
    {
        if(data.status == 422)
        {
            this.component.setState({
                formErrors: data.responseJSON
            }); 
            return;
        }

        $.alert('<span style="color: red">An error occurred please try again.</span>');
    }
}