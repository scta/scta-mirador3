"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _extend = require("../extend");

var _MiradorMenuButton = require("../components/MiradorMenuButton");

var _selectors = require("../state/selectors");

/** */
var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state)
  };
};

var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, null), (0, _extend.withPlugins)('MiradorMenuButton'));

var _default = enhance(_MiradorMenuButton.MiradorMenuButton);

exports.default = _default;