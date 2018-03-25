utils = {
	REACT: {
		/**
		 * React Dom Render with element check.
		 * @param $element
		 * @param $selector
		 */
		domrender: function($element, $selector) {
		    if($selector[0]) {
		    	$.each($selector, function() {
			        ReactDOM.render(
			            React.createElement($element, $(this).data(), null),
			            $(this)[0]
			        );
		    	})
		    }
	    },

	    /**
	     * Binds the Class to the Methods so we can use setState for example.
	     * @param $class
	     * @param $methods
	     */
	    bindClassToMethods: function($class, $methods) {
			$.each($methods, function(key, val) {
				$class[val] = $class[val].bind($class);
			});
	    }
	},

	FORM: {
		setAjaxDefaults: function() {
			$.ajaxSetup({
			    headers: {
			        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			    }
			});	
		},

		generateFormData(data) {
	        var formData = new FormData();

	        for(var i in data) {
	        	formData.append(i, data[i]);
	        }

	        return formData;
	    }
	},
};