"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopMenu = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WindowThumbnailSettings = _interopRequireDefault(require("../containers/WindowThumbnailSettings"));

var _WindowViewSettings = _interopRequireDefault(require("../containers/WindowViewSettings"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/** Renders plugins */
function PluginHook(props) {
  var PluginComponents = props.PluginComponents,
      t = props.t; // eslint-disable-line react/prop-types

  return PluginComponents ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ListSubheader.default, {
    role: "presentation",
    tabIndex: "-1"
  }, t('windowPluginButtons')), PluginComponents.map(function (PluginComponent, index) {
    return _react.default.createElement(PluginComponent, (0, _extends2.default)({}, props, {
      key: index
    })) // eslint-disable-line react/no-array-index-key
    ;
  })) : null;
}
/**
 */


var WindowTopMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowTopMenu, _Component);

  function WindowTopMenu() {
    (0, _classCallCheck2.default)(this, WindowTopMenu);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowTopMenu).apply(this, arguments));
  }

  (0, _createClass2.default)(WindowTopMenu, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          containerId = _this$props.containerId,
          handleClose = _this$props.handleClose,
          anchorEl = _this$props.anchorEl,
          windowId = _this$props.windowId; // const {} = this.state;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Menu.default, {
        id: "window-menu_".concat(windowId),
        container: document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer'))),
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom'
        },
        transformOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        getContentAnchorEl: null,
        open: Boolean(anchorEl),
        onClose: handleClose,
        disableAutoFocusItem: true
      }, _react.default.createElement(_WindowViewSettings.default, {
        windowId: windowId,
        handleClose: handleClose
      }), _react.default.createElement(_WindowThumbnailSettings.default, {
        windowId: windowId,
        handleClose: handleClose
      }), _react.default.createElement(PluginHook, this.props)));
    }
  }]);
  return WindowTopMenu;
}(_react.Component);

exports.WindowTopMenu = WindowTopMenu;
WindowTopMenu.propTypes = {
  anchorEl: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  containerId: _propTypes.default.string.isRequired,
  handleClose: _propTypes.default.func.isRequired,
  windowId: _propTypes.default.string.isRequired
};
WindowTopMenu.defaultProps = {
  anchorEl: null
};