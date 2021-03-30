"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccessTokenSender = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIframeComm = _interopRequireDefault(require("react-iframe-comm"));

/**
 * Opens a new window for click
 */
var AccessTokenSender =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AccessTokenSender, _Component);

  /** */
  function AccessTokenSender(props) {
    var _this;

    (0, _classCallCheck2.default)(this, AccessTokenSender);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AccessTokenSender).call(this, props));
    _this.onReceiveAccessTokenMessage = _this.onReceiveAccessTokenMessage.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** @private */


  (0, _createClass2.default)(AccessTokenSender, [{
    key: "onReceiveAccessTokenMessage",
    value: function onReceiveAccessTokenMessage(e) {
      var _this$props = this.props,
          handleAccessTokenMessage = _this$props.handleAccessTokenMessage,
          url = _this$props.url;
      if (e.data && e.data.messageId && e.data.messageId === url) handleAccessTokenMessage(e.data);
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

      return _react.default.createElement(_reactIframeComm.default, {
        attributes: {
          src: "".concat(url, "?origin=").concat(window.origin, "&messageId=").concat(url)
        },
        handleReceiveMessage: this.onReceiveAccessTokenMessage
      });
    }
  }]);
  return AccessTokenSender;
}(_react.Component);

exports.AccessTokenSender = AccessTokenSender;
AccessTokenSender.propTypes = {
  handleAccessTokenMessage: _propTypes.default.func.isRequired,
  url: _propTypes.default.string
};
AccessTokenSender.defaultProps = {
  url: undefined
};