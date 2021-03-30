"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindowTitles = getWindowTitles;
exports.getWindow = getWindow;
exports.getWindowDraggability = exports.getCompanionAreaVisibility = exports.getViewer = exports.getCompanionWindowForPosition = exports.getCompanionWindowsOfWindow = exports.getCompanionWindow = exports.getCompanionWindowIds = exports.getWindowViewType = exports.getThumbnailNavigationPosition = void 0;

var _reselect = require("reselect");

var _manifests = require("./manifests");

var _config = require("./config");

/**
 * Return the manifest titles for all open windows
 * @param {object} state
 * @return {object}
 */
function getWindowTitles(state) {
  var result = {};
  Object.keys(state.windows).forEach(function (windowId) {
    result[windowId] = (0, _manifests.getManifestTitle)(state, {
      windowId: windowId
    });
  });
  return result;
}
/** */


function getWindow(state, _ref) {
  var windowId = _ref.windowId;
  return state.windows && state.windows[windowId];
}
/** Return position of thumbnail navigation in a certain window.
* @param {object} state
* @param {String} windowId
* @param {String}
*/


var getThumbnailNavigationPosition = (0, _reselect.createSelector)([getWindow, function (state) {
  return state.companionWindows;
}], function (window, companionWindows) {
  return window && companionWindows[window.thumbnailNavigationId] && companionWindows[window.thumbnailNavigationId].position;
});
/** Return type of view in a certain window.
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @param {String}
*/

exports.getThumbnailNavigationPosition = getThumbnailNavigationPosition;
var getWindowViewType = (0, _reselect.createSelector)([getWindow], function (window) {
  return window && window.view;
});
/**
* Return compantion window ids from a window
* @param {String} windowId
* @return {Array}
*/

exports.getWindowViewType = getWindowViewType;
var getCompanionWindowIds = (0, _reselect.createSelector)([getWindow], function (window) {
  return window && window.companionWindowIds || [];
});
exports.getCompanionWindowIds = getCompanionWindowIds;
var getCompanionWindow = (0, _reselect.createSelector)([function (state) {
  return state.companionWindows;
}, function (state, _ref2) {
  var companionWindowId = _ref2.companionWindowId;
  return companionWindowId;
}], function (companionWindows, companionWindowId) {
  return companionWindows[companionWindowId];
});
/**
 * Return companion windows of a window
 * @param {String} windowId
 * @return {Array}
 */

exports.getCompanionWindow = getCompanionWindow;
var getCompanionWindowsOfWindow = (0, _reselect.createSelector)([getCompanionWindowIds, function (state) {
  return state.companionWindows;
}], function (companionWindowIds, companionWindows) {
  return companionWindowIds.map(function (id) {
    return companionWindows[id];
  });
});
/**
* Return the companion window string from state in a given windowId and position
* @param {object} state
* @param {String} windowId
* @param {String} position
* @return {String}
*/

exports.getCompanionWindowsOfWindow = getCompanionWindowsOfWindow;
var getCompanionWindowForPosition = (0, _reselect.createSelector)([getCompanionWindowsOfWindow, function (state, _ref3) {
  var position = _ref3.position;
  return position;
}], function (companionWindows, position) {
  return companionWindows.find(function (cw) {
    return cw.position === position;
  });
});
exports.getCompanionWindowForPosition = getCompanionWindowForPosition;
var getViewer = (0, _reselect.createSelector)([function (state) {
  return state.viewers;
}, function (state, _ref4) {
  var windowId = _ref4.windowId;
  return windowId;
}], function (viewers, windowId) {
  return viewers[windowId];
});
/**
 * Returns the visibility of the companion area
 * @param {object} state
 * @param {object} props
 * @return {Boolean}
 */

exports.getViewer = getViewer;
var getCompanionAreaVisibility = (0, _reselect.createSelector)([function (state, _ref5) {
  var position = _ref5.position;
  return position;
}, getWindow], function (position, _ref6) {
  var companionAreaOpen = _ref6.companionAreaOpen,
      sideBarOpen = _ref6.sideBarOpen;
  if (position !== 'left') return true;
  return !!(companionAreaOpen && sideBarOpen);
});
/**
 * Returns the draggability of a window
 * @param {object} state
 * @param {object} props
 * @return {Boolean}
 */

exports.getCompanionAreaVisibility = getCompanionAreaVisibility;
var getWindowDraggability = (0, _reselect.createSelector)([_config.getWorkspaceType, getWindow, function (state) {
  return Object.keys(state.windows).length > 1;
}], function (workspaceType, window, manyWindows) {
  if (workspaceType === 'elastic') return true;
  return manyWindows && window && window.maximized === false;
});
exports.getWindowDraggability = getWindowDraggability;