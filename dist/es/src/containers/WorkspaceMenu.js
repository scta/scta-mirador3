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

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _WorkspaceMenu = require("../components/WorkspaceMenu");

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WorkspaceMenu
 * @private
 */
var mapDispatchToProps = {
  toggleZoomControls: actions.toggleZoomControls
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state),
    showZoomControls: (0, _selectors.getShowZoomControlsConfig)(state)
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceMenu'));

var _default = enhance(_WorkspaceMenu.WorkspaceMenu);

exports.default = _default;