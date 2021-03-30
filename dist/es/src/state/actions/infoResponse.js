"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestInfoResponse = requestInfoResponse;
exports.receiveInfoResponse = receiveInfoResponse;
exports.receiveInfoResponseFailure = receiveInfoResponseFailure;
exports.fetchInfoResponse = fetchInfoResponse;
exports.removeInfoResponse = removeInfoResponse;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

var _manifesto = require("manifesto.js");

var _actionTypes = _interopRequireDefault(require("./action-types"));

/**
 * requestInfoResponse - action creator
 *
 * @param  {String} infoId
 * @memberof ActionCreators
 */
function requestInfoResponse(infoId) {
  return {
    infoId: infoId,
    type: _actionTypes.default.REQUEST_INFO_RESPONSE
  };
}
/**
 * receiveInfoResponse - action creator
 *
 * @param  {String} infoId
 * @param  {Object} manifestJson
 * @memberof ActionCreators
 */


function receiveInfoResponse(infoId, infoJson, ok) {
  return {
    infoId: infoId,
    infoJson: infoJson,
    ok: ok,
    type: _actionTypes.default.RECEIVE_INFO_RESPONSE
  };
}
/**
 * receiveInfoResponseFailure - action creator
 *
 * @param  {String} infoId
 * @param  {String} error
 * @memberof ActionCreators
 */


function receiveInfoResponseFailure(infoId, error) {
  return {
    error: error,
    infoId: infoId,
    type: _actionTypes.default.RECEIVE_INFO_RESPONSE_FAILURE
  };
}
/** @private */


function getAccessToken(_ref, iiifService) {
  var accessTokens = _ref.accessTokens;
  if (!iiifService) return undefined;

  var services = _manifesto.Utils.getServices(iiifService).filter(function (s) {
    return s.getProfile().value.match(/http:\/\/iiif.io\/api\/auth\/1\//);
  });

  for (var i = 0; i < services.length; i += 1) {
    var authService = services[i];

    var accessTokenService = _manifesto.Utils.getService(authService, 'http://iiif.io/api/auth/1/token');

    var token = accessTokens[accessTokenService.id];
    if (token && token.json) return token.json.accessToken;
  }

  return undefined;
}
/**
 * fetchInfoResponse - action creator
 *
 * @param  {String} infoId
 * @memberof ActionCreators
 */


function fetchInfoResponse(_ref2) {
  var imageId = _ref2.imageId,
      imageResource = _ref2.imageResource;
  return function (dispatch, getState) {
    var state = getState();
    var infoId = imageId || "".concat(imageResource.getServices()[0].id.replace(/\/$/, ''));
    var headers = {};
    var infoResponse = infoId && state.infoResponses && state.infoResponses[infoId] && !state.infoResponses[infoId].isFetching && state.infoResponses[infoId].json;
    var token = getAccessToken(getState(), infoResponse || imageResource && imageResource.getServices()[0]);

    if (token) {
      headers.Authorization = "Bearer ".concat(token);
    }

    dispatch(requestInfoResponse(infoId));
    return (0, _nodeFetch.default)("".concat(infoId, "/info.json"), {
      headers: headers
    }).then(function (response) {
      return response.json().then(function (json) {
        return {
          json: json,
          ok: response.ok
        };
      });
    }).then(function (_ref3) {
      var json = _ref3.json,
          ok = _ref3.ok;
      return dispatch(receiveInfoResponse(infoId, json, ok));
    }).catch(function (error) {
      return dispatch(receiveInfoResponseFailure(infoId, error));
    });
  };
}
/**
 * removeInfoResponse - action creator
 *
 * @param  {String} infoId
 * @memberof ActionCreators
 */


function removeInfoResponse(infoId) {
  return {
    infoId: infoId,
    type: _actionTypes.default.REMOVE_INFO_RESPONSE
  };
}