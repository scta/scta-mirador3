"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SanitizedHtml = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dompurify = require("dompurify");

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

var _htmlRules = _interopRequireDefault(require("../lib/htmlRules"));

/**
*/
var SanitizedHtml =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SanitizedHtml, _Component);

  function SanitizedHtml() {
    (0, _classCallCheck2.default)(this, SanitizedHtml);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SanitizedHtml).apply(this, arguments));
  }

  (0, _createClass2.default)(SanitizedHtml, [{
    key: "render",

    /**
    */
    value: function render() {
      var _this$props = this.props,
          htmlString = _this$props.htmlString,
          ruleSet = _this$props.ruleSet;
      return _react.default.createElement("span", {
        className: (0, _cssNs.default)('third-party-html'),
        dangerouslySetInnerHTML: {
          // eslint-disable-line react/no-danger
          __html: (0, _dompurify.sanitize)(htmlString, _htmlRules.default[ruleSet])
        }
      });
    }
  }]);
  return SanitizedHtml;
}(_react.Component);

exports.SanitizedHtml = SanitizedHtml;
SanitizedHtml.propTypes = {
  htmlString: _propTypes.default.string.isRequired,
  ruleSet: _propTypes.default.string.isRequired
};