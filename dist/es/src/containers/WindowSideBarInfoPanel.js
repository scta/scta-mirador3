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

var _WindowSideBarInfoPanel = require("../components/WindowSideBarInfoPanel");

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowSideBarInfoPanel
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
      windowId = _ref.windowId;
  return {
    availableLocales: (0, _selectors.getMetadataLocales)(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    canvasDescription: (0, _selectors.getCanvasDescription)(state, {
      canvasIndex: 'selected',
      companionWindowId: id,
      windowId: windowId
    }),
    canvasLabel: (0, _selectors.getCanvasLabel)(state, {
      canvasIndex: 'selected',
      companionWindowId: id,
      windowId: windowId
    }),
    canvasMetadata: (0, _selectors.getDestructuredMetadata)((0, _selectors.getSelectedCanvas)(state, {
      companionWindowId: id,
      windowId: windowId
    })),
    locale: state.companionWindows[id].locale || (0, _selectors.getDefaultManifestLocale)(state, {
      windowId: windowId
    }),
    manifestDescription: (0, _selectors.getManifestDescription)(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    manifestLabel: (0, _selectors.getManifestTitle)(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    manifestMetadata: (0, _selectors.getManifestMetadata)(state, {
      companionWindowId: id,
      windowId: windowId
    }),
    manifestUrl: (0, _selectors.getManifestUrl)(state, {
      windowId: windowId
    })
  };
};
/** */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var windowId = _ref2.windowId,
      id = _ref2.id;
  return {
    setLocale: function setLocale(locale) {
      return dispatch(actions.updateCompanionWindow(windowId, id, {
        locale: locale
      }));
    }
  };
};
/**
 *
 * @param theme
 * @returns {label: {paddingLeft: number}}}
 */


var styles = function styles(theme) {
  return {
    section: {
      borderBottom: '.5px solid rgba(0,0,0,0.25)',
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit,
      paddingTop: theme.spacing.unit * 2
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WindowSideBarInfoPanel'));

var _default = enhance(_WindowSideBarInfoPanel.WindowSideBarInfoPanel);

exports.default = _default;