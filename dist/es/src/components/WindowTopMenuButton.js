"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowTopMenuButton = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _MoreVertSharp = _interopRequireDefault(require("@material-ui/icons/MoreVertSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WindowTopMenu = _interopRequireDefault(require("../containers/WindowTopMenu"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

/**
 */
var WindowTopMenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowTopMenuButton, _Component);

  /**
   * constructor -
   */
  function WindowTopMenuButton(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WindowTopMenuButton);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowTopMenuButton).call(this, props));
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleMenuClose = _this.handleMenuClose.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(WindowTopMenuButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          windowId = _this$props.windowId;
      var anchorEl = this.state.anchorEl;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_MiradorMenuButton.default, {
        "aria-haspopup": "true",
        "aria-label": t('windowMenu'),
        "aria-owns": anchorEl ? "window-menu_".concat(windowId) : undefined,
        className: anchorEl ? classes.ctrlBtnSelected : null,
        onClick: this.handleMenuClick
      }, _react.default.createElement(_MoreVertSharp.default, null)), _react.default.createElement(_WindowTopMenu.default, {
        windowId: windowId,
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);
  return WindowTopMenuButton;
}(_react.Component);

exports.WindowTopMenuButton = WindowTopMenuButton;
WindowTopMenuButton.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func,
  windowId: _propTypes.default.string.isRequired
};
WindowTopMenuButton.defaultProps = {
  t: function t(key) {
    return key;
  }
};