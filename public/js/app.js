/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

utils.FORM.setAjaxDefaults();

__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersForm", function() { return CustomersForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_common_component__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requests__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template_controller__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var CustomersForm = function (_CommonComponent) {
    _inherits(CustomersForm, _CommonComponent);

    function CustomersForm(props) {
        _classCallCheck(this, CustomersForm);

        var _this = _possibleConstructorReturn(this, (CustomersForm.__proto__ || Object.getPrototypeOf(CustomersForm)).call(this, props));

        _this.state = __WEBPACK_IMPORTED_MODULE_1__state__["a" /* state */];
        _this.defaultState = _.cloneDeep(_this.state); // For Data Form Reset
        utils.REACT.bindClassToMethods(_this, ['handleChange']);
        return _this;
    }

    /**
     * Before Component Mounts
     */


    _createClass(CustomersForm, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.requests = new __WEBPACK_IMPORTED_MODULE_4__requests__["a" /* Requests */](this);
            this.events = new __WEBPACK_IMPORTED_MODULE_2__events__["a" /* Events */](this);
            this.plugins = new __WEBPACK_IMPORTED_MODULE_3__plugins__["a" /* Plugins */](this);
            this.templateController = new __WEBPACK_IMPORTED_MODULE_5__template_controller__["a" /* TemplateController */](this);
        }

        /**
         * After Component Mounts
         */

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // Elements Configuration
            this.el = {};
            this.el.selector = $('#' + this.props.component_id);
            this.el.modal = this.el.selector.find('#customers-modal');

            this.events.jQueryEvents();
        }
    }]);

    return CustomersForm;
}(__WEBPACK_IMPORTED_MODULE_0_components_common_component__["a" /* CommonComponent */]);

