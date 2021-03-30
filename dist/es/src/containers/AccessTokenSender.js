"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _AccessTokenSender = require("../components/AccessTokenSender");

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(_ref) {
  var accessTokens = _ref.accessTokens;
  return {
    url: accessTokens && (Object.values(accessTokens).find(function (e) {
      return e.isFetching;
    }) || {}).id
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */


var mapDispatchToProps = {
  handleAccessTokenMessage: actions.resolveAccessTokenRequest
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('AccessTokenSender'));

var _default = enhance(_AccessTokenSender.AccessTokenSender);

exports.default = _default;