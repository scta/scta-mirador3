"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticationSender = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNewWindow = _interopRequireDefault(require("react-new-window/umd/react-new-window"));

/**
 * Opens a new window for click
 */
var AuthenticationSender =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AuthenticationSender, _Component);

  /** */
  function AuthenticationSender(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AuthenticationSender);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AuthenticationSender).call(this, props));
    _this.onUnload = _this.onUnload.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** @private */


  (0, _createClass2.default)(AuthenticationSender, [{
    key: "onUnload",
    value: function onUnload() {
      var _this$props = this.props,
          handleInteraction = _this$props.handleInteraction,
          url = _this$props.url;
      handleInteraction(url);
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var url = this.props.url;
      if (!url) return _react.default.createElement(_react.default.Fragment, null);
      /**
      login, clickthrough/kiosk open @id, wait for close
      external, no-op
      */

      return _react.default.createElement(_reactNewWindow.default, {
        url: "".concat(url, "?origin=").concat(window.origin),
        onUnload: this.onUnload
      });
    }
  }]);
  return AuthenticationSender;
}(_react.Component);

exports.AuthenticationSender = AuthenticationSender;
AuthenticationSender.propTypes = {
  handleInteraction: _propTypes.default.func.isRequired,
  url: _propTypes.default.string
};
AuthenticationSender.defaultProps = {
  url: undefined
};