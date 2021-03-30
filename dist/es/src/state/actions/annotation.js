"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAnnotation = requestAnnotation;
exports.receiveAnnotation = receiveAnnotation;
exports.receiveAnnotationFailure = receiveAnnotationFailure;
exports.fetchAnnotation = fetchAnnotation;
exports.selectAnnotation = selectAnnotation;
exports.deselectAnnotation = deselectAnnotation;
exports.toggleAnnotationDisplay = toggleAnnotationDisplay;
exports.highlightAnnotation = highlightAnnotation;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _actionTypes = _interopRequireDefault(require("./action-types"));

/**
 * requestAnnotation - action creator
 *
 * @param  {String} canvasId
 * @param  {String} annotationId
 * @memberof ActionCreators
 */
function requestAnnotation(canvasId, annotationId) {
  return {
    annotationId: annotationId,
    canvasId: canvasId,
    type: _actionTypes.default.REQUEST_ANNOTATION
  };
}
/**
 * receiveAnnotation - action creator
 *
 * @param  {String} canvasId
 * @param  {String} annotationId
 * @param  {Object} annotationJson
 * @memberof ActionCreators
 */


function receiveAnnotation(canvasId, annotationId, annotationJson) {
  return {
    annotationId: annotationId,
    annotationJson: annotationJson,
    canvasId: canvasId,
    type: _actionTypes.default.RECEIVE_ANNOTATION
  };
}
/**
 * receiveAnnotationFailure - action creator
 *
 * @param  {String} canvasId
 * @param  {String} annotationId
 * @param  {String} error
 * @memberof ActionCreators
 */


function receiveAnnotationFailure(canvasId, annotationId, error) {
  return {
    annotationId: annotationId,
    canvasId: canvasId,
    error: error,
    type: _actionTypes.default.RECEIVE_ANNOTATION_FAILURE
  };
}
/**
 * fetchAnnotation - action creator
 *
 * @param  {String} annotationId
 * @memberof ActionCreators
 */


function fetchAnnotation(canvasId, annotationId) {
  return function (dispatch) {
    dispatch(requestAnnotation(canvasId, annotationId));
    return (0, _nodeFetch.default)(annotationId).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveAnnotation(canvasId, annotationId, json));
    }).catch(function (error) {
      return dispatch(receiveAnnotationFailure(canvasId, annotationId, error));
    });
  };
}
/**
 * selectAnnotation - action creator
 *
 * @param  {String} windowId
 * @param  {String} canvasId
 * @param  {String} annotationId
 * @memberof ActionCreators
 */


function selectAnnotation(windowId, canvasId, annotationId) {
  return {
    annotationId: annotationId,
    canvasId: canvasId,
    type: _actionTypes.default.SELECT_ANNOTATION,
    windowId: windowId
  };
}
/**
 * deselectAnnotation - action creator
 *
 * @param  {String} windowId
 * @param  {String} canvasId
 * @param  {String} annotationId
 * @memberof ActionCreators
 */


function deselectAnnotation(windowId, canvasId, annotationId) {
  return {
    annotationId: annotationId,
    canvasId: canvasId,
    type: _actionTypes.default.DESELECT_ANNOTATION,
    windowId: windowId
  };
}
/**
 * toggleAnnotationDisplay - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */


function toggleAnnotationDisplay(windowId) {
  return {
    type: _actionTypes.default.TOGGLE_ANNOTATION_DISPLAY,
    windowId: windowId
  };
}
/**
 * toggleAnnotationDisplay - action creator
 *
 * @param  {String} windowId
 * @memberof ActionCreators
 */


function highlightAnnotation(windowId, annotationId) {
  return {
    annotationId: annotationId,
    type: _actionTypes.default.HIGHLIGHT_ANNOTATION,
    windowId: windowId
  };
}