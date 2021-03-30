"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceControlPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _WorkspaceControlPanelButtons = _interopRequireDefault(require("../containers/WorkspaceControlPanelButtons"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * Provides the panel responsible for controlling the entire workspace
 */
var WorkspaceControlPanel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceControlPanel, _Component);

  function WorkspaceControlPanel() {
    (0, _classCallCheck2.default)(this, WorkspaceControlPanel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceControlPanel).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceControlPanel, [{
    key: "render",

    /**
     * render
     * @return {String} - HTML markup for the component
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t;
      return _react.default.createElement(_AppBar.default, {
        className: (0, _classnames.default)(classes.root, (0, _cssNs.default)('workspace-control-panel')),
        color: "default",
        position: "absolute",
        component: "nav",
        "aria-label": t('workspace')
      }, _react.default.createElement(_Toolbar.default, {
        disableGutters: true,
        className: classes.toolbar
      }, _react.default.createElement(_WorkspaceControlPanelButtons.default, null)));
    }
  }]);
  return WorkspaceControlPanel;
}(_react.Component);

exports.WorkspaceControlPanel = WorkspaceControlPanel;
WorkspaceControlPanel.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func.isRequired
};