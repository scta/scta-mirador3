"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MiradorMenuButton = MiradorMenuButton;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * MiradorMenuButton ~ Wrap the given icon prop in an IconButton and a Tooltip.
 * This shares the passed in aria-label w/ the Tooltip (as title) and the IconButton
 * All props besides icon are spread to the IconButton component
*/
function MiradorMenuButton(props) {
  var ariaLabel = props['aria-label'];
  var children = props.children,
      containerId = props.containerId,
      dispatch = props.dispatch,
      TooltipProps = props.TooltipProps,
      iconButtonProps = (0, _objectWithoutProperties2.default)(props, ["children", "containerId", "dispatch", "TooltipProps"]);
  return _react.default.createElement(_Tooltip.default, (0, _extends2.default)({
    PopperProps: {
      container: document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer')))
    },
    title: ariaLabel
  }, TooltipProps), _react.default.createElement(_IconButton.default, iconButtonProps, children));
}

MiradorMenuButton.propTypes = {
  'aria-label': _propTypes.default.string.isRequired,
  children: _propTypes.default.element.isRequired,
  containerId: _propTypes.default.string.isRequired,
  dispatch: _propTypes.default.func,
  TooltipProps: _propTypes.default.object // eslint-disable-line react/forbid-prop-types

};
MiradorMenuButton.defaultProps = {
  dispatch: function dispatch() {},
  TooltipProps: {}
};