"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CanvasThumbnail = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("intersection-observer");

var _reactIntersectionObserver = _interopRequireDefault(require("@researchgate/react-intersection-observer"));

// polyfill needed for Safari

/**
 * Uses InteractionObserver to "lazy" load canvas thumbnails that are in view.
 */
var CanvasThumbnail =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CanvasThumbnail, _Component);

  /**
   */
  function CanvasThumbnail(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CanvasThumbnail);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CanvasThumbnail).call(this, props));
    _this.state = {
      image: null,
      loaded: false
    };
    _this.handleIntersection = _this.handleIntersection.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * Handles the intersection (visibility) of a given thumbnail, by requesting
   * the image and then updating the state.
   */


  (0, _createClass2.default)(CanvasThumbnail, [{
    key: "handleIntersection",
    value: function handleIntersection(event) {
      var imageUrl = this.props.imageUrl;
      var loaded = this.state.loaded;
      if (loaded || !event.isIntersecting || !imageUrl) return;
      var image = new Image();
      image.src = imageUrl;
      this.setState({
        image: image,
        loaded: true
      });
    }
    /**
     * Return a the image URL if it is loaded and valid, otherwise return a placeholder
    */

  }, {
    key: "imageSrc",
    value: function imageSrc() {
      var isValid = this.props.isValid;
      var _this$state = this.state,
          loaded = _this$state.loaded,
          image = _this$state.image;

      if (loaded && isValid && image && image.src) {
        return image.src;
      }

      return CanvasThumbnail.defaultImgPlaceholder;
    }
    /** */

  }, {
    key: "imageConstraints",
    value: function imageConstraints() {
      var _this$props = this.props,
          maxHeight = _this$props.maxHeight,
          maxWidth = _this$props.maxWidth,
          aspectRatio = _this$props.aspectRatio;
      if (maxHeight && maxWidth && aspectRatio) return 'sizeByConfinedWh';
      if (maxHeight && maxWidth) return 'sizeByDistortedWh';
      if (maxHeight && !maxWidth) return 'sizeByH';
      if (!maxHeight && maxWidth) return 'sizeByW';
      return undefined;
    }
    /**
     *
    */

  }, {
    key: "imageStyles",
    value: function imageStyles() {
      var _this$props2 = this.props,
          maxHeight = _this$props2.maxHeight,
          maxWidth = _this$props2.maxWidth,
          aspectRatio = _this$props2.aspectRatio,
          style = _this$props2.style;
      var height;
      var width;

      switch (this.imageConstraints()) {
        case 'sizeByConfinedWh':
          // size to width
          if (maxWidth / maxHeight < aspectRatio) {
            height = maxWidth / aspectRatio;
            width = maxWidth;
          } else {
            height = maxHeight;
            width = maxHeight * aspectRatio;
          }

          break;

        case 'sizeByDistortedWh':
          height = maxHeight;
          width = maxWidth;
          break;

        case 'sizeByH':
          height = maxHeight;
          width = 'auto';
          break;

        case 'sizeByW':
          height = 'auto';
          width = maxWidth;
          break;

        default:
          height = 'auto';
          width = 'auto';
      }

      return (0, _objectSpread2.default)({
        height: height,
        width: width
      }, style);
    }
    /**
     */

  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactIntersectionObserver.default, {
        onChange: this.handleIntersection
      }, _react.default.createElement("img", {
        alt: "",
        role: "presentation",
        src: this.imageSrc(),
        style: this.imageStyles()
      })));
    }
  }]);
  return CanvasThumbnail;
}(_react.Component); // Transparent "gray"


exports.CanvasThumbnail = CanvasThumbnail;
CanvasThumbnail.defaultImgPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMMDQmtBwADgwF/Op8FmAAAAABJRU5ErkJggg==';
CanvasThumbnail.propTypes = {
  aspectRatio: _propTypes.default.number,
  imageUrl: _propTypes.default.string,
  isValid: _propTypes.default.bool,
  maxHeight: _propTypes.default.number,
  maxWidth: _propTypes.default.number,
  style: _propTypes.default.object // eslint-disable-line react/forbid-prop-types,

};
CanvasThumbnail.defaultProps = {
  aspectRatio: null,
  imageUrl: null,
  isValid: true,
  maxHeight: null,
  maxWidth: null,
  style: {}
};