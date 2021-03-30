"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workspaceReducer = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

/**
 * workspaceReducer
 */
var workspaceReducer = function workspaceReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    // we'll need to abstract this more, methinks.
    exposeModeOn: false,
    height: 5000,
    id: (0, _v.default)(),
    viewportPosition: {
      x: 0,
      y: 0
    },
    width: 5000
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.default.FOCUS_WINDOW:
      return (0, _objectSpread2.default)({}, state, {
        focusedWindowId: action.windowId,
        viewportPosition: (0, _objectSpread2.default)({}, state.viewportPosition, action.position)
      });

    case _actionTypes.default.SET_WORKSPACE_FULLSCREEN:
      return (0, _objectSpread2.default)({}, state, {
        isFullscreenEnabled: action.isFullscreenEnabled
      });

    case _actionTypes.default.TOGGLE_ZOOM_CONTROLS:
      return (0, _objectSpread2.default)({}, state, {
        showZoomControls: action.showZoomControls
      });

    case _actionTypes.default.UPDATE_WORKSPACE_MOSAIC_LAYOUT:
      return (0, _objectSpread2.default)({}, state, {
        layout: action.layout
      });

    case _actionTypes.default.SET_WORKSPACE_ADD_VISIBILITY:
      return (0, _objectSpread2.default)({}, state, {
        isWorkspaceAddVisible: action.isWorkspaceAddVisible
      });

    case _actionTypes.default.SET_WORKSPACE_VIEWPORT_POSITION:
      return (0, _objectSpread2.default)({}, state, {
        viewportPosition: (0, _objectSpread2.default)({}, state.viewportPosition, action.payload.position)
      });

    case _actionTypes.default.TOGGLE_WORKSPACE_EXPOSE_MODE:
      return (0, _objectSpread2.default)({}, state, {
        exposeModeOn: !state.exposeModeOn
      });

    case _actionTypes.default.IMPORT_MIRADOR_STATE:
      return action.state.workspace;

    default:
      return state;
  }
};

exports.workspaceReducer = workspaceReducer;