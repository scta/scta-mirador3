"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactFullScreen = _interopRequireDefault(require("react-full-screen"));

var _reactI18next = require("react-i18next");

var _i18n = _interopRequireDefault(require("../i18n"));

var _WorkspaceArea = _interopRequireDefault(require("../containers/WorkspaceArea"));

var _AuthenticationSender = _interopRequireDefault(require("../containers/AuthenticationSender"));

var _AccessTokenSender = _interopRequireDefault(require("../containers/AccessTokenSender"));

require("../styles/index.scss");

/**
 * This is the top level Mirador component.
 * @prop {Object} manifests
 */
var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(App, _Component);

  /** */
  function App(props) {
    var _this;

    (0, _classCallCheck2.default)(this, App);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).call(this, props));
    _this.i18n = _i18n.default;
    return _this;
  }
  /**
   * Set i18n language on component mount
   */


  (0, _createClass2.default)(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var language = this.props.language;
      this.i18n.changeLanguage(language);
    }
    /**
     * Update the i18n language if it is changed
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var language = this.props.language;

      if (prevProps.language !== language) {
        this.i18n.changeLanguage(language);
      }
    }
    /**
     * render
     * @return {String} - HTML markup for the component
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isFullscreenEnabled = _this$props.isFullscreenEnabled,
          setWorkspaceFullscreen = _this$props.setWorkspaceFullscreen,
          theme = _this$props.theme,
          translations = _this$props.translations;
      Object.keys(translations).forEach(function (lng) {
        _this2.i18n.addResourceBundle(lng, 'translation', translations[lng], true, true);
      });
      return _react.default.createElement(_reactFullScreen.default, {
        enabled: isFullscreenEnabled,
        onChange: setWorkspaceFullscreen
      }, _react.default.createElement(_reactI18next.I18nextProvider, {
        i18n: this.i18n
      }, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: (0, _styles.createMuiTheme)(theme)
      }, _react.default.createElement(_AuthenticationSender.default, null), _react.default.createElement(_AccessTokenSender.default, null), _react.default.createElement(_WorkspaceArea.default, null))));
    }
  }]);
  return App;
}(_react.Component);

exports.App = App;
App.propTypes = {
  isFullscreenEnabled: _propTypes.default.bool,
  language: _propTypes.default.string.isRequired,
  setWorkspaceFullscreen: _propTypes.default.func.isRequired,
  theme: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  translations: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};
App.defaultProps = {
  isFullscreenEnabled: false
};