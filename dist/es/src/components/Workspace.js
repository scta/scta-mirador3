"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Workspace = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Window = _interopRequireDefault(require("../containers/Window"));

var _WorkspaceMosaic = _interopRequireDefault(require("../containers/WorkspaceMosaic"));

var _WorkspaceElastic = _interopRequireDefault(require("../containers/WorkspaceElastic"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
var Workspace =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Workspace, _React$Component);

  function Workspace() {
    (0, _classCallCheck2.default)(this, Workspace);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Workspace).apply(this, arguments));
  }

  (0, _createClass2.default)(Workspace, [{
    key: "workspaceByType",

    /**
     * Determine which workspace to render by configured type
     */
    value: function workspaceByType() {
      var _this$props = this.props,
          workspaceId = _this$props.workspaceId,
          workspaceType = _this$props.workspaceType,
          windows = _this$props.windows;

      if (this.maximizedWindows()) {
        return this.maximizedWindows();
      }

      switch (workspaceType) {
        case 'elastic':
          return _react.default.createElement(_WorkspaceElastic.default, null);

        case 'mosaic':
          return _react.default.createElement(_WorkspaceMosaic.default, {
            windows: windows
          });

        default:
          return Object.values(windows).map(function (window) {
            return _react.default.createElement(_Window.default, {
              key: "".concat(window.id, "-").concat(workspaceId),
              window: window
            });
          });
      }
    }
    /**
     * Determine whether or not there are maximized windows
     */

  }, {
    key: "maximizedWindows",
    value: function maximizedWindows() {
      var _this$props2 = this.props,
          windows = _this$props2.windows,
          workspaceId = _this$props2.workspaceId;
      var windowKeys = Object.keys(windows).sort();
      var maximizedWindows = windowKeys.map(function (id) {
        return windows[id];
      }).filter(function (window) {
        return window.maximized === true;
      });

      if (maximizedWindows.length) {
        return Object.values(maximizedWindows).map(function (window) {
          return _react.default.createElement(_Window.default, {
            key: "".concat(window.id, "-").concat(workspaceId),
            window: window,
            className: (0, _classnames.default)((0, _cssNs.default)('workspace-maximized-window'))
          });
        });
      }

      return false;
    }
    /**
     * render
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          isWorkspaceControlPanelVisible = _this$props3.isWorkspaceControlPanelVisible,
          t = _this$props3.t;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)((0, _cssNs.default)('workspace-viewport'), isWorkspaceControlPanelVisible && (0, _cssNs.default)('workspace-with-control-panel'))
      }, _react.default.createElement(_Typography.default, {
        variant: "srOnly",
        component: "h1"
      }, t('miradorViewer')), this.workspaceByType());
    }
  }]);
  return Workspace;
}(_react.default.Component);

exports.Workspace = Workspace;
Workspace.propTypes = {
  isWorkspaceControlPanelVisible: _propTypes.default.bool.isRequired,
  t: _propTypes.default.func.isRequired,
  windows: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  workspaceId: _propTypes.default.string.isRequired,
  workspaceType: _propTypes.default.string.isRequired // eslint-disable-line react/forbid-prop-types

};