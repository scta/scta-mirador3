"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceControlPanelButtons = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

var _WorkspaceFullScreenButton = _interopRequireDefault(require("../containers/WorkspaceFullScreenButton"));

var _WorkspaceAddButton = _interopRequireDefault(require("../containers/WorkspaceAddButton"));

var _WorkspaceMenuButton = _interopRequireDefault(require("../containers/WorkspaceMenuButton"));

/** Renders plugins */
var PluginHook = function PluginHook(props) {
  var PluginComponents = props.PluginComponents; // eslint-disable-line react/prop-types

  return PluginComponents ? PluginComponents.map(function (PluginComponent, index) {
    return _react.default.createElement(PluginComponent, (0, _extends2.default)({}, props, {
      key: index
    })) // eslint-disable-line react/no-array-index-key
    ;
  }) : null;
};
/**
 *
 */


var WorkspaceControlPanelButtons =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceControlPanelButtons, _Component);

  function WorkspaceControlPanelButtons() {
    (0, _classCallCheck2.default)(this, WorkspaceControlPanelButtons);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceControlPanelButtons).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceControlPanelButtons, [{
    key: "render",

    /**
     * render
     *
     * @return {type}  description
     */
    value: function render() {
      return _react.default.createElement("div", {
        className: (0, _cssNs.default)('workspace-control-panel-buttons')
      }, _react.default.createElement(_WorkspaceAddButton.default, null), _react.default.createElement(_WorkspaceMenuButton.default, null), _react.default.createElement(_WorkspaceFullScreenButton.default, null), _react.default.createElement(PluginHook, this.props));
    }
  }]);
  return WorkspaceControlPanelButtons;
}(_react.Component);

exports.WorkspaceControlPanelButtons = WorkspaceControlPanelButtons;