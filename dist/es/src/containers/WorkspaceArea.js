"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _styles = require("@material-ui/core/styles");

var _extend = require("../extend");

var _WorkspaceArea = require("../components/WorkspaceArea");

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    isWorkspaceAddVisible: state.workspace.isWorkspaceAddVisible,
    isWorkspaceControlPanelVisible: state.config.workspaceControlPanel.enabled
  };
};
/**
 *
 * @param theme
 * @returns {{background: {background: string}}}
 */


var styles = function styles(theme) {
  return {
    background: {
      background: theme.palette.background.default
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps), (0, _extend.withPlugins)('WorkspaceArea'));

var _default = enhance(_WorkspaceArea.WorkspaceArea);

exports.default = _default;