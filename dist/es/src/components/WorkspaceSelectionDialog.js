"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceSelectionDialog = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 */
var WorkspaceSelectionDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceSelectionDialog, _Component);

  function WorkspaceSelectionDialog() {
    (0, _classCallCheck2.default)(this, WorkspaceSelectionDialog);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceSelectionDialog).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceSelectionDialog, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          container = _this$props.container,
          handleClose = _this$props.handleClose,
          open = _this$props.open,
          children = _this$props.children,
          workspaceType = _this$props.workspaceType,
          updateConfig = _this$props.updateConfig,
          t = _this$props.t;
      return _react.default.createElement(_Dialog.default, {
        id: "workspace-settings",
        container: container,
        open: open,
        onClose: handleClose
      }, _react.default.createElement(_DialogTitle.default, {
        id: "form-dialog-title"
      }, t('workspaceSelectionTitle')), _react.default.createElement(_DialogContent.default, null, children, _react.default.createElement(_FormControl.default, null, _react.default.createElement(_InputLabel.default, {
        htmlFor: "workspace-type"
      }, t('workspace')), _react.default.createElement(_Select.default, {
        MenuProps: {
          anchorOrigin: {
            horizontal: 'left',
            vertical: 'bottom'
          },
          getContentAnchorEl: null
        },
        value: workspaceType,
        onChange: function onChange(event) {
          updateConfig({
            workspace: {
              type: event.target.value
            }
          });
        },
        inputProps: {
          id: 'workspace-type',
          name: 'workspace'
        }
      }, _react.default.createElement(_MenuItem.default, {
        value: "elastic"
      }, t('elastic')), _react.default.createElement(_MenuItem.default, {
        value: "mosaic"
      }, t('mosaic'))))));
    }
  }]);
  return WorkspaceSelectionDialog;
}(_react.Component);

exports.WorkspaceSelectionDialog = WorkspaceSelectionDialog;
WorkspaceSelectionDialog.propTypes = {
  children: _propTypes.default.node,
  container: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  handleClose: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func,
  updateConfig: _propTypes.default.func.isRequired,
  workspaceType: _propTypes.default.string.isRequired
};
WorkspaceSelectionDialog.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};