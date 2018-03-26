var state = {
	form: {
		picture: '',
		first_name: '',
		last_name: '',
		email: '',
		city: '',
		country: ''
	},
	formErrors: {
		picture: false,
		first_name: false,
		last_name: false,
		email: false,
		city: false,
		country: false
	},
	pictureFileName: '',
	loading: false,
	loadingUpload: false
};

export { state };