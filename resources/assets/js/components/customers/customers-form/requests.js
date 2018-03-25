class Requests 
{
    
    constructor(component) 
    {
        this.component = component;
        utils.REACT.bindClassToMethods(this, []);
    }

    /**
     * Get Customer Details
     */
    show(email)
    {
    	$.ajax({
    		url: '/'+email,
    		type: 'GET',
    		success: function(data)
    		{
    			this.component.setState({ form: data });
    			this.component.el.modal.modal('show');
    		}.bind(this)
    	});
    }

    /**
     * Save / Update Request
     */
    save()
    {
    	var data = _.cloneDeep(this.component.state.form);
    	if(data.id) {
    		data._method = 'PUT';
    	}

    	this.component.setState({ loading: true });
    	$.ajax({
    		url: '/'+(data.id ? data.id : ''),
    		type: 'POST',
    		data: utils.FORM.generateFormData(data),
    		processData: false,
    		contentType: false,
    		success: function(data)
    		{
    			window.location.reload();
    		},
    		error: function(data)
    		{
    			this.component.helpers('form').handleServerError(data);
    			this.component.setState({ loading: false });
    		}.bind(this)
    	});
    }

    /**
     * Upload's Picture on Edit
     */
    uploadPicture()
    {
        var data = _.cloneDeep(this.component.state.form);
        data._method = 'PUT';

        this.component.setState({ loadingUpload: true });
        $.ajax({
            url: '/'+data.id+'/picture',
            type: 'POST',
            data: utils.FORM.generateFormData(data),
            processData: false,
            contentType: false,
            success: function(data)
            {
                // Update Picture's State
                var form = this.component.state.form;
                form.picture = data.picture;
                form.picture_uri = data.picture_uri;

                this.component.setState({ form: form, pictureFileName: '', loadingUpload: false });
            }.bind(this),
            error: function(data)
            {
                this.component.helpers('form').handleServerError(data);
                this.component.setState({ loadingUpload: false });
            }.bind(this)
        });
    }
}

export { Requests };