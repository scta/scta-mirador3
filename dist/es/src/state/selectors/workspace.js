"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLatestError = getLatestError;
exports.getFullScreenEnabled = void 0;

var _reselect = require("reselect");

/** */
function getWorkspace(state) {
  return state.workspace;
}

var getFullScreenEnabled = (0, _reselect.createSelector)([getWorkspace], function (workspace) {
  return workspace.isFullscreenEnabled;
});
/** Returns the latest error from the state
 * @param {object} state
 */

exports.getFullScreenEnabled = getFullScreenEnabled;

function getLatestError(state) {
  return state.errors.items[0] && state.errors[state.errors.items[0]];
}