"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbnailCanvasGrouping = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CaptionedCanvasThumbnail = _interopRequireDefault(require("../containers/CaptionedCanvasThumbnail"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/** */
var ThumbnailCanvasGrouping =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ThumbnailCanvasGrouping, _PureComponent);

  /** */
  function ThumbnailCanvasGrouping(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ThumbnailCanvasGrouping);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThumbnailCanvasGrouping).call(this, props));
    _this.setCanvas = _this.setCanvas.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** */


  (0, _createClass2.default)(ThumbnailCanvasGrouping, [{
    key: "setCanvas",
    value: function setCanvas(e) {
      var _this$props = this.props,
          setCanvas = _this$props.setCanvas,
          window = _this$props.window;
      setCanvas(window.id, parseInt(e.currentTarget.dataset.canvasIndex, 10));
    }
    /**
     * Determines whether the current index is the rendered canvas, providing
     * a useful class.
     */

  }, {
    key: "currentCanvasClass",
    value: function currentCanvasClass(canvasIndices) {
      var index = this.props.index;
      if (canvasIndices.includes(index)) return 'current-canvas-grouping';
      return '';
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          index = _this$props2.index,
          style = _this$props2.style,
          data = _this$props2.data,
          classes = _this$props2.classes,
          window = _this$props2.window;
      var canvasGroupings = data.canvasGroupings,
          position = data.position,
          height = data.height;
      var currentGroupings = canvasGroupings.groupings()[index];
      var SPACING = 8;
      return _react.default.createElement("div", {
        style: (0, _objectSpread2.default)({}, style, {
          boxSizing: 'content-box',
          height: Number.isInteger(style.height) ? style.height - SPACING : null,
          left: style.left + SPACING,
          top: style.top + SPACING,
          width: Number.isInteger(style.width) ? style.width - SPACING : null
        }),
        className: (0, _cssNs.default)('thumbnail-nav-container')
      }, _react.default.createElement("div", {
        role: "button",
        "data-canvas-index": currentGroupings[0].index,
        onKeyUp: this.setCanvas,
        onClick: this.setCanvas,
        tabIndex: -1,
        style: {
          display: 'inline-block',
          height: position === 'far-right' ? 'auto' : "".concat(height - SPACING, "px"),
          whiteSpace: 'nowrap',
          width: position === 'far-bottom' ? 'auto' : "".concat(style.width, "px")
        },
        className: (0, _classnames.default)((0, _cssNs.default)(['thumbnail-nav-canvas', "thumbnail-nav-canvas-".concat(index), this.currentCanvasClass(currentGroupings.map(function (canvas) {
          return canvas.index;
        }))]), classes.canvas, (0, _defineProperty2.default)({}, classes.currentCanvas, currentGroupings.map(function (canvas) {
          return canvas.index;
        }).includes(window.canvasIndex)))
      }, currentGroupings.map(function (canvas, i) {
        return _react.default.createElement(_CaptionedCanvasThumbnail.default, {
          key: canvas.id,
          canvas: canvas,
          height: position === 'far-right' ? style.height - 1.5 * SPACING : height - 1.5 * SPACING
        });
      })));
    }
  }]);
  return ThumbnailCanvasGrouping;
}(_react.PureComponent);

exports.ThumbnailCanvasGrouping = ThumbnailCanvasGrouping;
ThumbnailCanvasGrouping.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  data: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  index: _propTypes.default.number.isRequired,
  setCanvas: _propTypes.default.func.isRequired,
  style: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  window: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};