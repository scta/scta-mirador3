"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZoomControls = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _AddCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/AddCircleOutlineSharp"));

var _RemoveCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/RemoveCircleOutlineSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _RestoreZoomIcon = _interopRequireDefault(require("./icons/RestoreZoomIcon"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

/**
 */
var ZoomControls =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ZoomControls, _Component);

  /**
   * constructor -
   */
  function ZoomControls(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ZoomControls);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ZoomControls).call(this, props));
    _this.handleZoomInClick = _this.handleZoomInClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleZoomOutClick = _this.handleZoomOutClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(ZoomControls, [{
    key: "handleZoomInClick",
    value: function handleZoomInClick() {
      var _this$props = this.props,
          windowId = _this$props.windowId,
          updateViewport = _this$props.updateViewport,
          viewer = _this$props.viewer;
      updateViewport(windowId, {
        x: viewer.x,
        y: viewer.y,
        zoom: viewer.zoom * 2
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleZoomOutClick",
    value: function handleZoomOutClick() {
      var _this$props2 = this.props,
          windowId = _this$props2.windowId,
          updateViewport = _this$props2.updateViewport,
          viewer = _this$props2.viewer;
      updateViewport(windowId, {
        x: viewer.x,
        y: viewer.y,
        zoom: viewer.zoom / 2
      });
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          showZoomControls = _this$props3.showZoomControls,
          classes = _this$props3.classes,
          t = _this$props3.t,
          zoomToWorld = _this$props3.zoomToWorld;

      if (!showZoomControls) {
        return _react.default.createElement(_react.default.Fragment, null);
      }

      return _react.default.createElement("div", {
        className: classes.zoom_controls
      }, _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('zoomIn'),
        onClick: this.handleZoomInClick
      }, _react.default.createElement(_AddCircleOutlineSharp.default, null)), _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('zoomOut'),
        onClick: this.handleZoomOutClick
      }, _react.default.createElement(_RemoveCircleOutlineSharp.default, null)), _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('zoomReset'),
        onClick: function onClick() {
          return zoomToWorld(false);
        }
      }, _react.default.createElement(_RestoreZoomIcon.default, null)));
    }
  }]);
  return ZoomControls;
}(_react.Component);

exports.ZoomControls = ZoomControls;
ZoomControls.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  showZoomControls: _propTypes.default.bool,
  t: _propTypes.default.func,
  updateViewport: _propTypes.default.func,
  viewer: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number,
    zoom: _propTypes.default.number
  }),
  windowId: _propTypes.default.string,
  zoomToWorld: _propTypes.default.func.isRequired
};
ZoomControls.defaultProps = {
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  updateViewport: function updateViewport() {},
  viewer: {},
  windowId: ''
};