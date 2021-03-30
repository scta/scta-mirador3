"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewersReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

/**
 * viewersReducer
 */
var viewersReducer = function viewersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.default.UPDATE_VIEWPORT:
      return (0, _objectSpread3.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread3.default)({}, action.payload)));

    case _actionTypes.default.REMOVE_WINDOW:
      return Object.keys(state).reduce(function (object, key) {
        if (key !== action.windowId) {
          object[key] = state[key]; // eslint-disable-line no-param-reassign
        }

        return object;
      }, {});

    case _actionTypes.default.IMPORT_MIRADOR_STATE:
      return action.state.viewers;

    default:
      return state;
  }
};

exports.viewersReducer = viewersReducer;