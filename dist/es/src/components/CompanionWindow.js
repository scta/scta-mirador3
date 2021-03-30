"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionWindow = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));

var _OpenInNewSharp = _interopRequireDefault(require("@material-ui/icons/OpenInNewSharp"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _ThumbnailNavigationBottomIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationBottomIcon"));

var _ThumbnailNavigationRightIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationRightIcon"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * CompanionWindow
 */
var CompanionWindow =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CompanionWindow, _Component);

  function CompanionWindow() {
    (0, _classCallCheck2.default)(this, CompanionWindow);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CompanionWindow).apply(this, arguments));
  }

  (0, _createClass2.default)(CompanionWindow, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          paperClassName = _this$props.paperClassName,
          id = _this$props.id,
          onCloseClick = _this$props.onCloseClick,
          updateCompanionWindow = _this$props.updateCompanionWindow,
          isDisplayed = _this$props.isDisplayed,
          position = _this$props.position,
          t = _this$props.t,
          windowId = _this$props.windowId,
          title = _this$props.title,
          children = _this$props.children,
          titleControls = _this$props.titleControls;
      return _react.default.createElement(_Paper.default, {
        className: [classes.root, position === 'bottom' ? classes.horizontal : classes.vertical, classes["companionWindow-".concat(position)], (0, _cssNs.default)("companion-window-".concat(position)), paperClassName].join(' '),
        style: {
          display: isDisplayed ? null : 'none',
          order: position === 'left' ? -1 : null
        },
        square: true,
        component: "aside",
        "aria-label": title
      }, _react.default.createElement(_Toolbar.default, {
        className: [classes.toolbar, position === 'left' ? classes.leftPadding : undefined, (0, _cssNs.default)('companion-window-header')].join(' '),
        disableGutters: true
      }, _react.default.createElement(_Typography.default, {
        variant: "h3",
        className: classes.windowSideBarTitle
      }, title), titleControls && _react.default.createElement("div", {
        className: (0, _cssNs.default)('companion-window-title-controls')
      }, titleControls), position === 'left' ? updateCompanionWindow && _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('openInCompanionWindow'),
        onClick: function onClick() {
          updateCompanionWindow(windowId, id, {
            position: 'right'
          });
        }
      }, _react.default.createElement(_OpenInNewSharp.default, null)) : _react.default.createElement(_react.default.Fragment, null, updateCompanionWindow && _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": position === 'bottom' ? t('moveCompanionWindowToRight') : t('moveCompanionWindowToBottom'),
        className: classes.positionButton,
        onClick: function onClick() {
          updateCompanionWindow(windowId, id, {
            position: position === 'bottom' ? 'right' : 'bottom'
          });
        }
      }, position === 'bottom' ? _react.default.createElement(_ThumbnailNavigationRightIcon.default, null) : _react.default.createElement(_ThumbnailNavigationBottomIcon.default, null)), _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('closeCompanionWindow'),
        className: classes.closeButton,
        onClick: onCloseClick
      }, _react.default.createElement(_CloseSharp.default, null)))), _react.default.createElement(_Paper.default, {
        className: classes.content,
        elevation: 0
      }, children));
    }
  }]);
  return CompanionWindow;
}(_react.Component);

exports.CompanionWindow = CompanionWindow;
CompanionWindow.propTypes = {
  children: _propTypes.default.node,
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types,
  id: _propTypes.default.string.isRequired,
  isDisplayed: _propTypes.default.bool,
  onCloseClick: _propTypes.default.func,
  paperClassName: _propTypes.default.string,
  position: _propTypes.default.string,
  t: _propTypes.default.func,
  title: _propTypes.default.string,
  titleControls: _propTypes.default.node,
  updateCompanionWindow: _propTypes.default.func,
  windowId: _propTypes.default.string.isRequired
};
CompanionWindow.defaultProps = {
  children: undefined,
  isDisplayed: false,
  onCloseClick: function onCloseClick() {},
  paperClassName: '',
  position: null,
  t: function t(key) {
    return key;
  },
  title: null,
  titleControls: null,
  updateCompanionWindow: undefined
};