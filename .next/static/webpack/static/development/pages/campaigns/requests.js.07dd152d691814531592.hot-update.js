webpackHotUpdate("static\\development\\pages\\campaigns\\requests.js",{

/***/ "./components/requestrow.js":
/*!**********************************!*\
  !*** ./components/requestrow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ether_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ether/web3 */ "./ether/web3.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Req_row =
/*#__PURE__*/
function (_Component) {
  _inherits(Req_row, _Component);

  function Req_row() {
    _classCallCheck(this, Req_row);

    return _possibleConstructorReturn(this, _getPrototypeOf(Req_row).apply(this, arguments));
  }

  _createClass(Req_row, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Table"].Cell;
      console.log("inside dummy bababdasd");
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, null, this.props.id + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, null, this.props.request.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, null, _ether_web3__WEBPACK_IMPORTED_MODULE_2__["default"].utils.fromWei(this.props.request.value, "ether")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, null, this.props.request.reciver), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, null, this.props.request.totapproved, "/", this.props.approval), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "green"
      }, "Approve")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Cell, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        color: "Red"
      }, "Finalize")));
    }
  }]);

  return Req_row;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Req_row);

/***/ })

})
//# sourceMappingURL=requests.js.07dd152d691814531592.hot-update.js.map