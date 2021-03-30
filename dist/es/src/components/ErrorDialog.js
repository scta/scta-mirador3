"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorDialog = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _lodash = require("lodash");

/**
 */
var ErrorDialog =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ErrorDialog, _Component);

  function ErrorDialog() {
    (0, _classCallCheck2.default)(this, ErrorDialog);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ErrorDialog).apply(this, arguments));
  }

  (0, _createClass2.default)(ErrorDialog, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          errors = _this$props.errors,
          removeError = _this$props.removeError,
          t = _this$props.t;
      /* extract 'items' value and get first key-value-pair (an error) */

      var error = (0, _lodash.first)((0, _lodash.values)((0, _lodash.omit)(errors, 'items')));
      var hasError = !(0, _lodash.isUndefined)(error);
      return _react.default.createElement("div", null, hasError && _react.default.createElement(_Dialog.default, {
        onClose: function onClose() {
          return removeError(error.id);
        },
        open: hasError
      }, _react.default.createElement(_DialogTitle.default, null, t('errorDialogTitle')), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_core.DialogContentText, {
        variant: "body2",
        noWrap: true,
        color: "inherit"
      }, error.message), _react.default.createElement(_core.DialogActions, null, _react.default.createElement(_Button.default, {
        onClick: function onClick() {
          return removeError(error.id);
        }
      }, t('errorDialogConfirm'))))));
    }
  }]);
  return ErrorDialog;
}(_react.Component);

exports.ErrorDialog = ErrorDialog;
ErrorDialog.propTypes = {
  errors: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  removeError: _propTypes.default.func,
  t: _propTypes.default.func
};
ErrorDialog.defaultProps = {
  errors: null,
  removeError: function removeError() {},
  t: function t(key) {
    return key;
  }
};