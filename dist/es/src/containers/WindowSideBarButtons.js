"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _core = require("@material-ui/core");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _WindowSideBarButtons = require("../components/WindowSideBarButtons");

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowSideButtons
 * @private
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var windowId = _ref.windowId;
  return {
    addCompanionWindow: function addCompanionWindow(content) {
      return dispatch(actions.addCompanionWindow(windowId, {
        content: content,
        position: 'left'
      }));
    }
  };
};
/**
 * mapStateToProps - used to hook up connect to state
 * @memberof WindowSideButtons
 * @private
 */


var mapStateToProps = function mapStateToProps(state, _ref2) {
  var windowId = _ref2.windowId;
  return {
    hasAnnotations: (0, _selectors.getAnnotationResourcesByMotivation)(state, {
      motivations: ['oa:commenting', 'sc:painting'],
      windowId: windowId
    }).length > 0,
    sideBarPanel: ((0, _selectors.getCompanionWindowForPosition)(state, {
      position: 'left',
      windowId: windowId
    }) || {}).content
  };
};
/** */


var style = function style(theme) {
  return {
    tab: {
      '&:active': {
        backgroundColor: theme.palette.action.active
      },
      '&:hover': {
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        backgroundColor: theme.palette.action.hover,
        textDecoration: 'none' // Reset on touch devices, it doesn't add specificity

      },
      borderRight: '2px solid transparent',
      minWidth: 'auto'
    },
    tabRipple: {
      backgroundColor: theme.palette.action.active
    },
    tabSelected: {
      borderRight: "2px solid ".concat(theme.palette.secondary.main)
    },
    tabsFlexContainer: {
      flexDirection: 'column'
    },
    tabsIndicator: {
      display: 'none'
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(style), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WindowSideBarButtons'));

var _default = enhance(_WindowSideBarButtons.WindowSideBarButtons);

exports.default = _default;