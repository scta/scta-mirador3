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

var _selectors = require("../state/selectors");

var _WorkspaceFullScreenButton = require("../components/WorkspaceFullScreenButton");

/**
 * mapStateToProps - to hook up connect
 * @memberof WorkspaceFullScreenButton
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    isFullscreenEnabled: (0, _selectors.getFullScreenEnabled)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var mapDispatchToProps = {
  setWorkspaceFullscreen: actions.setWorkspaceFullscreen
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */

var styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing.unit
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceFullScreenButton'));

var _default = enhance(_WorkspaceFullScreenButton.WorkspaceFullScreenButton);

exports.default = _default;