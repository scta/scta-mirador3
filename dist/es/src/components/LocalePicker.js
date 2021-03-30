"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalePicker = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

/**
 * Provide a locale picker
 */
var LocalePicker =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LocalePicker, _Component);

  function LocalePicker() {
    (0, _classCallCheck2.default)(this, LocalePicker);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LocalePicker).apply(this, arguments));
  }

  (0, _createClass2.default)(LocalePicker, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          availableLocales = _this$props.availableLocales,
          classes = _this$props.classes,
          locale = _this$props.locale,
          setLocale = _this$props.setLocale;
      if (!setLocale || availableLocales.length < 2) return _react.default.createElement(_react.default.Fragment, null);
      return _react.default.createElement(_FormControl.default, null, _react.default.createElement(_Select.default, {
        MenuProps: {
          anchorOrigin: {
            horizontal: 'left',
            vertical: 'bottom'
          },
          getContentAnchorEl: null
        },
        displayEmpty: true,
        value: locale,
        onChange: function onChange(e) {
          setLocale(e.target.value);
        },
        name: "locale",
        classes: {
          select: classes.select
        },
        className: classes.selectEmpty
      }, availableLocales.map(function (l) {
        return _react.default.createElement(_MenuItem.default, {
          key: l,
          value: l
        }, _react.default.createElement(_Typography.default, {
          variant: "body2"
        }, l));
      })));
    }
  }]);
  return LocalePicker;
}(_react.Component);

exports.LocalePicker = LocalePicker;
LocalePicker.propTypes = {
  availableLocales: _propTypes.default.arrayOf(_propTypes.default.string),
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  locale: _propTypes.default.string,
  setLocale: _propTypes.default.func
};
LocalePicker.defaultProps = {
  availableLocales: [],
  classes: {},
  locale: '',
  setLocale: undefined
};