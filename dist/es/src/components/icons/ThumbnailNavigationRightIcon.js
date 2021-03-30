"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThumbnailNavigationRightIcon;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

/**
 * ThumbnailNavigationRightIcon ~
*/
function ThumbnailNavigationRightIcon(props) {
  return _react.default.createElement(_SvgIcon.default, props, _react.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, _react.default.createElement("path", {
    d: "M0,0H24V24H0Z",
    transform: "translate(24) rotate(90)",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M3,3H21V5H3Z",
    transform: "translate(24) rotate(90)"
  }), _react.default.createElement("path", {
    d: "M19,3H5V21H19ZM17,19H7V5H17Z",
    transform: "translate(-2)"
  })));
}