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

var _WindowTopBar = require("../components/WindowTopBar");

/** mapStateToProps */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    allowClose: state.config.window.allowClose,
    allowFullscreen: state.config.window.allowFullscreen,
    focused: state.workspace.focusedWindowId === windowId,
    manifestTitle: (0, _selectors.getManifestTitle)(state, {
      windowId: windowId
    }),
    maximized: (0, _selectors.getWindow)(state, {
      windowId: windowId
    }).maximized
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId;
  return {
    maximizeWindow: function maximizeWindow() {
      return dispatch(actions.maximizeWindow(windowId));
    },
    minimizeWindow: function minimizeWindow() {
      return dispatch(actions.minimizeWindow(windowId));
    },
    removeWindow: function removeWindow() {
      return dispatch(actions.removeWindow(windowId));
    },
    toggleWindowSideBar: function toggleWindowSideBar() {
      return dispatch(actions.toggleWindowSideBar(windowId));
    }
  };
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */


var styles = function styles(theme) {
  return {
    focused: {},
    title: (0, _objectSpread2.default)({}, theme.typography.h6, {
      flexGrow: 1,
      paddingLeft: theme.spacing.unit / 2
    }),
    windowTopBarStyle: {
      '&$focused': {
        borderTop: "2px solid ".concat(theme.palette.secondary.main)
      },
      backgroundColor: theme.palette.lightened[theme.palette.type],
      borderTop: '2px solid transparent',
      minHeight: 32,
      paddingLeft: theme.spacing.unit / 2,
      paddingRight: theme.spacing.unit / 2
    },
    windowTopBarStyleDraggable: {
      cursor: 'move'
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WindowTopBar'));

var _default = enhance(_WindowTopBar.WindowTopBar);

exports.default = _default;