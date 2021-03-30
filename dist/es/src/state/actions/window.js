"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusWindow = focusWindow;
exports.addWindow = addWindow;
exports.maximizeWindow = maximizeWindow;
exports.minimizeWindow = minimizeWindow;
exports.updateWindow = updateWindow;
exports.setCompanionAreaOpen = setCompanionAreaOpen;
exports.removeWindow = removeWindow;
exports.toggleWindowSideBar = toggleWindowSideBar;
exports.setWindowSideBarPanel = setWindowSideBarPanel;
exports.setWindowThumbnailPosition = setWindowThumbnailPosition;
exports.setWindowViewType = setWindowViewType;
exports.updateWindowPosition = updateWindowPosition;
exports.setWindowSize = setWindowSize;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _actionTypes = _interopRequireDefault(require("./action-types"));

/**
 * focusWindow - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */
function focusWindow(windowId) {
  var pan = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return function (dispatch, getState) {
    var _getState = getState(),
        windows = _getState.windows,
        workspace = _getState.workspace;

    var position;

    if (pan) {
      var _windows$windowId = windows[windowId],
          x = _windows$windowId.x,
          y = _windows$windowId.y,
          width = _windows$windowId.width,
          height = _windows$windowId.height;
      var _workspace$viewportPo = workspace.viewportPosition,
          viewWidth = _workspace$viewportPo.width,
          viewHeight = _workspace$viewportPo.height;
      position = {
        x: x + width / 2 - viewWidth / 2,
        y: y + height / 2 - viewHeight / 2
      };
    } else {
      position = {};
    }

    dispatch({
      position: position,
      type: _actionTypes.default.FOCUS_WINDOW,
      windowId: windowId
    });
  };
}
/**
 * addWindow - action creator
 *
 * @param  {Object} options
 * @memberof ActionCreators
 */


function addWindow(options) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        config = _getState2.config,
        windows = _getState2.windows;

    var numWindows = Object.keys(windows).length;
    var cwDefault = "cw-".concat((0, _v.default)());
    var cwThumbs = "cw-".concat((0, _v.default)());
    var defaultOptions = {
      canvasIndex: 0,
      collectionIndex: 0,
      companionAreaOpen: true,
      companionWindowIds: [cwDefault, cwThumbs],
      displayAllAnnotations: config.displayAllAnnotations || false,
      height: 400,
      id: "window-".concat((0, _v.default)()),
      manifestId: null,
      maximized: false,
      rangeId: null,
      rotation: null,
      selectedAnnotations: {},
      sideBarPanel: 'info',
      thumbnailNavigationId: cwThumbs,
      view: 'single',
      width: 400,
      x: 200 + (Math.floor(numWindows / 10) * 50 + numWindows * 30 % 300),
      y: 200 + numWindows * 50 % 300
    };
    dispatch({
      companionWindows: [{
        content: 'info',
        default: true,
        id: cwDefault,
        position: 'left'
      }, {
        content: 'thumbnailNavigation',
        default: true,
        id: cwThumbs,
        position: options.thumbnailNavigationPosition || config.thumbnailNavigation.defaultPosition
      }],
      type: _actionTypes.default.ADD_WINDOW,
      window: (0, _objectSpread2.default)({}, defaultOptions, options)
    });
  };
}
/**
 * maximizeWindow
 * @param  {String} windowId
 * @memberof ActionCreators
 */


function maximizeWindow(windowId, layout) {
  return {
    type: _actionTypes.default.MAXIMIZE_WINDOW,
    windowId: windowId
  };
}
/**
 * minimizeWindow
 * @param  {String} windowId
 * @memberof ActionCreators
 */


function minimizeWindow(windowId) {
  return {
    type: _actionTypes.default.MINIMIZE_WINDOW,
    windowId: windowId
  };
}
/** */


function updateWindow(id, payload) {
  return {
    id: id,
    payload: payload,
    type: _actionTypes.default.UPDATE_WINDOW
  };
}
/** */


function setCompanionAreaOpen(id, companionAreaOpen) {
  return {
    id: id,
    payload: {
      companionAreaOpen: companionAreaOpen
    },
    type: _actionTypes.default.UPDATE_WINDOW
  };
}
/**
 * removeWindow - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */


function removeWindow(windowId) {
  return function (dispatch, getState) {
    var _getState3 = getState(),
        windows = _getState3.windows;

    var companionWindowIds = windows[windowId].companionWindowIds;
    dispatch({
      companionWindowIds: companionWindowIds,
      type: _actionTypes.default.REMOVE_WINDOW,
      windowId: windowId
    });
  };
}
/**
 * toggleWindowSideBar - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */


function toggleWindowSideBar(windowId) {
  return {
    type: _actionTypes.default.TOGGLE_WINDOW_SIDE_BAR,
    windowId: windowId
  };
}
/**
 * setWindowSideBarPanel - action creator
 *
 * @param  {String} windowId
 * @param  {String} panelType
 * @memberof ActionCreators
 */


function setWindowSideBarPanel(windowId, panelType) {
  return {
    panelType: panelType,
    type: _actionTypes.default.SET_WINDOW_SIDE_BAR_PANEL,
    windowId: windowId
  };
}
/**
 * setWindowThumbnailPosition - action creator
 *
 * @param  {String} windowId
 * @param  {String} position
 * @memberof ActionCreators
 */


function setWindowThumbnailPosition(windowId, position) {
  return function (dispatch, getState) {
    var _getState4 = getState(),
        windows = _getState4.windows;

    var thumbnailNavigationId = windows[windowId].thumbnailNavigationId;
    dispatch({
      id: thumbnailNavigationId,
      payload: {
        position: position
      },
      type: _actionTypes.default.UPDATE_COMPANION_WINDOW
    });
  };
}
/**
 * setWindowViewType - action creator
 *
 * @param  {String} windowId
 * @param  {String} viewType
 * @memberof ActionCreators
 */


function setWindowViewType(windowId, viewType) {
  return {
    type: _actionTypes.default.SET_WINDOW_VIEW_TYPE,
    viewType: viewType,
    windowId: windowId
  };
}
/**
 * updateWindowPosition - action creator
 *
 * @param  {String} windowId
 * @param  {Array} position
 * @memberof ActionCreators
 */


function updateWindowPosition(windowId, position) {
  return {
    payload: {
      position: position,
      windowId: windowId
    },
    type: _actionTypes.default.UPDATE_WINDOW_POSITION
  };
}
/**
 * setWindowSize - action creator
 *
 * @param  {String} windowId
 * @param  {Object} size
 * @memberof ActionCreators
 */


function setWindowSize(windowId, size) {
  return {
    payload: {
      size: size,
      windowId: windowId
    },
    type: _actionTypes.default.SET_WINDOW_SIZE
  };
}