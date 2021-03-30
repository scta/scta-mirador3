"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSettings = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _CheckSharp = _interopRequireDefault(require("@material-ui/icons/CheckSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * LanguageSettings ~ the workspace sub menu to change the language
 * of the application
*/
var LanguageSettings =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LanguageSettings, _Component);

  function LanguageSettings() {
    (0, _classCallCheck2.default)(this, LanguageSettings);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LanguageSettings).apply(this, arguments));
  }

  (0, _createClass2.default)(LanguageSettings, [{
    key: "render",

    /**
     * Returns the rendered component
    */
    value: function render() {
      var _this$props = this.props,
          handleClick = _this$props.handleClick,
          languages = _this$props.languages;
      return _react.default.createElement(_react.default.Fragment, null, languages.map(function (language) {
        return _react.default.createElement(_MenuItem.default, {
          button: !language.current,
          key: language.locale,
          onClick: function onClick() {
            handleClick(language.locale);
          }
        }, language.current && _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_CheckSharp.default, null)), _react.default.createElement(_ListItemText.default, {
          inset: true,
          primaryTypographyProps: {
            variant: 'body1'
          }
        }, language.label));
      }));
    }
  }]);
  return LanguageSettings;
}(_react.Component);

exports.LanguageSettings = LanguageSettings;
LanguageSettings.propTypes = {
  handleClick: _propTypes.default.func.isRequired,
  languages: _propTypes.default.arrayOf(_propTypes.default.shape({
    current: _propTypes.default.bool.isRequired,
    label: _propTypes.default.string.isRequired,
    locale: _propTypes.default.string.isRequired
  })).isRequired
};