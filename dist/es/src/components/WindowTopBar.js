"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopBar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _MenuSharp = _interopRequireDefault(require("@material-ui/icons/MenuSharp"));

var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _classnames = _interopRequireDefault(require("classnames"));

var _WindowTopMenuButton = _interopRequireDefault(require("../containers/WindowTopMenuButton"));

var _WindowTopBarButtons = _interopRequireDefault(require("../containers/WindowTopBarButtons"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

var _WindowMaxIcon = _interopRequireDefault(require("./icons/WindowMaxIcon"));

var _WindowMinIcon = _interopRequireDefault(require("./icons/WindowMinIcon"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * WindowTopBar
 */
var WindowTopBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowTopBar, _Component);

  function WindowTopBar() {
    (0, _classCallCheck2.default)(this, WindowTopBar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowTopBar).apply(this, arguments));
  }

  (0, _createClass2.default)(WindowTopBar, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          removeWindow = _this$props.removeWindow,
          windowId = _this$props.windowId,
          classes = _this$props.classes,
          toggleWindowSideBar = _this$props.toggleWindowSideBar,
          t = _this$props.t,
          manifestTitle = _this$props.manifestTitle,
          windowDraggable = _this$props.windowDraggable,
          maximizeWindow = _this$props.maximizeWindow,
          maximized = _this$props.maximized,
          minimizeWindow = _this$props.minimizeWindow,
          focused = _this$props.focused,
          allowClose = _this$props.allowClose,
          allowMaximize = _this$props.allowMaximize;
      return _react.default.createElement(_AppBar.default, {
        position: "relative"
      }, _react.default.createElement("nav", {
        "aria-label": t('windowNavigation')
      }, _react.default.createElement(_Toolbar.default, {
        disableGutters: true,
        className: (0, _classnames.default)(classes.windowTopBarStyle, windowDraggable ? classes.windowTopBarStyleDraggable : null, focused ? classes.focused : null, (0, _cssNs.default)('window-top-bar')),
        variant: "dense"
      }, _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('toggleWindowSideBar'),
        onClick: toggleWindowSideBar
      }, _react.default.createElement(_MenuSharp.default, null)), _react.default.createElement(_Typography.default, {
        variant: "h2",
        noWrap: true,
        color: "inherit",
        className: classes.title
      }, manifestTitle), _react.default.createElement(_WindowTopBarButtons.default, {
        windowId: windowId
      }), _react.default.createElement(_WindowTopMenuButton.default, {
        className: (0, _cssNs.default)('window-menu-btn'),
        windowId: windowId
      }), allowMaximize && _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": maximized ? t('minimizeWindow') : t('maximizeWindow'),
        className: (0, _cssNs.default)('window-maximize'),
        onClick: maximized ? minimizeWindow : maximizeWindow
      }, maximized ? _react.default.createElement(_WindowMinIcon.default, null) : _react.default.createElement(_WindowMaxIcon.default, null)), allowClose && _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('closeWindow'),
        className: (0, _cssNs.default)('window-close'),
        onClick: removeWindow
      }, _react.default.createElement(_CloseSharp.default, null)))));
    }
  }]);
  return WindowTopBar;
}(_react.Component);

exports.WindowTopBar = WindowTopBar;
WindowTopBar.propTypes = {
  allowClose: _propTypes.default.bool,
  allowMaximize: _propTypes.default.bool,
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  focused: _propTypes.default.bool,
  manifestTitle: _propTypes.default.string,
  maximized: _propTypes.default.bool,
  maximizeWindow: _propTypes.default.func,
  minimizeWindow: _propTypes.default.func,
  removeWindow: _propTypes.default.func.isRequired,
  t: _propTypes.default.func,
  toggleWindowSideBar: _propTypes.default.func.isRequired,
  windowDraggable: _propTypes.default.bool,
  windowId: _propTypes.default.string.isRequired
};
WindowTopBar.defaultProps = {
  allowClose: true,
  allowMaximize: true,
  focused: false,
  manifestTitle: '',
  maximized: false,
  maximizeWindow: function maximizeWindow() {},
  minimizeWindow: function minimizeWindow() {},
  t: function t(key) {
    return key;
  },
  windowDraggable: true
};