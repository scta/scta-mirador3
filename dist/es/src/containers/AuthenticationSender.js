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

var _AuthenticationSender = require("../components/AuthenticationSender");

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(_ref) {
  var auth = _ref.auth;
  return {
    url: auth && (Object.values(auth).find(function (e) {
      return e.isFetching && e.profile !== 'http://iiif.io/api/auth/1/external';
    }) || {}).id
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */


var mapDispatchToProps = {
  handleInteraction: actions.resolveAuthenticationRequest
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('AuthenticationSender'));

var _default = enhance(_AuthenticationSender.AuthenticationSender);

exports.default = _default;