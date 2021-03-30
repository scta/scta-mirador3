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

var _Window = require("../components/Window");

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - used to hook up connect to action creators
 * @memberof Window
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var window = _ref.window;
  return {
    label: (0, _selectors.getManifestTitle)(state, {
      windowId: window.id
    }),
    manifest: (0, _selectors.getManifest)(state, {
      windowId: window.id
    }),
    thumbnailNavigationPosition: (0, _selectors.getThumbnailNavigationPosition)(state, {
      windowId: window.id
    }),
    window: (0, _selectors.getWindow)(state, {
      windowId: window.id
    }),
    windowDraggable: (0, _selectors.getWindowDraggability)(state, {
      windowId: window.id
    }),
    workspaceType: (0, _selectors.getWorkspaceType)(state)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var window = _ref2.window;
  return {
    fetchManifest: function fetchManifest() {
      return dispatch(actions.fetchManifest.apply(actions, arguments));
    },
    focusWindow: function focusWindow() {
      return dispatch(actions.focusWindow(window.id));
    }
  };
};
/**
 * @param theme
 */


var styles = function styles(theme) {
  return {
    companionAreaBottom: {
      display: 'flex',
      flex: '0',
      flexBasis: 'auto',
      minHeight: 0
    },
    companionAreaRight: {
      display: 'flex',
      flex: '0',
      minHeight: 0
    },
    middle: {
      display: 'flex',
      flex: '1',
      flexDirection: 'row',
      minHeight: 0
    },
    middleLeft: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      minHeight: 0
    },
    primaryWindow: {
      display: 'flex',
      flex: '1',
      height: '300px',
      minHeight: 0,
      position: 'relative'
    },
    thumbnailArea: {
      backgroundColor: theme.palette.darkened[theme.palette.type]
    },
    thumbnailAreaBottom: {},
    thumbnailAreaRight: {
      minWidth: 100
    },
    window: {
      backgroundColor: theme.palette.darkened[theme.palette.type],
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      minHeight: 0,
      overflow: 'hidden',
      width: '100%'
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('Window'));

var _default = enhance(_Window.Window);

exports.default = _default;