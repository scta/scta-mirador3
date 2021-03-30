"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _CompanionWindow = require("../components/CompanionWindow");

/**
 * mapStateToProps - to hook up connect
 * @memberof CompanionWindow
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
      windowId = _ref.windowId;
  var companionWindow = (0, _selectors.getCompanionWindow)(state, {
    companionWindowId: id
  });
  return (0, _objectSpread2.default)({}, companionWindow, {
    isDisplayed: companionWindow && companionWindow.content && companionWindow.content.length > 0
  });
};
/**
 * mapDispatchToProps - to hook up connect
 * @memberof CompanionWindow
 * @private
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId,
      id = _ref2.id;
  return {
    onCloseClick: function onCloseClick() {
      return dispatch(actions.removeCompanionWindow(windowId, id));
    },
    updateCompanionWindow: function updateCompanionWindow() {
      return dispatch(actions.updateCompanionWindow.apply(actions, arguments));
    }
  };
};
/**
 *
 * @param theme
 * @returns {{closeButton: {top: number, position: string, right: number},
 * root: {overflowY: string, width: string}}}
 */


var styles = function styles(theme) {
  return {
    'companionWindow-bottom': {
      borderTop: '0.5px solid rgba(0, 0, 0, 0.12)'
    },
    'companionWindow-left': {},
    'companionWindow-right': {
      borderLeft: '0.5px solid rgba(0, 0, 0, 0.12)'
    },
    content: {
      overflowY: 'auto'
    },
    horizontal: {
      height: '201px',
      width: '100%'
    },
    leftPadding: {
      paddingLeft: theme.spacing.unit * 2
    },
    positionButton: {
      order: -100
    },
    root: {
      boxShadow: 'none',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0
    },
    toolbar: {
      minHeight: 'max-content'
    },
    vertical: {
      width: '235px'
    },
    windowSideBarTitle: (0, _objectSpread2.default)({}, theme.typography.subtitle1, {
      flexGrow: 1
    })
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('CompanionWindow'));

var _default = enhance(_CompanionWindow.CompanionWindow);

exports.default = _default;