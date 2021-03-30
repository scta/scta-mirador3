"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _WindowViewer = require("../components/WindowViewer");

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var window = _ref.window;
  return {
    currentCanvases: (0, _selectors.getSelectedCanvases)(state, {
      windowId: window.id
    }),
    infoResponses: state.infoResponses
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */


var mapDispatchToProps = {
  fetchAnnotation: actions.fetchAnnotation,
  fetchInfoResponse: actions.fetchInfoResponse
};
var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WindowViewer') // further HOC go here
);

var _default = enhance(_WindowViewer.WindowViewer);

exports.default = _default;