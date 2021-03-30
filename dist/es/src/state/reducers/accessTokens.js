"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessTokensReducer = accessTokensReducer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread6 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _manifesto = require("manifesto.js");

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

/** */
function accessTokensReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var authService;
  var tokenService;

  switch (action.type) {
    case _actionTypes.default.RECEIVE_INFO_RESPONSE:
      if (action.ok && (0, _normalizeUrl.default)(action.infoId) === (0, _normalizeUrl.default)(action.infoJson['@id'])) return state;
      authService = _manifesto.Utils.getService((0, _objectSpread6.default)({}, action.infoJson, {
        options: {}
      }), 'http://iiif.io/api/auth/1/external');
      if (!authService) return state;
      tokenService = _manifesto.Utils.getService(authService, 'http://iiif.io/api/auth/1/token');
      if (!tokenService || state[tokenService.id]) return state;
      return (0, _objectSpread6.default)({}, state, (0, _defineProperty2.default)({}, tokenService.id, {
        authId: authService.id,
        id: tokenService.id,
        infoIds: [].concat(state[tokenService.id] && state[tokenService.id].infoIds || [], action.infoId),
        isFetching: true
      }));

    case _actionTypes.default.REQUEST_ACCESS_TOKEN:
      return (0, _objectSpread6.default)({}, state, (0, _defineProperty2.default)({}, action.serviceId, {
        authId: action.authId,
        id: action.serviceId,
        infoIds: action.infoIds,
        isFetching: true
      }));

    case _actionTypes.default.RECEIVE_ACCESS_TOKEN:
      return (0, _objectSpread6.default)({}, state, (0, _defineProperty2.default)({}, action.serviceId, (0, _objectSpread6.default)({}, state[action.serviceId], {
        infoIds: [],
        isFetching: false,
        json: action.json
      })));

    case _actionTypes.default.RECEIVE_ACCESS_TOKEN_FAILURE:
      return (0, _objectSpread6.default)({}, state, (0, _defineProperty2.default)({}, action.serviceId, (0, _objectSpread6.default)({}, state[action.serviceId], {
        error: action.error,
        isFetching: false
      })));

    default:
      return state;
  }
}