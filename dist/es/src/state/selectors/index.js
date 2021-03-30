"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _annotations = require("./annotations");

Object.keys(_annotations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _annotations[key];
    }
  });
});

var _canvases = require("./canvases");

Object.keys(_canvases).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _canvases[key];
    }
  });
});

var _config = require("./config");

Object.keys(_config).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _config[key];
    }
  });
});

var _manifests = require("./manifests");

Object.keys(_manifests).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _manifests[key];
    }
  });
});

var _windows = require("./windows");

Object.keys(_windows).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _windows[key];
    }
  });
});

var _workspace = require("./workspace");

Object.keys(_workspace).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _workspace[key];
    }
  });
});