"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCompanionWindow = addCompanionWindow;
exports.updateCompanionWindow = updateCompanionWindow;
exports.removeCompanionWindow = removeCompanionWindow;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _actionTypes = _interopRequireDefault(require("./action-types"));

var defaultProps = {
  content: null,
  position: null
};
/** */

function addCompanionWindow(windowId, payload) {
  var defaults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps;
  return function (dispatch, getState) {
    var _getState = getState(),
        companionWindows = _getState.companionWindows;

    var id = "cw-".concat((0, _v.default)());
    dispatch({
      companionWindows: companionWindows,
      id: id,
      payload: (0, _objectSpread2.default)({}, defaults, payload, {
        id: id
      }),
      type: _actionTypes.default.ADD_COMPANION_WINDOW,
      windowId: windowId
    });
  };
}
/** */


function updateCompanionWindow(windowId, id, payload) {
  return {
    id: id,
    payload: payload,
    type: _actionTypes.default.UPDATE_COMPANION_WINDOW,
    windowId: windowId
  };
}
/** */


function removeCompanionWindow(windowId, id) {
  return {
    id: id,
    type: _actionTypes.default.REMOVE_COMPANION_WINDOW,
    windowId: windowId
  };
}