"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NestedMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _ExpandLessSharp = _interopRequireDefault(require("@material-ui/icons/ExpandLessSharp"));

var _ExpandMoreSharp = _interopRequireDefault(require("@material-ui/icons/ExpandMoreSharp"));

/**
 * NestedMenu ~ A presentation component to render a menu item and have
 * it control the visibility of the MUI List passed in as the children
*/
var NestedMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(NestedMenu, _Component);

  /**
   * constructor -
   */
  function NestedMenu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, NestedMenu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(NestedMenu).call(this, props));
    _this.state = {
      nestedMenuIsOpen: false
    };
    _this.handleMenuClick = _this.handleMenuClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * handleMenuClick toggles the nestedMenuIsOpen state
   */


  (0, _createClass2.default)(NestedMenu, [{
    key: "handleMenuClick",
    value: function handleMenuClick() {
      var nestedMenuIsOpen = this.state.nestedMenuIsOpen;
      this.setState({
        nestedMenuIsOpen: !nestedMenuIsOpen
      });
    }
    /**
     * Returns the rendered component.  Spreads unused props to MenuItem
    */

  }, {
    key: "render",
    value: function render() {
      var nestedMenuIsOpen = this.state.nestedMenuIsOpen;
      var _this$props = this.props,
          children = _this$props.children,
          icon = _this$props.icon,
          label = _this$props.label,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "icon", "label"]);
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_MenuItem.default, (0, _extends2.default)({
        onClick: this.handleMenuClick,
        divider: nestedMenuIsOpen
      }, otherProps), icon && _react.default.createElement(_ListItemIcon.default, null, icon), _react.default.createElement(_ListItemText.default, {
        primaryTypographyProps: {
          variant: 'body1'
        }
      }, label), nestedMenuIsOpen ? _react.default.createElement(_ExpandLessSharp.default, null) : _react.default.createElement(_ExpandMoreSharp.default, null)), nestedMenuIsOpen && children);
    }
  }]);
  return NestedMenu;
}(_react.Component);

exports.NestedMenu = NestedMenu;
NestedMenu.propTypes = {
  children: _propTypes.default.element.isRequired,
  icon: _propTypes.default.element,
  label: _propTypes.default.string.isRequired
};
NestedMenu.defaultProps = {
  icon: null
};