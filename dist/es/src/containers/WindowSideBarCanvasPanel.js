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

var _WindowSideBarCanvasPanel = require("../components/WindowSideBarCanvasPanel");

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - to hook up connect
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id,
      windowId = _ref.windowId;
  var canvases = (0, _selectors.getManifestCanvases)(state, {
    windowId: windowId
  });
  var config = state.config;
  return {
    canvases: canvases,
    config: config,
    variant: (0, _selectors.getCompanionWindow)(state, {
      companionWindowId: id,
      windowId: windowId
    }).variant
  };
};
/** */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref2) {
  var id = _ref2.id,
      windowId = _ref2.windowId;
  return {
    setCanvas: function setCanvas() {
      return dispatch(actions.setCanvas.apply(actions, arguments));
    },
    updateVariant: function updateVariant(variant) {
      return dispatch(actions.updateCompanionWindow(windowId, id, {
        variant: variant
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
    label: {
      paddingLeft: theme.spacing.unit
    },
    listItem: {
      borderBottom: "0.5px solid ".concat(theme.palette.divider),
      paddingRight: theme.spacing.unit
    },
    select: {
      '&:focus': {
        backgroundColor: theme.palette.background.paper
      }
    },
    selectEmpty: {
      backgroundColor: theme.palette.background.paper
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WindowSideBarCanvasPanel'));

var _default = enhance(_WindowSideBarCanvasPanel.WindowSideBarCanvasPanel);

exports.default = _default;