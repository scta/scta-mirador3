"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var _ViewerInfo = require("../components/ViewerInfo");

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - to hook up connect
 * @memberof Window
 * @private
 */
var mapStateToProps = function mapStateToProps(state, props) {
  var windowId = props.windowId;
  var canvases = (0, _selectors.getManifestCanvases)(state, {
    windowId: windowId
  });

  var _getWindow = (0, _selectors.getWindow)(state, {
    windowId: windowId
  }),
      canvasIndex = _getWindow.canvasIndex;

  return {
    canvasCount: canvases.length,
    canvasIndex: canvasIndex,
    canvasLabel: (0, _selectors.getCanvasLabel)(state, {
      canvasIndex: canvasIndex,
      windowId: windowId
    })
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _extend.withPlugins)('ViewerInfo'));

var _default = enhance(_ViewerInfo.ViewerInfo);

exports.default = _default;