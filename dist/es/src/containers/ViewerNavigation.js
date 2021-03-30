"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _ViewerNavigation = require("../components/ViewerNavigation");

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var window = _ref.window;
  return {
    canvases: (0, _selectors.getManifestCanvases)(state, {
      windowId: window.id
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */


var mapDispatchToProps = {
  setCanvas: actions.setCanvas
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('ViewerNavigation') // further HOC go here
);

var _default = enhance(_ViewerNavigation.ViewerNavigation);

exports.default = _default;