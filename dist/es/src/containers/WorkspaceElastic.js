"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _WorkspaceElastic = _interopRequireDefault(require("../components/WorkspaceElastic"));

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    windows: state.windows,
    workspace: state.workspace
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
  return {
    setWindowSize: function setWindowSize(windowId, size) {
      dispatch(actions.setWindowSize(windowId, size));
    },
    setWorkspaceViewportDimensions: function setWorkspaceViewportDimensions(position) {
      dispatch(actions.setWorkspaceViewportDimensions(position));
    },
    setWorkspaceViewportPosition: function setWorkspaceViewportPosition(position) {
      dispatch(actions.setWorkspaceViewportPosition(position));
    },
    toggleWorkspaceExposeMode: function toggleWorkspaceExposeMode(size) {
      return dispatch(actions.toggleWorkspaceExposeMode());
    },
    updateWindowPosition: function updateWindowPosition(windowId, position) {
      dispatch(actions.updateWindowPosition(windowId, position));
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceElastic') // further HOC go here
);

var _default = enhance(_WorkspaceElastic.default);

exports.default = _default;