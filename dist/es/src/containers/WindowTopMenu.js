"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var _WindowTopMenu = require("../components/WindowTopMenu");

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowTopMenu
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    containerId: (0, _selectors.getContainerId)(state)
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _extend.withPlugins)('WindowTopMenu'));

var _default = enhance(_WindowTopMenu.WindowTopMenu);

exports.default = _default;