"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceExport = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCopyToClipboard = require("react-copy-to-clipboard");

/**
 */
var WorkspaceExport =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceExport, _Component);

  function WorkspaceExport() {
    (0, _classCallCheck2.default)(this, WorkspaceExport);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceExport).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceExport, [{
    key: "exportableState",

    /**
     * @private
     */
    value: function exportableState() {
      var state = this.props.state;
      var companionWindows = state.companionWindows,
          config = state.config,
          viewers = state.viewers,
          windows = state.windows,
          workspace = state.workspace;
      return JSON.stringify({
        companionWindows: companionWindows,
        config: config,
        viewers: viewers,
        windows: windows,
        workspace: workspace
      }, null, 2);
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          container = _this$props.container,
          handleClose = _this$props.handleClose,
          open = _this$props.open,
          t = _this$props.t;
      var exportableState = this.exportableState();
      return _react.default.createElement(_Dialog.default, {
        id: "workspace-settings",
        container: container,
        open: open,
        onClose: handleClose,
        scroll: "paper"
      }, _react.default.createElement(_DialogTitle.default, {
        id: "form-dialog-title",
        disableTypography: true
      }, _react.default.createElement(_Typography.default, {
        variant: "h2"
      }, t('downloadExport'))), _react.default.createElement(_DialogContent.default, null, children, _react.default.createElement("pre", null, exportableState)), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
        color: "secondary",
        onClick: function onClick() {
          return handleClose();
        }
      }, t('cancel')), _react.default.createElement(_reactCopyToClipboard.CopyToClipboard, {
        text: exportableState
      }, _react.default.createElement(_Button.default, {
        variant: "contained",
        color: "secondary"
      }, t('copy')))));
    }
  }]);
  return WorkspaceExport;
}(_react.Component);

exports.WorkspaceExport = WorkspaceExport;
WorkspaceExport.propTypes = {
  children: _propTypes.default.node,
  container: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  handleClose: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool,
  // eslint-disable-line react/forbid-prop-types
  state: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func
};
WorkspaceExport.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};