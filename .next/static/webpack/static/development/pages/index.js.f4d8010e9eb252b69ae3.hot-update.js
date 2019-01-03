webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./ether/factory.js":
/*!**************************!*\
  !*** ./ether/factory.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ether/web3.js");
/* harmony import */ var _build_Factory_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/Factory.json */ "./ether/build/Factory.json");
var _build_Factory_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./build/Factory.json */ "./ether/build/Factory.json", 1);


var deployed_addres = "0x842461146ABcdB32292A08DA066bECB8cC249d41";
var myfact = new _web3__WEBPACK_IMPORTED_MODULE_0__["default"].eth.Contract(JSON.parse(_build_Factory_json__WEBPACK_IMPORTED_MODULE_1__.interface), deployed_addres);
console.log("I am deployed", myfact);
/* harmony default export */ __webpack_exports__["default"] = (myfact);

/***/ })

})
//# sourceMappingURL=index.js.f4d8010e9eb252b69ae3.hot-update.js.map