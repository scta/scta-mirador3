"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContainerId = exports.getWorkspaceType = exports.getTheme = exports.getShowZoomControlsConfig = exports.getLanguagesFromConfigWithCurrent = void 0;

var _reselect = require("reselect");

/** */
function getConfig(state) {
  return state.config;
}
/**
* Return languages from config (in state) and indicate which is currently set
* @param {object} state
* @return {Array} [ {locale: 'de', label: 'Deutsch', current: true}, ... ]
*/


var getLanguagesFromConfigWithCurrent = (0, _reselect.createSelector)([getConfig], function (_ref) {
  var availableLanguages = _ref.availableLanguages,
      language = _ref.language;
  return Object.keys(availableLanguages).map(function (key) {
    return {
      current: key === language,
      label: availableLanguages[key],
      locale: key
    };
  });
});
exports.getLanguagesFromConfigWithCurrent = getLanguagesFromConfigWithCurrent;
var getShowZoomControlsConfig = (0, _reselect.createSelector)([function (state) {
  return state.workspace;
}], function (workspace) {
  return workspace.showZoomControls;
});
exports.getShowZoomControlsConfig = getShowZoomControlsConfig;
var getTheme = (0, _reselect.createSelector)([getConfig], function (_ref2) {
  var theme = _ref2.theme;
  return theme;
});
exports.getTheme = getTheme;
var getWorkspaceType = (0, _reselect.createSelector)([getConfig], function (_ref3) {
  var workspace = _ref3.workspace;
  return workspace.type;
});
exports.getWorkspaceType = getWorkspaceType;
var getContainerId = (0, _reselect.createSelector)([getConfig], function (_ref4) {
  var id = _ref4.id;
  return id;
});
exports.getContainerId = getContainerId;