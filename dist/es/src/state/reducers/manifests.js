"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manifestsReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

/**
 * manifestsReducer
 */
var manifestsReducer = function manifestsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.default.REQUEST_MANIFEST:
      return (0, _objectSpread5.default)((0, _defineProperty2.default)({}, action.manifestId, (0, _objectSpread5.default)({}, state[action.manifestId], action.properties, {
        id: action.manifestId
      })), (0, _omit.default)(state, action.manifestId));

    case _actionTypes.default.RECEIVE_MANIFEST:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.manifestId, (0, _objectSpread5.default)({}, state[action.manifestId], {
        error: null,
        // Explicitly set the error to null in case this is a re-fetch
        id: action.manifestId,
        isFetching: false,
        json: action.manifestJson
      })));

    case _actionTypes.default.RECEIVE_MANIFEST_FAILURE:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.manifestId, (0, _objectSpread5.default)({}, state[action.manifestId], {
        error: action.error,
        id: action.manifestId,
        isFetching: false
      })));

    case _actionTypes.default.REMOVE_MANIFEST:
      return Object.keys(state).reduce(function (object, key) {
        if (key !== action.manifestId) {
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

exports.manifestsReducer = manifestsReducer;