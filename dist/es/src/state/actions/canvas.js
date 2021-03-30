"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCanvas = setCanvas;
exports.updateViewport = updateViewport;

var _actionTypes = _interopRequireDefault(require("./action-types"));

/**
 * setCanvas - action creator
 *
 * @param  {String} windowId
 * @param  {Number} canvasIndex
 * @memberof ActionCreators
 */
function setCanvas(windowId, canvasIndex) {
  return {
    canvasIndex: canvasIndex,
    type: _actionTypes.default.SET_CANVAS,
    windowId: windowId
  };
}
/**
 *
 * @param windowId
 * @param payload
 * @returns {{payload: *, type: string, windowId: *}}
 */


function updateViewport(windowId, payload) {
  return {
    payload: payload,
    type: _actionTypes.default.UPDATE_VIEWPORT,
    windowId: windowId
  };
}