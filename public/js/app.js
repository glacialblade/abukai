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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__plugins__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__requests__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template_controller__ = __webpack_require__(8);
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
        key: 'handleChange',


        /**
         * Handle Change of Form Fields to set State
         */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
var state = {};



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Events; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = function () {
    function Events(component) {
        _classCallCheck(this, Events);

        this.component = component;
        utils.REACT.bindClassToMethods(this, []);
    }

    /**
     * jQuery Events Collection
     */


    _createClass(Events, [{
        key: "jQueryEvents",
        value: function jQueryEvents() {
            var component = this.component;
        }
    }]);

    return Events;
}();



/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requests; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Requests = function Requests(component) {
    _classCallCheck(this, Requests);

    this.component = component;
    utils.REACT.bindClassToMethods(this, []);
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateController; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TemplateController = function () {
    function TemplateController() {
        _classCallCheck(this, TemplateController);
    }

    _createClass(TemplateController, [{
        key: "default",
        value: function _default(component) {
            return React.createElement("div", { id: component.props.component_id });
        }
    }]);

    return TemplateController;
}();



/***/ })
/******/ ]);