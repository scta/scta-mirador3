"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceArea = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ErrorDialog = _interopRequireDefault(require("../containers/ErrorDialog"));

var _WorkspaceControlPanel = _interopRequireDefault(require("../containers/WorkspaceControlPanel"));

var _Workspace = _interopRequireDefault(require("../containers/Workspace"));

var _WorkspaceAdd = _interopRequireDefault(require("../containers/WorkspaceAdd"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * This is the top level Mirador component.
 * @prop {Object} manifests
 */
var WorkspaceArea =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceArea, _Component);

  function WorkspaceArea() {
    (0, _classCallCheck2.default)(this, WorkspaceArea);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceArea).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceArea, [{
    key: "render",

    /**
     * render
     * @return {String} - HTML markup for the component
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible,
          isWorkspaceControlPanelVisible = _this$props.isWorkspaceControlPanelVisible,
          t = _this$props.t;
      return _react.default.createElement("main", {
        className: (0, _classnames.default)(classes.background, (0, _cssNs.default)('viewer')),
        "aria-label": t('workspace')
      }, isWorkspaceControlPanelVisible && _react.default.createElement(_WorkspaceControlPanel.default, null), isWorkspaceAddVisible ? _react.default.createElement(_WorkspaceAdd.default, null) : _react.default.createElement(_Workspace.default, null), _react.default.createElement(_ErrorDialog.default, null));
    }
  }]);
  return WorkspaceArea;
}(_react.Component);

exports.WorkspaceArea = WorkspaceArea;
WorkspaceArea.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types,
  isWorkspaceAddVisible: _propTypes.default.bool,
  isWorkspaceControlPanelVisible: _propTypes.default.bool.isRequired,
  t: _propTypes.default.func.isRequired
};
WorkspaceArea.defaultProps = {
  isWorkspaceAddVisible: false
};