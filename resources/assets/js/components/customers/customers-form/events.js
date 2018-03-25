class Events 
{

    constructor(component) 
    {
        this.component = component;
        utils.REACT.bindClassToMethods(this, ['activatePictureInput', 'changePicture', 'submit']);
    }
    
    /**
     * jQuery Events Collection
     */
    jQueryEvents()
    {
        var component = this.component;

        $(document).on('click', component.props.trigger, function()
        {
            var email = $(this).attr('data-email');
            component.setState(_.cloneDeep(component.defaultState));

            if(email) {
                component.requests.show(email);
            }
            else {
                component.el.modal.modal('show');
            }
        });
    }

    /**
     * Clicks the File Input
     */
    activatePictureInput()
    {
        this.component.refs.picture.click();
    }

    /**
     * Change Picture Process
     */
    changePicture()
    {
        var file = this.component.refs.picture.files[0];
        var form = this.component.state.form;
        form.picture = file && file.type.match('image') ? this.component.refs.picture.files[0] : undefined;

        this.component.setState({ form: form, pictureFileName: form.picture ? form.picture.name : '' });

        // On Edit Auto Upload's the Picture
        if(form.id && form.picture) {
            this.component.requests.uploadPicture();
        }
    }

    /**
     * Submits the form
     */
    submit(e)
    {
        e.preventDefault();
        this.component.requests.save();
    }
    
}

export { Events };