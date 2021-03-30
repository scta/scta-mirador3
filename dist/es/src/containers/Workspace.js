"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var _Workspace = require("../components/Workspace");

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    isWorkspaceControlPanelVisible: state.config.workspaceControlPanel.enabled,
    windows: state.windows,
    workspaceId: state.workspace.id,
    workspaceType: (0, _selectors.getWorkspaceType)(state)
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps), (0, _extend.withPlugins)('Workspace') // further HOC go here
);

var _default = enhance(_Workspace.Workspace);

exports.default = _default;