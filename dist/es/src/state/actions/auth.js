"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAuthenticationRequest = addAuthenticationRequest;
exports.resolveAuthenticationRequest = resolveAuthenticationRequest;
exports.requestAccessToken = requestAccessToken;
exports.receiveAccessToken = receiveAccessToken;
exports.receiveAccessTokenFailure = receiveAccessTokenFailure;
exports.fetchAccessTokenRequest = fetchAccessTokenRequest;
exports.resolveAccessTokenRequest = resolveAccessTokenRequest;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _manifesto = require("manifesto.js");

var _actionTypes = _interopRequireDefault(require("./action-types"));

var _infoResponse = require("./infoResponse");

/**
 * addAuthenticationRequest - action creator
 *
 * @param  {String} windowId
 * @param  {String} infoId
 * @param  {String} id
 * @memberof ActionCreators
 */
function addAuthenticationRequest(windowId, infoId, id) {
  return {
    id: id,
    infoId: infoId,
    type: _actionTypes.default.ADD_AUTHENTICATION_REQUEST,
    windowId: windowId
  };
}
/**
 * resolveAuthenticationRequest - action creator
 *
 * @param {String} id
 * @memberof ActionCreators
 */


function resolveAuthenticationRequest(id) {
  return function (dispatch, getState) {
    var _getState = getState(),
        auth = _getState.auth;

    dispatch(fetchAccessTokenRequest(id, auth[id].infoId));
  };
}
/**
 * requestAccessToken - action creator
 * @private
 *
 * @param  {String} serviceId
 * @param  {String} authId
 * @param  {String} infoIds
 * @memberof ActionCreators
 */


function requestAccessToken(serviceId, authId, infoIds) {
  return {
    authId: authId,
    infoIds: infoIds,
    serviceId: serviceId,
    type: _actionTypes.default.REQUEST_ACCESS_TOKEN
  };
}
/**
 * receiveAccessToken - action creator
 * @private
 *
 * @param  {String} serviceId
 * @param  {Object} json
 * @memberof ActionCreators
 */


function receiveAccessToken(serviceId, json) {
  return {
    json: json,
    serviceId: serviceId,
    type: _actionTypes.default.RECEIVE_ACCESS_TOKEN
  };
}
/**
 * receiveAccessTokenFailure - action creator
 * @private
 *
 * @param  {String} serviceId
 * @param  {Object} error
 * @memberof ActionCreators
 */


function receiveAccessTokenFailure(serviceId, error) {
  return {
    error: error,
    serviceId: serviceId,
    type: _actionTypes.default.RECEIVE_ACCESS_TOKEN_FAILURE
  };
}
/** @private */


function fetchAccessTokenRequest(id, infoIds) {
  var providedServices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return function (dispatch, getState) {
    var _getState2 = getState(),
        infoResponses = _getState2.infoResponses;

    var infoResponse = infoResponses[infoIds[0]].json;

    var services = providedServices || _manifesto.Utils.getServices(infoResponse);

    var authService = services.find(function (e) {
      return e.id === id;
    });
    if (!authService) return null;

    var accessTokenService = _manifesto.Utils.getService(authService, 'http://iiif.io/api/auth/1/token');

    dispatch(requestAccessToken(accessTokenService.id, authService.id, infoIds));
    return null;
  };
}
/**
 * resolveAccessTokenRequest - action creator
 *
 * @param {Object} message
 * @memberof ActionCreators
 */


function resolveAccessTokenRequest(_ref) {
  var messageId = _ref.messageId,
      json = (0, _objectWithoutProperties2.default)(_ref, ["messageId"]);
  return function (dispatch, getState) {
    var _getState$accessToken = getState().accessTokens[messageId],
        authId = _getState$accessToken.authId,
        infoIds = _getState$accessToken.infoIds;
    dispatch({
      id: authId,
      ok: !!json.accessToken,
      type: _actionTypes.default.RESOLVE_AUTHENTICATION_REQUEST
    });

    if (json.accessToken) {
      dispatch(receiveAccessToken(messageId, json));
      infoIds.forEach(function (imageId) {
        return dispatch((0, _infoResponse.fetchInfoResponse)({
          imageId: imageId
        }));
      });
    } else {
      dispatch(receiveAccessTokenFailure(messageId, json));
    }
  };
}