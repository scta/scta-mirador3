"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _WindowAuthenticationControl = require("../components/WindowAuthenticationControl");

/**
 * mapStateToProps - to hook up connect
 * @memberof App
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  var service = (0, _selectors.selectCanvasAuthService)(state, {
    canvasIndex: 'selected',
    windowId: windowId
  });
  var infoResponse = (0, _selectors.selectInfoResponse)(state, {
    canvasIndex: 'selected',
    windowId: windowId
  }) || {};
  return {
    confirmLabel: service && service.getConfirmLabel(),
    degraded: infoResponse.degraded,
    description: service && service.getDescription(),
    failureDescription: service && service.getFailureDescription(),
    failureHeader: service && service.getFailureHeader(),
    header: service && service.getHeader(),
    infoId: infoResponse.id,
    label: service && service.getLabel()[0].value,
    profile: service && service.getProfile(),
    serviceId: service && service.id,
    status: service && (0, _selectors.selectAuthStatus)(state, service)
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */


var mapDispatchToProps = {
  handleAuthInteraction: actions.addAuthenticationRequest
};
/**
 * @param theme
 * @returns {{typographyBody: {flexGrow: number, fontSize: number|string},
 * windowTopBarStyle: {minHeight: number, paddingLeft: number, backgroundColor: string}}}
 */

var styles = function styles(theme) {
  return {
    failure: {
      backgroundColor: theme.palette.error.dark
    },
    snackbar: {
      position: 'absolute'
    }
  };
};

var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _core.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _extend.withPlugins)('WindowAuthenticationControl'));

var _default = enhance(_WindowAuthenticationControl.WindowAuthenticationControl);

exports.default = _default;