utils.REACT.domrender(CustomersForm, $('[component=CustomersForm]'));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_helpers_base__ = __webpack_require__(4);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var CommonComponent = function (_React$Component) {
    _inherits(CommonComponent, _React$Component);

    function CommonComponent() {
        _classCallCheck(this, CommonComponent);

        return _possibleConstructorReturn(this, (CommonComponent.__proto__ || Object.getPrototypeOf(CommonComponent)).apply(this, arguments));
    }

    _createClass(CommonComponent, [{
        key: 'helpers',
        value: function helpers(type) {
            // Inintialize Helper Instances
            this.helpersInstances = this.helpersInstances ? this.helpersInstances : {};

            // Set Helper
            if (!this.helpersInstances[type]) {
                var helpers = new __WEBPACK_IMPORTED_MODULE_0_helpers_base__["a" /* Helpers */](this, type);
                this.helpersInstances[type] = helpers.getClass();
            }

            return this.helpersInstances[type];
        }

        /**
         * Handle Change of Form Fields to set State
         */

    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var target = $(e.target);
            var name = target.attr('data-name').split('.');
            var state = this.state;

            // If data-name doesn't have . ex(data-name="foo")
            if (name.length == 1) {
                state[name[0]] = target.attr('type') != 'checkbox' ? target.val() : target.prop('checked');
            }
            // If data-name have . ex(data-name="form.foo")
            else {
                    var currentVariable = state;
                    $.each(name, function (key, val) {
                        if (key != name.length - 1) {
                            currentVariable[val] = currentVariable[val] ? currentVariable[val] : {};
                            currentVariable = currentVariable[val];
                        } else {
                            currentVariable[val] = target.attr('type') != 'checkbox' ? target.val() : target.prop('checked');
                        }
                    });
                }

            this.setState(state);

            // Checks for Callback Function
            var callback = target.attr('data-event-callback');
            if (callback) {
                this.events[callback](target);
            }
        }

        /**
         * Render Display
         */

    }, {
        key: 'render',
        value: function render() {
            var template = this.templateController.default(this);
            return template;
        }
    }]);

    return CommonComponent;
}(React.Component);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__form_helper__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Helpers = function () {
    function Helpers(component, type) {
        _classCallCheck(this, Helpers);

        this.component = component;
        this.type = type;
    }

    _createClass(Helpers, [{
        key: 'getClass',
        value: function getClass() {
            switch (this.type) {
                case 'form':
                    return new __WEBPACK_IMPORTED_MODULE_0__form_helper__["a" /* FormHelper */](this.component);
                    break;
            }
        }
    }]);

    return Helpers;
}();

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormHelper; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormHelper = function () {
    function FormHelper(component) {
        _classCallCheck(this, FormHelper);

        this.component = component;
    }

    /**
     * Converts a simple array to options
     *
     * @var  array
     */


    _createClass(FormHelper, [{
        key: "arrayToOptions",
        value: function arrayToOptions(array) {
            if (array) {
                return array.map(function (val) {
                    return React.createElement(
                        "option",
                        { value: val, key: val },
                        val
                    );
                });
            }

            return [];
        }

        /**
         * Displays the Error of the Field
         *
         * @var  key
         */

    }, {
        key: "formError",
        value: function formError(key) {
            return React.createElement(
                "span",
                null,
                this.component.state.formErrors[key] ? React.createElement(
                    "div",
                    { className: "text-danger" },
                    this.component.state.formErrors[key][0]
                ) : false
            );
        }

        /**
         * Handles the error codes from the server
         *
         * @var  data
         */

    }, {
        key: "handleServerError",
        value: function handleServerError(data) {
            if (data.status == 422) {
                this.component.setState({
                    formErrors: data.responseJSON
                });
                return;
            }

            $.alert('<span style="color: red">An error occurred please try again.</span>');
        }
    }]);

    return FormHelper;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
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



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = function () {
    function Events(component) {
        _classCallCheck(this, Events);

        this.component = component;
        utils.REACT.bindClassToMethods(this, ['activatePictureInput', 'changePicture', 'submit']);
    }

    /**
     * jQuery Events Collection
     */


    _createClass(Events, [{
        key: 'jQueryEvents',
        value: function jQueryEvents() {
            var component = this.component;

            $(document).on('click', component.props.trigger, function () {
                var email = $(this).attr('data-email');
                component.setState(_.cloneDeep(component.defaultState));

                if (email) {
                    component.requests.show(email);
                } else {
                    component.el.modal.modal('show');
                }
            });
        }

        /**
         * Clicks the File Input
         */

    }, {
        key: 'activatePictureInput',
        value: function activatePictureInput() {
            this.component.refs.picture.click();
        }

        /**
         * Change Picture Process
         */

    }, {
        key: 'changePicture',
        value: function changePicture() {
            var file = this.component.refs.picture.files[0];
            var form = this.component.state.form;
            form.picture = file && file.type.match('image') ? this.component.refs.picture.files[0] : '';

            this.component.setState({ form: form, pictureFileName: form.picture ? form.picture.name : '' });

            // On Edit Auto Upload's the Picture
            if (form.id && form.picture) {
                this.component.requests.uploadPicture();
            }
        }

        /**
         * Submits the form
         */

    }, {
        key: 'submit',
        value: function submit(e) {
            e.preventDefault();
            this.component.requests.save();
        }
    }]);

    return Events;
}();



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plugins; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plugins = function Plugins(component) {
    _classCallCheck(this, Plugins);

    this.component = component;
    utils.REACT.bindClassToMethods(this, []);
};



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requests; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Requests = function () {
    function Requests(component) {
        _classCallCheck(this, Requests);

        this.component = component;
        utils.REACT.bindClassToMethods(this, []);
    }

    /**
     * Get Customer Details
     */


    _createClass(Requests, [{
        key: 'show',
        value: function show(email) {
            $.ajax({
                url: '/' + email,
                type: 'GET',
                success: function (data) {
                    this.component.setState({ form: data });
                    this.component.el.modal.modal('show');
                }.bind(this)
            });
        }

        /**
         * Save / Update Request
         */

    }, {
        key: 'save',
        value: function save() {
            var data = _.cloneDeep(this.component.state.form);
            if (data.id) {
                data._method = 'PUT';
            }

            this.component.setState({ loading: true });
            $.ajax({
                url: '/' + (data.id ? data.id : ''),
                type: 'POST',
                data: utils.FORM.generateFormData(data),
                processData: false,
                contentType: false,
                success: function success(data) {
                    window.location.reload();
                },
                error: function (data) {
                    this.component.helpers('form').handleServerError(data);
                    this.component.setState({ loading: false });
                }.bind(this)
            });
        }

        /**
         * Upload's Picture on Edit
         */

    }, {
        key: 'uploadPicture',
        value: function uploadPicture() {
            var data = _.cloneDeep(this.component.state.form);
            data._method = 'PUT';

            this.component.setState({ loadingUpload: true });
            $.ajax({
                url: '/' + data.id + '/picture',
                type: 'POST',
                data: utils.FORM.generateFormData(data),
                processData: false,
                contentType: false,
                success: function (data) {
                    // Update Picture's State
                    var form = this.component.state.form;
                    form.picture = data.picture;
                    form.picture_uri = data.picture_uri;

                    this.component.setState({ form: form, pictureFileName: '', loadingUpload: false });
                }.bind(this),
                error: function (data) {
                    this.component.helpers('form').handleServerError(data);
                    this.component.setState({ loadingUpload: false });
                }.bind(this)
            });
        }
    }]);

    return Requests;
}();



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config__ = __webpack_require__(11);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var TemplateController = function () {
	function TemplateController() {
		_classCallCheck(this, TemplateController);
	}

	_createClass(TemplateController, [{
		key: "default",
		value: function _default(component) {
			return React.createElement(
				"div",
				{ id: component.props.component_id },
				React.createElement(
					"div",
					{ id: "customers-modal", className: "modal fade", tabIndex: "-1", role: "dialog", "data-backdrop": "static", "data-keyboard": false },
					React.createElement(
						"div",
						{ className: "modal-dialog modal-lg", role: "document" },
						React.createElement(
							"form",
							{ onSubmit: component.events.submit },
							React.createElement(
								"div",
								{ className: "modal-content" },
								React.createElement(
									"div",
									{ className: "modal-header" },
									React.createElement(
										"h4",
										{ className: "modal-title" },
										component.state.form.id ? 'Edit ' + component.state.form.first_name + ' ' + component.state.form.last_name : 'Add Customer'
									)
								),
								React.createElement(
									"div",
									{ className: "modal-body" },
									React.createElement(
										"div",
										{ className: "row" },
										React.createElement(
											"div",
											{ className: "col-md-3" },
											component.state.loadingUpload ? 'Uploading your picture please wait...' : React.createElement("img", { src: component.state.form.picture_uri ? component.state.form.picture_uri : '/images/default-profile.png', style: { width: '100%' } }),
											component.helpers('form').formError('picture'),
											React.createElement(
												"button",
												{ disabled: component.state.loadingUpload || component.state.loading, type: "button", className: "btn btn-warning", style: { width: '100%' }, onClick: component.events.activatePictureInput },
												"Choose a Picture"
											),
											React.createElement("input", { type: "file", name: "picture", ref: "picture", onChange: component.events.changePicture, style: { marginTop: '-30px', opacity: 0 } }),
											React.createElement(
												"div",
												{ className: "text-success", style: { wordWrap: 'break-word', marginTop: '15px' } },
												component.state.pictureFileName
											)
										),
										React.createElement(
											"div",
											{ className: "col-md-9" },
											React.createElement(
												"div",
												{ className: "alert alert-info" },
												"Automatic Picture Upload will only work on Edit Customer."
											),
											React.createElement(
												"div",
												{ className: "row" },
												React.createElement(
													"div",
													{ className: "col-md-6" },
													React.createElement(
														"strong",
														null,
														"Email"
													),
													React.createElement("input", { type: "text", className: "form-control", "data-name": "form.email", value: component.state.form.email, onChange: component.handleChange }),
													component.helpers('form').formError('email'),
													React.createElement("br", null),
													React.createElement(
														"strong",
														null,
														"First Name"
													),
													React.createElement("input", { type: "text", className: "form-control", "data-name": "form.first_name", value: component.state.form.first_name, onChange: component.handleChange }),
													component.helpers('form').formError('first_name'),
													React.createElement("br", null),
													React.createElement(
														"strong",
														null,
														"Last Name"
													),
													React.createElement("input", { type: "text", className: "form-control", "data-name": "form.last_name", value: component.state.form.last_name, onChange: component.handleChange }),
													component.helpers('form').formError('last_name')
												),
												React.createElement(
													"div",
													{ className: "col-md-6" },
													React.createElement(
														"strong",
														null,
														"City"
													),
													React.createElement("input", { type: "text", className: "form-control", "data-name": "form.city", value: component.state.form.city, onChange: component.handleChange }),
													component.helpers('form').formError('city'),
													React.createElement("br", null),
													React.createElement(
														"strong",
														null,
														"Country"
													),
													React.createElement(
														"select",
														{ className: "form-control", "data-name": "form.country", value: component.state.form.country, onChange: component.handleChange },
														React.createElement(
															"option",
															{ value: "" },
															"Please select a country"
														),
														component.helpers('form').arrayToOptions(__WEBPACK_IMPORTED_MODULE_0_config__["a" /* Config */].countries)
													),
													component.helpers('form').formError('country')
												)
											)
										)
									)
								),
								React.createElement(
									"div",
									{ className: "modal-footer" },
									React.createElement(
										"button",
										{ disabled: component.state.loading, type: "button", className: "btn btn-default", "data-dismiss": "modal" },
										"Close"
									),
									React.createElement(
										"button",
										{ disabled: component.state.loading, className: "btn btn-primary" },
										component.state.loading ? 'Saving please wait...' : 'Save Changes'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return TemplateController;
}();



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var Config = {
	countries: ['Canada', 'Germany', 'Japan', 'United Kingdom', 'United States']
};



/***/ })
/******/ ]);