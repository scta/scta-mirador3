"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaptionedCanvasThumbnail = void 0;

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

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/** */
var CaptionedCanvasThumbnail =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CaptionedCanvasThumbnail, _Component);

  function CaptionedCanvasThumbnail() {
    (0, _classCallCheck2.default)(this, CaptionedCanvasThumbnail);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CaptionedCanvasThumbnail).apply(this, arguments));
  }

  (0, _createClass2.default)(CaptionedCanvasThumbnail, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          canvas = _this$props.canvas,
          classes = _this$props.classes,
          height = _this$props.height;
      var manifestoCanvas = new _ManifestoCanvas.default(canvas);
      return _react.default.createElement("div", {
        key: canvas.id,
        className: classes.container
      }, _react.default.createElement(_CanvasThumbnail.CanvasThumbnail, {
        imageUrl: manifestoCanvas.thumbnail(null, 200) // TODO: When we make these areas resizable, we should probably not hard code this
        ,
        isValid: manifestoCanvas.hasValidDimensions,
        maxHeight: height,
        style: {
          maxWidth: "".concat(Math.ceil(height * manifestoCanvas.aspectRatio), "px")
        }
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)((0, _cssNs.default)('canvas-thumb-label'), classes.canvasThumbLabel)
      }, _react.default.createElement("div", {
        style: {
          margin: '4px'
        }
      }, _react.default.createElement(_Typography.default, {
        classes: {
          root: classes.title
        },
        variant: "caption"
      }, manifestoCanvas.getLabel()))));
    }
  }]);
  return CaptionedCanvasThumbnail;
}(_react.Component);

exports.CaptionedCanvasThumbnail = CaptionedCanvasThumbnail;
CaptionedCanvasThumbnail.propTypes = {
  canvas: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  height: _propTypes.default.number.isRequired
};