"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _MiradorViewer = _interopRequireDefault(require("./lib/MiradorViewer"));

/**
 * Default Mirador instantiation
 */
function _default(config, plugins) {
  return new _MiradorViewer.default(config, plugins);
}