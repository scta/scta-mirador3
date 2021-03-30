"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewerInfo = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 *
 */
var ViewerInfo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ViewerInfo, _Component);

  function ViewerInfo() {
    (0, _classCallCheck2.default)(this, ViewerInfo);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ViewerInfo).apply(this, arguments));
  }

  (0, _createClass2.default)(ViewerInfo, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          canvasCount = _this$props.canvasCount,
          canvasIndex = _this$props.canvasIndex,
          canvasLabel = _this$props.canvasLabel,
          t = _this$props.t;
      return _react.default.createElement("div", {
        className: (0, _cssNs.default)('osd-info')
      }, _react.default.createElement(_Typography.default, {
        inline: true,
        variant: "caption",
        className: (0, _cssNs.default)('canvas-count')
      }, "".concat(canvasIndex + 1, " ").concat(t('of'), " ").concat(canvasCount)), _react.default.createElement(_Typography.default, {
        inline: true,
        variant: "caption",
        className: (0, _cssNs.default)('canvas-label')
      }, canvasLabel && " \u2022 ".concat(canvasLabel)));
    }
  }]);
  return ViewerInfo;
}(_react.Component);

exports.ViewerInfo = ViewerInfo;
ViewerInfo.defaultProps = {
  canvasLabel: undefined,
  t: function t() {}
};
ViewerInfo.propTypes = {
  canvasCount: _propTypes.default.number.isRequired,
  canvasIndex: _propTypes.default.number.isRequired,
  canvasLabel: _propTypes.default.string,
  t: _propTypes.default.func
};