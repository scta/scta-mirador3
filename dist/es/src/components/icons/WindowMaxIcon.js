"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WindowMaxIcon;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

/**
 * WindowMaxIcon ~
*/
function WindowMaxIcon(props) {
  return _react.default.createElement(_SvgIcon.default, props, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    d: "M7,14H5v5h5V17H7Zm7-9V7h3v3h2V5Z"
  }), _react.default.createElement("path", {
    d: "M22.517,1.524H1.736V22.37H22.517Zm-2,18.845H3.736V3.524H20.517Z"
  })));
}