"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoResponsesReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _normalizeUrl = _interopRequireDefault(require("normalize-url"));

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

/**
 * infoResponsesReducer
 */
var infoResponsesReducer = function infoResponsesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.default.REQUEST_INFO_RESPONSE:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.infoId, {
        id: action.infoId,
        isFetching: true
      }));

    case _actionTypes.default.RECEIVE_INFO_RESPONSE:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.infoId, {
        degraded: !action.ok || !((0, _normalizeUrl.default)(action.infoId) === (0, _normalizeUrl.default)(action.infoJson['@id'])),
        id: action.infoId,
        isFetching: false,
        json: action.infoJson
      }));

    case _actionTypes.default.RECEIVE_INFO_RESPONSE_FAILURE:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.infoId, {
        error: action.error,
        id: action.infoId,
        isFetching: false
      }));

    case _actionTypes.default.REMOVE_INFO_RESPONSE:
      return Object.keys(state).reduce(function (object, key) {
        if (key !== action.infoId) {
          object[key] = state[key]; // eslint-disable-line no-param-reassign
        }

        return object;
      }, {});

    case _actionTypes.default.IMPORT_MIRADOR_STATE:
      return {};

    default:
      return state;
  }
};

exports.infoResponsesReducer = infoResponsesReducer;