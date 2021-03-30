"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceSettings = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 */
var WorkspaceSettings =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceSettings, _Component);

  /**
   * constructor -
   */
  function WorkspaceSettings(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WorkspaceSettings);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceSettings).call(this, props));
    _this.handleThemeChange = _this.handleThemeChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * Propagate theme palette type selection into the global state
   */


  (0, _createClass2.default)(WorkspaceSettings, [{
    key: "handleThemeChange",
    value: function handleThemeChange(event) {
      var updateConfig = this.props.updateConfig;
      updateConfig({
        theme: {
          palette: {
            type: event.target.value
          }
        }
      });
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          container = _this$props.container,
          handleClose = _this$props.handleClose,
          open = _this$props.open,
          children = _this$props.children,
          theme = _this$props.theme,
          t = _this$props.t;
      return _react.default.createElement(_Dialog.default, {
        id: "workspace-settings",
        container: container,
        open: open,
        onClose: handleClose
      }, _react.default.createElement(_DialogTitle.default, {
        id: "form-dialog-title",
        disableTypography: true
      }, _react.default.createElement(_Typography.default, {
        variant: "h2"
      }, t('settings'))), _react.default.createElement(_DialogContent.default, null, children, _react.default.createElement(_FormControl.default, null, _react.default.createElement(_InputLabel.default, {
        htmlFor: "theme-simple"
      }, t('theme')), _react.default.createElement(_Select.default, {
        MenuProps: {
          anchorOrigin: {
            horizontal: 'left',
            vertical: 'bottom'
          },
          getContentAnchorEl: null
        },
        value: theme.palette.type,
        onChange: this.handleThemeChange,
        inputProps: {
          id: 'theme-simple',
          name: 'theme'
        }
      }, _react.default.createElement(_MenuItem.default, {
        value: "light"
      }, t('light')), _react.default.createElement(_MenuItem.default, {
        value: "dark"
      }, t('dark'))))));
    }
  }]);
  return WorkspaceSettings;
}(_react.Component);

exports.WorkspaceSettings = WorkspaceSettings;
WorkspaceSettings.propTypes = {
  children: _propTypes.default.node,
  container: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  handleClose: _propTypes.default.func.isRequired,
  open: _propTypes.default.bool,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func,
  theme: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  updateConfig: _propTypes.default.func.isRequired
};
WorkspaceSettings.defaultProps = {
  children: null,
  container: null,
  open: false,
  t: function t(key) {
    return key;
  }
};