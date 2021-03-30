"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _extend = require("../extend");

var _OpenSeadragonViewer = require("../components/OpenSeadragonViewer");

var actions = _interopRequireWildcard(require("../state/actions"));

var _CanvasWorld = _interopRequireDefault(require("../lib/CanvasWorld"));

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvasWorld: new _CanvasWorld.default((0, _selectors.getSelectedCanvases)(state, {
      windowId: windowId
    })),
    highlightedAnnotations: (0, _selectors.getHighlightedAnnotationsOnCanvases)(state, {
      windowId: windowId
    }),
    label: (0, _selectors.getCanvasLabel)(state, {
      canvasIndex: 'selected',
      windowId: windowId
    }),
    selectedAnnotations: (0, _selectors.getSelectedAnnotationsOnCanvases)(state, {
      windowId: windowId
    }),
    viewer: (0, _selectors.getViewer)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var mapDispatchToProps = {
  updateViewport: actions.updateViewport
};
/**
 *
 * @param theme
 * @returns {{windowSideBarHeading: *}}
 */

var styles = function styles(theme) {
  return {
    controls: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.background.paper, 0.5),
      bottom: 0,
      position: 'absolute',
      width: '100%',
      zIndex: 50
    }
  };
};

var enhance = (0, _redux.compose)((0, _core.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('OpenSeadragonViewer'));

var _default = enhance(_OpenSeadragonViewer.OpenSeadragonViewer);

exports.default = _default;