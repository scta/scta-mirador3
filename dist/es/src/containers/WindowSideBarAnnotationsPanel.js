"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _styles = require("@material-ui/core/styles");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _WindowSideBarAnnotationsPanel = require("../components/WindowSideBarAnnotationsPanel");

/**
 * @param {Array} resources
 * @return {Array} [{ id: 'abc123', content: 'Annotation Content' }, ...]
 */
function getIdAndContentOfResources(resources) {
  return resources.map(function (resource, i) {
    return {
      content: resource.chars,
      id: resource.id,
      targetId: resource.targetId
    };
  });
}
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarAnnotationsPanel
 * @private
 */


var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    allAnnotationsAreHighlighted: (0, _selectors.getWindow)(state, {
      windowId: windowId
    }).displayAllAnnotations,
    annotations: getIdAndContentOfResources((0, _selectors.getAnnotationResourcesByMotivation)(state, {
      motivations: ['oa:commenting', 'sc:painting'],
      windowId: windowId
    })),
    selectedAnnotationIds: (0, _selectors.getSelectedAnnotationIds)(state, {
      windowId: windowId
    })
  };
};
/**
 * mapDispatchToProps - to hook up connect
 * @memberof WindowSideBarAnnotationsPanel
 * @private
 */


var mapDispatchToProps = {
  deselectAnnotation: actions.deselectAnnotation,
  highlightAnnotation: actions.highlightAnnotation,
  selectAnnotation: actions.selectAnnotation
};
/** */

var styles = function styles(theme) {
  return {
    annotationListItem: {
      '&:hover': {
        backgroundColor: theme.palette.action.hover
      },
      borderBottom: "0.5px solid ".concat(theme.palette.divider),
      cursor: 'pointer'
    },
    section: {
      borderBottom: '.5px solid rgba(0,0,0,0.25)',
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 2
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WindowSideBarAnnotationPanel') // further HOC
);

var _default = enhance(_WindowSideBarAnnotationsPanel.WindowSideBarAnnotationsPanel);

exports.default = _default;