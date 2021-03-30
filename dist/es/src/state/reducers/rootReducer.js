"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRootReducer;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _redux = require("redux");

var _ = require(".");

/**
 * Function to create root reducer
 * from plugin reducers.
 * @namespace CreateRootReducer
 */
function createRootReducer(pluginReducers) {
  return (0, _redux.combineReducers)((0, _objectSpread2.default)({
    accessTokens: _.accessTokensReducer,
    annotations: _.annotationsReducer,
    auth: _.authReducer,
    companionWindows: _.companionWindowsReducer,
    config: _.configReducer,
    errors: _.errorsReducer,
    infoResponses: _.infoResponsesReducer,
    manifests: _.manifestsReducer,
    viewers: _.viewersReducer,
    windows: _.windowsReducer,
    workspace: _.workspaceReducer
  }, pluginReducers));
}