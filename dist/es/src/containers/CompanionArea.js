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

var _selectors = require("../state/selectors");

var actions = _interopRequireWildcard(require("../state/actions"));

var _CompanionArea = require("../components/CompanionArea");

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId,
      position = _ref.position;
  return {
    companionAreaOpen: (0, _selectors.getCompanionAreaVisibility)(state, {
      position: position,
      windowId: windowId
    }),
    companionWindows: (0, _selectors.getCompanionWindowsOfWindow)(state, {
      windowId: windowId
    }).filter(function (cw) {
      return cw && cw.position === position;
    }),
    sideBarOpen: (0, _selectors.getWindow)(state, {
      windowId: windowId
    }).sideBarOpen
  };
};

var mapDispatchToProps = {
  setCompanionAreaOpen: actions.setCompanionAreaOpen
};
/** */

var styles = function styles(theme) {
  return {
    horizontal: {
      flexDirection: 'column',
      width: '100%'
    },
    root: {
      display: 'flex',
      minHeight: 0,
      position: 'relative',
      zIndex: theme.zIndex.appBar - 2
    },
    toggle: {
      '&:hover': {
        backgroundColor: theme.palette.background.paper
      },
      backgroundColor: theme.palette.background.paper,
      border: "1px solid ".concat(theme.palette.darkened[theme.palette.type]),
      borderRadius: 0,
      height: '48px',
      left: '100%',
      marginTop: '1rem',
      padding: 2,
      position: 'absolute',
      width: '23px',
      zIndex: theme.zIndex.drawer
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('CompanionArea'));

var _default = enhance(_CompanionArea.CompanionArea);

exports.default = _default;