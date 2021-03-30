"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _WindowSideBarButtons = _interopRequireDefault(require("../containers/WindowSideBarButtons"));

/**
 * WindowSideBar
 */
var WindowSideBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowSideBar, _Component);

  function WindowSideBar() {
    (0, _classCallCheck2.default)(this, WindowSideBar);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowSideBar).apply(this, arguments));
  }

  (0, _createClass2.default)(WindowSideBar, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          windowId = _this$props.windowId,
          sideBarOpen = _this$props.sideBarOpen;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Drawer.default, {
        variant: "persistent",
        className: (0, _classnames.default)(classes.drawer),
        classes: {
          paper: (0, _classnames.default)(classes.paper)
        },
        anchor: "left",
        PaperProps: {
          'aria-label': t('sidebarPanelsNavigation'),
          component: 'nav',
          style: {
            position: 'relative'
          }
        },
        SlideProps: {
          mountOnEnter: true,
          unmountOnExit: true
        },
        open: sideBarOpen
      }, _react.default.createElement(_WindowSideBarButtons.default, {
        windowId: windowId
      })));
    }
  }]);
  return WindowSideBar;
}(_react.Component);

exports.WindowSideBar = WindowSideBar;
WindowSideBar.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types,
  sideBarOpen: _propTypes.default.bool,
  t: _propTypes.default.func.isRequired,
  windowId: _propTypes.default.string.isRequired
};
WindowSideBar.defaultProps = {
  sideBarOpen: false
};