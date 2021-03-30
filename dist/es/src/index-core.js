"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.store = void 0;

var _createStore = _interopRequireDefault(require("./state/createStore"));

var actions = _interopRequireWildcard(require("./state/actions"));

exports.actions = actions;
var store = (0, _createStore.default)();
exports.store = store;