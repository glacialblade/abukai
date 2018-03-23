export class CommonComponent extends React.Component 
{

    /**
     * Handle Change of Form Fields to set State
     */
    handleChange(e) 
    {
        var target = $(e.target);
        var name   = target.attr('data-name').split('.');
        var state  = this.state;

        // If data-name doesn't have . ex(data-name="foo")
        if(name.length == 1) 
        {
            state[name[0]] = target.attr('type') != 'checkbox' ? target.val() : target.prop('checked');
        }
        // If data-name have . ex(data-name="form.foo")
        else {
            var currentVariable = state;
            $.each(name, function(key, val) 
            {
                if(key != (name.length-1)) 
                {
                    currentVariable[val] = currentVariable[val] ? currentVariable[val] : {};
                    currentVariable = currentVariable[val];
                }
                else 
                {
                    currentVariable[val] = target.attr('type') != 'checkbox' ? target.val() : target.prop('checked');
                }
            });
        }

        this.setState(state);

        // Checks for Callback Function
        var callback = target.attr('data-event-callback');
        if(callback) 
        {
            this.events[callback](target);
        }
    }

    /**
     * Render Display
     */
    render() 
    {
        var template = this.templateController.default(this);
        return template;
    }
}