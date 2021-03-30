"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annotationsReducer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread5 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

/**
 * annotationReducer
 */
var annotationsReducer = function annotationsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.default.REQUEST_ANNOTATION:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.canvasId, (0, _defineProperty2.default)({}, action.annotationId, {
        id: action.annotationId,
        isFetching: true
      })));

    case _actionTypes.default.RECEIVE_ANNOTATION:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.canvasId, (0, _defineProperty2.default)({}, action.annotationId, {
        id: action.annotationId,
        isFetching: false,
        json: action.annotationJson
      })));

    case _actionTypes.default.RECEIVE_ANNOTATION_FAILURE:
      return (0, _objectSpread5.default)({}, state, (0, _defineProperty2.default)({}, action.canvasId, (0, _defineProperty2.default)({}, action.annotationId, {
        error: action.error,
        id: action.annotationId,
        isFetching: false
      })));

    case _actionTypes.default.IMPORT_MIRADOR_STATE:
      return {};

    default:
      return state;
  }
};

exports.annotationsReducer = annotationsReducer;