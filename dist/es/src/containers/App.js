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

var _App = require("../components/App");

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    isFullscreenEnabled: state.workspace.isFullscreenEnabled,
    language: state.config.language,
    theme: state.config.theme,
    translations: state.config.translations
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */


var mapDispatchToProps = {
  setWorkspaceFullscreen: actions.setWorkspaceFullscreen
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('App'));

var _default = enhance(_App.App);

exports.default = _default;