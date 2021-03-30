"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceFullScreenButton = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _FullscreenSharp = _interopRequireDefault(require("@material-ui/icons/FullscreenSharp"));

var _FullscreenExitSharp = _interopRequireDefault(require("@material-ui/icons/FullscreenExitSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

/**
 */
var WorkspaceFullScreenButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceFullScreenButton, _Component);

  function WorkspaceFullScreenButton() {
    (0, _classCallCheck2.default)(this, WorkspaceFullScreenButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceFullScreenButton).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceFullScreenButton, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          isFullscreenEnabled = _this$props.isFullscreenEnabled,
          setWorkspaceFullscreen = _this$props.setWorkspaceFullscreen,
          t = _this$props.t;
      return _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": isFullscreenEnabled ? t('exitFullScreen') : t('workspaceFullScreen'),
        className: classes.ctrlBtn,
        onClick: function onClick() {
          return setWorkspaceFullscreen(!isFullscreenEnabled);
        }
      }, isFullscreenEnabled ? _react.default.createElement(_FullscreenExitSharp.default, null) : _react.default.createElement(_FullscreenSharp.default, null));
    }
  }]);
  return WorkspaceFullScreenButton;
}(_react.Component);

exports.WorkspaceFullScreenButton = WorkspaceFullScreenButton;
WorkspaceFullScreenButton.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  isFullscreenEnabled: _propTypes.default.bool,
  setWorkspaceFullscreen: _propTypes.default.func.isRequired,
  t: _propTypes.default.func
};
WorkspaceFullScreenButton.defaultProps = {
  isFullscreenEnabled: false,
  t: function t(key) {
    return key;
  }
};