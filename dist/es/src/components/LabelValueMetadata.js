"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelValueMetadata = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _SanitizedHtml = require("./SanitizedHtml");

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * Renders label/value pair metadata in a dl
 * @prop {object} labelValuePair
 */
var LabelValueMetadata =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LabelValueMetadata, _Component);

  function LabelValueMetadata() {
    (0, _classCallCheck2.default)(this, LabelValueMetadata);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LabelValueMetadata).apply(this, arguments));
  }

  (0, _createClass2.default)(LabelValueMetadata, [{
    key: "render",

    /**
     * render
     * @return {String} - HTML markup for the component
     */
    value: function render() {
      var labelValuePairs = this.props.labelValuePairs;

      if (labelValuePairs.length === 0) {
        return _react.default.createElement(_react.default.Fragment, null);
      }
      /* eslint-disable react/no-array-index-key */
      // Disabling array index key for dt/dd elements as
      // they are intended to display metadata that will not
      // need to be re-rendered internally in any meaningful way


      return _react.default.createElement("dl", {
        className: (0, _cssNs.default)('label-value-metadata')
      }, labelValuePairs.reduce(function (acc, labelValuePair, i) {
        return acc.concat([_react.default.createElement(_Typography.default, {
          component: "dt",
          key: "label-".concat(i),
          variant: "subtitle2"
        }, labelValuePair.label), _react.default.createElement(_Typography.default, {
          component: "dd",
          key: "value-".concat(i),
          variant: "body1"
        }, _react.default.createElement(_SanitizedHtml.SanitizedHtml, {
          htmlString: labelValuePair.value,
          ruleSet: "iiif"
        }))]);
      }, []));
      /* eslint-enable react/no-array-index-key */
    }
  }]);
  return LabelValueMetadata;
}(_react.Component);

exports.LabelValueMetadata = LabelValueMetadata;
LabelValueMetadata.propTypes = {
  labelValuePairs: _propTypes.default.array.isRequired // eslint-disable-line react/forbid-prop-types,

};