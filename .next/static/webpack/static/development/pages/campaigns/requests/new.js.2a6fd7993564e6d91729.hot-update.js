webpackHotUpdate("static\\development\\pages\\campaigns\\requests\\new.js",{

/***/ "./pages/campaigns/requests/new.js":
/*!*****************************************!*\
  !*** ./pages/campaigns/requests/new.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _ether_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ether/web3 */ "./ether/web3.js");
/* harmony import */ var _ether_build_campaign_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ether/build/campaign.json */ "./ether/build/campaign.json");
var _ether_build_campaign_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../ether/build/campaign.json */ "./ether/build/campaign.json", 1);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var New_request =
/*#__PURE__*/
function (_Component) {
  _inherits(New_request, _Component);

  function New_request() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, New_request);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(New_request)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      total_ether: "",
      desc: "",
      recp: "",
      errormsg: "",
      loading: false,
      sucess: true
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(event) {
        var camp, account;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log("the address is ", _this.props.address);
                event.preventDefault();
                _context.next = 4;
                return new _ether_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.Contract(JSON.parse(_ether_build_campaign_json__WEBPACK_IMPORTED_MODULE_5__.interface), _this.props.address);

              case 4:
                camp = _context.sent;

                _this.setState({
                  loading: true,
                  errormsg: ""
                });

                _context.prev = 6;
                _context.next = 9;
                return _ether_web3__WEBPACK_IMPORTED_MODULE_4__["default"].eth.getAccounts();

              case 9:
                account = _context.sent;
                console.log("camps is ", camp.methods.createreq);
                _context.next = 13;
                return camp.methods.createreq(_this.state.desc, _ether_web3__WEBPACK_IMPORTED_MODULE_4__["default"].utils.toWei(_this.state.total_ether, "ether"), _this.state.recp).send({
                  from: account[0]
                });

              case 13:
                _this.setState({
                  loading: false,
                  sucess: false
                });

                console.log("the state is ", _this.state.loading); //Router.pushRoute("/");

                _context.next = 22;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](6);
                console.log("there  main error is", _context.t0);

                _this.setState({
                  errormsg: _context.t0.message
                });

                console.log("error message is ", _this.state.errormsg);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 17]]);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(New_request, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "new request form"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"], {
        onSubmit: this.onSubmit,
        error: !!this.state.errormsg
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        value: this.state.desc,
        onChange: function onChange(event) {
          return _this2.setState({
            desc: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Ether required "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        label: "ether",
        labelPosition: "right",
        value: this.state.mincontribution,
        onChange: function onChange(event) {
          return _this2.setState({
            mincontribution: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Recipient address "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        value: this.state.recp,
        onChange: function onChange(event) {
          return _this2.setState({
            recp: event.target.value
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Form"].Field, {
        id: "form-button-control-public",
        control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"],
        content: "Create Request",
        primary: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dimmer"], {
        active: this.state.loading,
        page: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Loader"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
        as: "h2",
        icon: true,
        inverted: true
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Processing Transaction"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        error: true,
        header: "Oops Something went wrong.Please re try",
        content: this.state.errormsg
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        positive: true,
        hidden: this.state.sucess
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"].Header, null, "Your requested is created "))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                //  const address = props.query.address;
                console.log("this address is maybe", props.query.address);
                return _context2.abrupt("return", {
                  address: props.query.address
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return New_request;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (New_request);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\new")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=new.js.2a6fd7993564e6d91729.hot-update.js.map