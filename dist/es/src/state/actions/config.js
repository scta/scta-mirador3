"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.importConfig = importConfig;
exports.setConfig = setConfig;
exports.updateConfig = updateConfig;
exports.importMiradorState = importMiradorState;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _actionTypes = _interopRequireDefault(require("./action-types"));

/**
 * importConfig - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */
function importConfig(config) {
  return {
    config: config,
    type: _actionTypes.default.IMPORT_CONFIG
  };
}
/**
 * setConfig - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */


function setConfig(config) {
  return {
    config: config,
    type: _actionTypes.default.SET_CONFIG
  };
}
/**
 * updateConfig - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */


function updateConfig(config) {
  return {
    config: config,
    type: _actionTypes.default.UPDATE_CONFIG
  };
}
/**
 * importMiradorState - action creator
 *
 * @param  {Object} config
 * @memberof ActionCreators
 */


function importMiradorState(state) {
  var newState = (0, _objectSpread2.default)({}, state, {
    workspace: (0, _objectSpread2.default)({}, state.workspace, {
      id: (0, _v.default)()
    })
  });
  return {
    state: newState,
    type: _actionTypes.default.IMPORT_MIRADOR_STATE
  };
}