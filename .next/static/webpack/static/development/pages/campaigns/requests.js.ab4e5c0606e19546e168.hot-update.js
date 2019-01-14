webpackHotUpdate("static\\development\\pages\\campaigns\\requests.js",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/layout */ "./components/layout.js");
/* harmony import */ var _ether_web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ether/web3 */ "./ether/web3.js");
/* harmony import */ var _ether_build_campaign_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ether/build/campaign.json */ "./ether/build/campaign.json");
var _ether_build_campaign_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../ether/build/campaign.json */ "./ether/build/campaign.json", 1);
/* harmony import */ var _components_requestrow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/requestrow */ "./components/requestrow.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Request =
/*#__PURE__*/
function (_Component) {
  _inherits(Request, _Component);

  function Request() {
    _classCallCheck(this, Request);

    return _possibleConstructorReturn(this, _getPrototypeOf(Request).apply(this, arguments));
  }

  _createClass(Request, [{
    key: "renderrow",
    value: function renderrow() {
      console.log("inside render rwo function");
      this.props.requests.map(function (request, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_requestrow__WEBPACK_IMPORTED_MODULE_7__["default"], null);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Header,
          Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Row,
          HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].HeaderCell,
          Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"].Body;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Open Request"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        route: "/campaigns/".concat(this.props.address, "/requests/new")
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        primary: true
      }, "Add request "))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Table"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Amount"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Approval count"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Approve"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeaderCell, null, "Finalize"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Body, null, this.renderrow())));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(props) {
        var camp, tot_req, requests;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _ether_web3__WEBPACK_IMPORTED_MODULE_5__["default"].eth.Contract(JSON.parse(_ether_build_campaign_json__WEBPACK_IMPORTED_MODULE_6__.interface), props.query.address);

              case 2:
                camp = _context.sent;
                _context.next = 5;
                return camp.methods.getreqlen().call();

              case 5:
                tot_req = _context.sent;
                console.log("number of request present is ", tot_req);
                _context.next = 9;
                return Promise.all(Array(parseInt(tot_req)).fill().map(function (element, index) {
                  return camp.methods.reqarray(index).call();
                }));

              case 9:
                requests = _context.sent;
                console.log("retrived reuests are", requests);
                return _context.abrupt("return", {
                  requests: requests,
                  address: props.query.address,
                  tot_req: tot_req
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Request;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Request);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\requests\\index")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=requests.js.ab4e5c0606e19546e168.hot-update.js.map