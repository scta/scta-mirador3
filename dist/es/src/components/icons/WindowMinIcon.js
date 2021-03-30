"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WindowMinIcon;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

/**
 * WindowMinIcon ~
*/
function WindowMinIcon(props) {
  return _react.default.createElement(_SvgIcon.default, props, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    d: "M5,16H8v3h2V14H5ZM16,8V5H14v5h5V8Z"
  }), _react.default.createElement("path", {
    d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
  })));
}