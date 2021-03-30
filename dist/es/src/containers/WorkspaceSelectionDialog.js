"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var _WorkspaceSelectionDialog = require("../components/WorkspaceSelectionDialog");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  updateConfig: actions.updateConfig
};
/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    workspaceType: (0, _selectors.getWorkspaceType)(state)
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceSelectionDialog'));

var _default = enhance(_WorkspaceSelectionDialog.WorkspaceSelectionDialog);

exports.default = _default;