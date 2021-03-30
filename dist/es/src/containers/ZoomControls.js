"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _ZoomControls = require("../components/ZoomControls");

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    showZoomControls: (0, _selectors.getShowZoomControlsConfig)(state),
    viewer: (0, _selectors.getViewer)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var mapDispatchToProps = {
  updateViewport: actions.updateViewport
};
/**
 *
 * @param theme
 * @returns {{zoom_controls: {position: string, right: number},
 * ListItem: {paddingBottom: number, paddingTop: number}}}
 */

var styles = function styles(theme) {
  return {
    ListItem: {
      paddingBottom: 0,
      paddingTop: 0
    },
    zoom_controls: {
      display: 'flex',
      flexDirection: 'row'
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('ZoomControls'));

var _default = enhance(_ZoomControls.ZoomControls);

exports.default = _default;