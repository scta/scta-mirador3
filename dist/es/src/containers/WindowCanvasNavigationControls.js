"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _extend = require("../extend");

var _selectors = require("../state/selectors");

var _WindowCanvasNavigationControls = require("../components/WindowCanvasNavigationControls");

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    canvasLabel: (0, _selectors.getCanvasLabel)(state, {
      canvasIndex: 'selected',
      windowId: windowId
    }),
    visible: state.workspace.focusedWindowId === windowId,
    window: (0, _selectors.getWindow)(state, {
      windowId: windowId
    })
  };
};

var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _extend.withPlugins)('WindowCanvasNavigationControls'));

var _default = enhance(_WindowCanvasNavigationControls.WindowCanvasNavigationControls);

exports.default = _default;