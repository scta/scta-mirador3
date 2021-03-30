"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

var _canvases = require("../selectors/canvases");

/**
 * authReducer
 */
var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var service;

  switch (action.type) {
    case _actionTypes.default.RECEIVE_INFO_RESPONSE:
      if (action.ok && (0, _normalizeUrl.default)(action.infoId) === (0, _normalizeUrl.default)(action.infoJson['@id'])) return state;
      service = (0, _canvases.selectNextAuthService)({
        auth: state
      }, action.infoJson, {
        external: true,
        kiosk: true
      });
      if (!service || state[service.id]) return state;
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, service.id, {
        id: service.id,
        infoId: [].concat(state[service.id] && state[service.id].infoId || [], action.infoId),
        isFetching: true,
        profile: service.getProfile()
      }));

    case _actionTypes.default.ADD_AUTHENTICATION_REQUEST:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.id, {
        id: action.id,
        infoId: [].concat(state[action.id] && state[action.id].infoId || [], action.infoId),
        isFetching: true
      }));

    case _actionTypes.default.RESOLVE_AUTHENTICATION_REQUEST:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.id, {
        id: action.id,
        isFetching: false,
        ok: action.ok
      }));

    default:
      return state;
  }
};

exports.authReducer = authReducer;