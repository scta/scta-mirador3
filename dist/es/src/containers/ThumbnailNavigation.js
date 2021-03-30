"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _styles = require("@material-ui/core/styles");

var _extend = require("../extend");

var _CanvasGroupings = _interopRequireDefault(require("../lib/CanvasGroupings"));

var actions = _interopRequireWildcard(require("../state/actions"));

var _ThumbnailNavigation = require("../components/ThumbnailNavigation");

var _windows = require("../state/selectors/windows");

var _manifests = require("../state/selectors/manifests");

/**
 * mapStateToProps - used to hook up state to props
 * @memberof ThumbnailNavigation
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvasGroupings: new _CanvasGroupings.default((0, _manifests.getManifestCanvases)(state, {
      windowId: windowId
    }), state.windows[windowId].view),
    config: state.config,
    position: state.companionWindows[state.windows[windowId].thumbnailNavigationId].position,
    window: (0, _windows.getWindow)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ThumbnailNavigation
 * @private
 */


var mapDispatchToProps = {
  setCanvas: actions.setCanvas
};
/**
 * Styles for withStyles HOC
 */

var styles = function styles(theme) {
  return {
    thumbNavigation: {
      '&:focus': {
        boxShadow: 0,
        outline: 0
      }
    }
  };
};

var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('ThumbnailNavigation'));

var _default = enhance(_ThumbnailNavigation.ThumbnailNavigation);

exports.default = _default;