"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var actions = _interopRequireWildcard(require("../state/actions"));

var _extend = require("../extend");

var _selectors = require("../state/selectors");

var _AnnotationSettings = require("../components/AnnotationSettings");

/**
 * Mapping redux state to component props using connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    displayAll: (0, _selectors.getWindow)(state, {
      windowId: windowId
    }).displayAllAnnotations,
    displayAllDisabled: (0, _selectors.getAnnotationResourcesByMotivation)(state, {
      motivations: ['oa:commenting', 'sc:painting'],
      windowId: windowId
    }).length < 2
  };
};
/**
 * Mapping redux action dispatches to component props using connect
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    toggleAnnotationDisplay: function toggleAnnotationDisplay() {
      dispatch(actions.toggleAnnotationDisplay(windowId));
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('AnnotationSettings'));

var _default = enhance(_AnnotationSettings.AnnotationSettings);

exports.default = _default;