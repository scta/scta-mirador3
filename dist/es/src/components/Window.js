"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Window = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

var _WindowTopBar = _interopRequireDefault(require("../containers/WindowTopBar"));

var _PrimaryWindow = _interopRequireDefault(require("../containers/PrimaryWindow"));

var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));

/**
 * Represents a Window in the mirador workspace
 * @param {object} window
 */
var Window =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Window, _Component);

  function Window() {
    (0, _classCallCheck2.default)(this, Window);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Window).apply(this, arguments));
  }

  (0, _createClass2.default)(Window, [{
    key: "componentDidMount",

    /** */
    value: function componentDidMount(prevProps) {
      var _this$props = this.props,
          fetchManifest = _this$props.fetchManifest,
          manifest = _this$props.manifest,
          window = _this$props.window;

      if (window && window.manifestId && (!manifest || !manifest.isFetching)) {
        fetchManifest(window.manifestId);
      }
    }
    /**
     * wrappedTopBar - will conditionally wrap a WindowTopBar for needed
     * additional functionality based on workspace type
     */

  }, {
    key: "wrappedTopBar",
    value: function wrappedTopBar() {
      var _this$props2 = this.props,
          manifest = _this$props2.manifest,
          window = _this$props2.window,
          workspaceType = _this$props2.workspaceType,
          windowDraggable = _this$props2.windowDraggable;
      var mosaicWindowActions = this.context.mosaicWindowActions;

      var topBar = _react.default.createElement("div", null, _react.default.createElement(_WindowTopBar.default, {
        windowId: window.id,
        manifest: manifest,
        windowDraggable: windowDraggable
      }));

      if (workspaceType === 'mosaic' && windowDraggable) {
        return mosaicWindowActions.connectDragSource(topBar);
      }

      return topBar;
    }
    /**
     * Renders things
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          focusWindow = _this$props3.focusWindow,
          label = _this$props3.label,
          manifest = _this$props3.manifest,
          window = _this$props3.window,
          classes = _this$props3.classes,
          t = _this$props3.t;

      if (!window) {
        return _react.default.createElement(_react.default.Fragment, null);
      }

      return _react.default.createElement(_Paper.default, {
        onFocus: focusWindow,
        component: "section",
        elevation: 1,
        id: window.id,
        className: (0, _classnames.default)(classes.window, (0, _cssNs.default)('window'), window.maximized ? (0, _cssNs.default)('workspace-maximized-window') : null),
        "aria-label": t('window', {
          label: label
        })
      }, this.wrappedTopBar(), _react.default.createElement("div", {
        className: classes.middle
      }, _react.default.createElement("div", {
        className: classes.middleLeft
      }, _react.default.createElement("div", {
        className: classes.primaryWindow
      }, _react.default.createElement(_PrimaryWindow.default, {
        window: window,
        manifest: manifest,
        sideBarOpen: window.sideBarOpen
      })), _react.default.createElement("div", {
        className: classes.companionAreaBottom
      }, _react.default.createElement(_CompanionArea.default, {
        windowId: window.id,
        position: "bottom"
      }))), _react.default.createElement("div", {
        className: classes.companionAreaRight
      }, _react.default.createElement(_CompanionArea.default, {
        windowId: window.id,
        position: "right"
      }), _react.default.createElement(_CompanionArea.default, {
        windowId: window.id,
        position: "far-right"
      }))), _react.default.createElement(_CompanionArea.default, {
        windowId: window.id,
        position: "far-bottom"
      }));
    }
  }]);
  return Window;
}(_react.Component);

exports.Window = Window;
Window.contextTypes = {
  mosaicWindowActions: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
};
Window.propTypes = {
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  fetchManifest: _propTypes.default.func.isRequired,
  focusWindow: _propTypes.default.func,
  label: _propTypes.default.string,
  manifest: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func.isRequired,
  window: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  windowDraggable: _propTypes.default.bool,
  workspaceType: _propTypes.default.string
};
Window.defaultProps = {
  classes: {},
  focusWindow: function focusWindow() {},
  label: null,
  manifest: null,
  window: null,
  windowDraggable: null,
  workspaceType: null
};