"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestManifest = requestManifest;
exports.receiveManifest = receiveManifest;
exports.receiveManifestFailure = receiveManifestFailure;
exports.fetchManifest = fetchManifest;
exports.removeManifest = removeManifest;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _actionTypes = _interopRequireDefault(require("./action-types"));

/**
 * requestManifest - action creator
 *
 * @param  {String} manifestId
 * @memberof ActionCreators
 */
function requestManifest(manifestId, properties) {
  return {
    manifestId: manifestId,
    properties: properties,
    type: _actionTypes.default.REQUEST_MANIFEST
  };
}
/**
 * receiveManifest - action creator
 *
 * @param  {String} manifestId
 * @param  {Object} manifestJson
 * @memberof ActionCreators
 */


function receiveManifest(manifestId, manifestJson) {
  return {
    manifestId: manifestId,
    manifestJson: manifestJson,
    type: _actionTypes.default.RECEIVE_MANIFEST
  };
}
/**
 * receiveManifestFailure - action creator
 *
 * @param  {String} windowId
 * @param  {String} error
 * @memberof ActionCreators
 */


function receiveManifestFailure(manifestId, error) {
  return {
    error: error,
    manifestId: manifestId,
    type: _actionTypes.default.RECEIVE_MANIFEST_FAILURE
  };
}
/**
 * fetchManifest - action creator
 *
 * @param  {String} manifestId
 * @memberof ActionCreators
 */


function fetchManifest(manifestId, properties) {
  return function (dispatch) {
    dispatch(requestManifest(manifestId, (0, _objectSpread2.default)({}, properties, {
      isFetching: true
    })));
    return (0, _nodeFetch.default)(manifestId).then(function (response) {
      return response.json();
    }).then(function (json) {
      return dispatch(receiveManifest(manifestId, json));
    }).catch(function (error) {
      if ((0, _typeof2.default)(error) === 'object') {
        // Returned by JSON parse failure
        dispatch(receiveManifestFailure(manifestId, String(error)));
      } else {
        dispatch(receiveManifestFailure(manifestId, error));
      }
    });
  };
}
/**
 * removeManifest - action creator
 *
 * @param  {String} manifestId
 * @memberof ActionCreators
 */


function removeManifest(manifestId) {
  return {
    manifestId: manifestId,
    type: _actionTypes.default.REMOVE_MANIFEST
  };
}