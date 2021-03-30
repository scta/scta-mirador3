"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GalleryView = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ManifestoCanvas = _interopRequireDefault(require("../lib/ManifestoCanvas"));

var _CanvasThumbnail = require("./CanvasThumbnail");

/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */
var GalleryView =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(GalleryView, _Component);

  function GalleryView() {
    (0, _classCallCheck2.default)(this, GalleryView);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GalleryView).apply(this, arguments));
  }

  (0, _createClass2.default)(GalleryView, [{
    key: "render",

    /**
     * Renders things
     */
    value: function render() {
      var _this$props = this.props,
          canvases = _this$props.canvases,
          classes = _this$props.classes,
          setCanvas = _this$props.setCanvas,
          window = _this$props.window;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
        className: classes.galleryContainer,
        id: "".concat(window.id, "-gallery")
      }, canvases.map(function (canvas) {
        var manifestoCanvas = new _ManifestoCanvas.default(canvas);
        return _react.default.createElement("div", {
          key: canvas.index,
          className: (0, _classnames.default)(classes.galleryViewItem, canvas.index === window.canvasIndex ? classes.galleryViewItemCurrent : ''),
          onClick: function onClick() {
            return setCanvas(window.id, canvas.index);
          },
          onKeyUp: function onKeyUp() {
            return setCanvas(window.id, canvas.index);
          },
          role: "button",
          tabIndex: 0
        }, _react.default.createElement(_CanvasThumbnail.CanvasThumbnail, {
          imageUrl: manifestoCanvas.thumbnail(null, 100),
          isValid: manifestoCanvas.hasValidDimensions,
          maxHeight: 120,
          aspectRatio: manifestoCanvas.aspectRatio,
          style: {
            margin: '0 auto'
          }
        }), _react.default.createElement(_Typography.default, {
          variant: "caption",
          className: classes.galleryViewCaption
        }, manifestoCanvas.getLabel()));
      })));
    }
  }]);
  return GalleryView;
}(_react.Component);

exports.GalleryView = GalleryView;
GalleryView.propTypes = {
  canvases: _propTypes.default.array.isRequired,
  // eslint-disable-line react/forbid-prop-types
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  setCanvas: _propTypes.default.func.isRequired,
  window: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};