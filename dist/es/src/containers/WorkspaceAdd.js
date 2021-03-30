"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _WorkspaceAdd = require("../components/WorkspaceAdd");

/**
 * mapStateToProps - to hook up connect
 * @memberof Workspace
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    manifests: state.manifests
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof Workspace
 * @private
 */


var mapDispatchToProps = {
  setWorkspaceAddVisibility: actions.setWorkspaceAddVisibility
};
/**
 *
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: string},
 * form: {paddingBottom: number, paddingTop: number, marginTop: number},
 * fab: {bottom: number, position: string, right: number},
 * menuButton: {marginRight: number, marginLeft: number}}}
 */

var styles = function styles(theme) {
  return {
    displayNone: {
      display: 'none'
    },
    fab: {
      bottom: theme.spacing.unit * 2,
      position: 'absolute',
      right: theme.spacing.unit * 2
    },
    form: (0, _objectSpread2.default)({}, theme.mixins.gutters(), {
      left: '0',
      marginTop: 48,
      paddingBottom: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2,
      right: '0'
    }),
    list: {
      margin: '16px'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    paper: (0, _defineProperty2.default)({
      borderTop: '0',
      left: '0'
    }, theme.breakpoints.up('sm'), {
      left: '65px'
    }),
    typographyBody: {
      flexGrow: 1
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceAdd'));

var _default = enhance(_WorkspaceAdd.WorkspaceAdd);

exports.default = _default;