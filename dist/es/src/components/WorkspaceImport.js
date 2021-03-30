"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceImport = void 0;

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

/**
 */
var WorkspaceImport =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceImport, _Component);

  /**
   *
   * constructor
   */
  function WorkspaceImport(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WorkspaceImport);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceImport).call(this, props));
    _this.state = {
      configImportValue: ''
    };
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(WorkspaceImport, [{
    key: "handleChange",
    value: function handleChange(event) {
      event.preventDefault();
      this.setState({
        configImportValue: event.target.value
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleClick",
    value: function handleClick(event) {
      var importConfig = this.props.importConfig;
      var configImportValue = this.state.configImportValue;
      event.preventDefault();

      try {
        var configJSON = JSON.parse(configImportValue);
        importConfig(configJSON);
      } catch (ex) {
        var addError = this.props.addError;
        addError(ex.toString());
      }
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          handleClose = _this$props.handleClose,
          open = _this$props.open,
          t = _this$props.t;
      return _react.default.createElement(_Dialog.default, {
        id: "workspace-import",
        open: open,
        onClose: handleClose
      }, _react.default.createElement(_DialogTitle.default, {
        id: "workspace-import-title"
      }, t('import')), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_core.Input, {
        id: "workspace-import-input",
        rows: "15",
        multiline: true,
        variant: "filled",
        onChange: this.handleChange
      }), _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
        onClick: this.handleClick
      }, t('importWorkspace')))));
    }
  }]);
  return WorkspaceImport;
}(_react.Component);

exports.WorkspaceImport = WorkspaceImport;
WorkspaceImport.propTypes = {
  addError: _propTypes.default.func.isRequired,
  handleClose: _propTypes.default.func.isRequired,
  importConfig: _propTypes.default.func.isRequired,
  // eslint-disable-line react/forbid-prop-types
  open: _propTypes.default.bool,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func
};
WorkspaceImport.defaultProps = {
  open: false,
  t: function t(key) {
    return key;
  }
};