"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestListItemError = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ErrorOutlineSharp = _interopRequireDefault(require("@material-ui/icons/ErrorOutlineSharp"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

/**
 * ManifestListItemError renders a component displaying a
 * message to the user about a problem loading a manifest
*/
var ManifestListItemError =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ManifestListItemError, _Component);

  function ManifestListItemError() {
    (0, _classCallCheck2.default)(this, ManifestListItemError);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ManifestListItemError).apply(this, arguments));
  }

  (0, _createClass2.default)(ManifestListItemError, [{
    key: "render",

    /**
     * Returns the rendered component
    */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          manifestId = _this$props.manifestId,
          onDismissClick = _this$props.onDismissClick,
          onTryAgainClick = _this$props.onTryAgainClick,
          t = _this$props.t;
      return _react.default.createElement(_Grid.default, {
        container: true
      }, _react.default.createElement(_Grid.default, {
        container: true
      }, _react.default.createElement(_Grid.default, {
        container: true,
        item: true,
        xs: 12,
        sm: 6
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 3
      }, _react.default.createElement(_Grid.default, {
        container: true,
        justify: "center"
      }, _react.default.createElement(_ErrorOutlineSharp.default, {
        className: classes.errorIcon
      }))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 9
      }, _react.default.createElement(_Typography.default, null, t('manifestError')), _react.default.createElement(_Typography.default, {
        className: classes.manifestIdText
      }, manifestId)))), _react.default.createElement(_Grid.default, {
        container: true
      }, _react.default.createElement(_Grid.default, {
        container: true,
        item: true,
        xs: 12,
        sm: 6,
        justify: "flex-end"
      }, _react.default.createElement(_Grid.default, {
        item: true
      }, _react.default.createElement(_Button.default, {
        onClick: function onClick() {
          onDismissClick(manifestId);
        }
      }, t('dismiss')), _react.default.createElement(_Button.default, {
        onClick: function onClick() {
          onTryAgainClick(manifestId);
        }
      }, t('tryAgain'))))));
    }
  }]);
  return ManifestListItemError;
}(_react.Component);

exports.ManifestListItemError = ManifestListItemError;
ManifestListItemError.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  manifestId: _propTypes.default.string.isRequired,
  onDismissClick: _propTypes.default.func.isRequired,
  onTryAgainClick: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired
};