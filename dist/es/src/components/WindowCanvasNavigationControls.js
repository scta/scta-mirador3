"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowCanvasNavigationControls = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ZoomControls = _interopRequireDefault(require("../containers/ZoomControls"));

var _ViewerInfo = _interopRequireDefault(require("../containers/ViewerInfo"));

var _ViewerNavigation = _interopRequireDefault(require("../containers/ViewerNavigation"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * Represents the viewer controls in the mirador workspace.
 */
var WindowCanvasNavigationControls =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowCanvasNavigationControls, _Component);

  function WindowCanvasNavigationControls() {
    (0, _classCallCheck2.default)(this, WindowCanvasNavigationControls);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowCanvasNavigationControls).apply(this, arguments));
  }

  (0, _createClass2.default)(WindowCanvasNavigationControls, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          visible = _this$props.visible,
          window = _this$props.window,
          zoomToWorld = _this$props.zoomToWorld;
      if (!visible) return _react.default.createElement(_react.default.Fragment, null);
      return _react.default.createElement("div", {
        className: (0, _cssNs.default)('canvas-nav')
      }, _react.default.createElement(_ZoomControls.default, {
        windowId: window.id,
        zoomToWorld: zoomToWorld
      }), _react.default.createElement(_ViewerNavigation.default, {
        window: window
      }), _react.default.createElement(_ViewerInfo.default, {
        windowId: window.id
      }));
    }
  }]);
  return WindowCanvasNavigationControls;
}(_react.Component);

exports.WindowCanvasNavigationControls = WindowCanvasNavigationControls;
WindowCanvasNavigationControls.propTypes = {
  visible: _propTypes.default.bool,
  window: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  zoomToWorld: _propTypes.default.func.isRequired
};
WindowCanvasNavigationControls.defaultProps = {
  visible: true
};