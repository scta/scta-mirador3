"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationSettings = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

/**
 * AnnotationSettings is a component to handle various annotation
 * display settings in the Annotation companion window
*/
var AnnotationSettings =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AnnotationSettings, _Component);

  function AnnotationSettings() {
    (0, _classCallCheck2.default)(this, AnnotationSettings);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AnnotationSettings).apply(this, arguments));
  }

  (0, _createClass2.default)(AnnotationSettings, [{
    key: "render",

    /**
     * Returns the rendered component
    */
    value: function render() {
      var _this$props = this.props,
          displayAll = _this$props.displayAll,
          displayAllDisabled = _this$props.displayAllDisabled,
          t = _this$props.t,
          toggleAnnotationDisplay = _this$props.toggleAnnotationDisplay;
      return _react.default.createElement(_FormControlLabel.default, {
        control: _react.default.createElement(_Switch.default, {
          checked: displayAll,
          disabled: displayAllDisabled,
          onChange: toggleAnnotationDisplay,
          value: displayAll ? 'all' : 'select'
        }),
        label: t('displayAllAnnotations'),
        labelPlacement: "start"
      });
    }
  }]);
  return AnnotationSettings;
}(_react.Component);

exports.AnnotationSettings = AnnotationSettings;
AnnotationSettings.propTypes = {
  displayAll: _propTypes.default.bool.isRequired,
  displayAllDisabled: _propTypes.default.bool.isRequired,
  t: _propTypes.default.func.isRequired,
  toggleAnnotationDisplay: _propTypes.default.func.isRequired,
  windowId: _propTypes.default.string.isRequired // eslint-disable-line react/no-unused-prop-types

};