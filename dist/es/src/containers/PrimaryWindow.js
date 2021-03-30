"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _extend = require("../extend");

var _PrimaryWindow = require("../components/PrimaryWindow");

var enhance = (0, _redux.compose)((0, _extend.withPlugins)('PrimaryWindow'));

var _default = enhance(_PrimaryWindow.PrimaryWindow);

exports.default = _default;