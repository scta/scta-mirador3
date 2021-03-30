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

var _WorkspaceMosaic = require("../components/WorkspaceMosaic");

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    workspace: state.workspace
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var mapDispatchToProps = {
  updateWorkspaceMosaicLayout: actions.updateWorkspaceMosaicLayout
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceMosaic') // further HOC go here
);

var _default = enhance(_WorkspaceMosaic.WorkspaceMosaic);

exports.default = _default;