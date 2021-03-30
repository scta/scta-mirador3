"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _WorkspaceAddButton = require("../components/WorkspaceAddButton");

/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceControlPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    isWorkspaceAddVisible: state.workspace.isWorkspaceAddVisible
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var mapDispatchToProps = {
  setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var styles = function styles(theme) {
  return {
    fab: {
      margin: theme.spacing.unit
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceAddButton'));

var _default = enhance(_WorkspaceAddButton.WorkspaceAddButton);

exports.default = _default;