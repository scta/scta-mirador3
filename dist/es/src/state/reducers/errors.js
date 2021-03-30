"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorsReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _without = _interopRequireDefault(require("lodash/without"));

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

var defaultState = {
  items: []
};
/**
 * errorsReducer
 */

var errorsReducer = function errorsReducer() {
  var _objectSpread2;

  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var ret;

  switch (action.type) {
    case _actionTypes.default.ADD_ERROR:
      return (0, _objectSpread3.default)({}, state, (_objectSpread2 = {}, (0, _defineProperty2.default)(_objectSpread2, action.id, {
        id: action.id,
        message: action.message
      }), (0, _defineProperty2.default)(_objectSpread2, "items", [].concat((0, _toConsumableArray2.default)(state.items), [action.id])), _objectSpread2));
    // eslint-disable-line max-len

    case _actionTypes.default.REMOVE_ERROR:
      ret = Object.keys(state).reduce(function (object, key) {
        if (key !== action.id) {
          object[key] = state[key]; // eslint-disable-line no-param-reassign
        }

        return object;
      }, {});
      ret.items = (0, _without.default)(ret.items, action.id);
      return ret;

    case _actionTypes.default.IMPORT_MIRADOR_STATE:
      return defaultState;

    default:
      return state;
  }
};

exports.errorsReducer = errorsReducer;