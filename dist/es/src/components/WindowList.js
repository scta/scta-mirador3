"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowList = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 */
var WindowList =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowList, _Component);

  function WindowList() {
    (0, _classCallCheck2.default)(this, WindowList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowList).apply(this, arguments));
  }

  (0, _createClass2.default)(WindowList, [{
    key: "titleContent",

    /**
     * Get the title for a window from its manifest title
     * @private
     */
    value: function titleContent(window) {
      var _this$props = this.props,
          titles = _this$props.titles,
          t = _this$props.t;
      return titles[window.id] || t('untitled');
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          containerId = _this$props2.containerId,
          handleClose = _this$props2.handleClose,
          anchorEl = _this$props2.anchorEl,
          windows = _this$props2.windows,
          focusWindow = _this$props2.focusWindow,
          t = _this$props2.t;
      return _react.default.createElement(_Menu.default, {
        id: "window-list-menu",
        container: document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer'))),
        anchorEl: anchorEl,
        open: Boolean(anchorEl),
        onClose: handleClose
      }, _react.default.createElement(_ListSubheader.default, {
        role: "presentation",
        selected: false,
        disabled: true,
        tabIndex: "-1"
      }, t('openWindows')), Object.values(windows).map(function (window, i) {
        return _react.default.createElement(_MenuItem.default, {
          key: window.id,
          selected: i === 0,
          onClick: function onClick(e) {
            focusWindow(window.id, true);
            handleClose(e);
          }
        }, _react.default.createElement(_ListItemText.default, {
          primaryTypographyProps: {
            variant: 'body1'
          }
        }, _this.titleContent(window)));
      }));
    }
  }]);
  return WindowList;
}(_react.Component);

exports.WindowList = WindowList;
WindowList.propTypes = {
  anchorEl: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  containerId: _propTypes.default.string.isRequired,
  focusWindow: _propTypes.default.func.isRequired,
  handleClose: _propTypes.default.func.isRequired,
  t: _propTypes.default.func,
  titles: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  windows: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};
WindowList.defaultProps = {
  anchorEl: null,
  t: function t(key) {
    return key;
  },
  titles: {}
};