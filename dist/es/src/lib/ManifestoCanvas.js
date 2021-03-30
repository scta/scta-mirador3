"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

/**
 * ManifestoCanvas - adds additional, testable logic around Manifesto's Canvas
 * https://iiif-commons.github.io/manifesto/classes/_canvas_.manifesto.canvas.html
 */
var ManifestoCanvas =
/*#__PURE__*/
function () {
  /**
   * @param {ManifestoCanvas} canvas
   */
  function ManifestoCanvas(canvas) {
    (0, _classCallCheck2.default)(this, ManifestoCanvas);
    this.canvas = canvas;
  }
  /**
   */


  (0, _createClass2.default)(ManifestoCanvas, [{
    key: "getLabel",

    /**
     * Get the canvas label
     */
    value: function getLabel() {
      return this.canvas.getLabel().length > 0 ? this.canvas.getLabel().map(function (label) {
        return label.value;
      })[0] : String(this.canvas.index + 1);
    }
    /**
     * Creates a canonical image request for a thumb
     * @param {Number} height
     */

  }, {
    key: "thumbnail",
    value: function thumbnail() {
      var maxWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var maxHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var width;
      var height;

      if (!this.imageInformationUri) {
        return undefined;
      }

      switch (this.thumbnailConstraints(maxWidth, maxHeight)) {
        case 'sizeByH':
          height = maxHeight;
          break;

        case 'sizeByW':
          width = maxWidth;
          break;

        default:
          height = '150';
      } // note that, although the IIIF server may support sizeByConfinedWh (e.g. !w,h)
      // this is a IIIF level 2 feature, so we're instead providing w, or h,-style requests
      // which are only level 1.


      return this.canonicalImageUri.replace(/\/full\/.*\/0\//, "/full/".concat(width || '', ",").concat(height || '', "/0/"));
    }
    /** @private */

  }, {
    key: "thumbnailConstraints",
    value: function thumbnailConstraints(maxWidth, maxHeight) {
      if (!maxHeight && !maxWidth) return undefined;
      if (maxHeight && !maxWidth) return 'sizeByH';
      if (!maxHeight && maxWidth) return 'sizeByW';
      var aspectRatio = this.aspectRatio;
      var desiredAspectRatio = maxWidth / maxHeight;
      return desiredAspectRatio < aspectRatio ? 'sizeByW' : 'sizeByH';
    }
  }, {
    key: "canonicalImageUri",
    get: function get() {
      return this.canvas.getCanonicalImageUri();
    }
    /**
     */

  }, {
    key: "aspectRatio",
    get: function get() {
      return this.canvas.getWidth() / this.canvas.getHeight();
    }
    /** */

  }, {
    key: "annotationListUris",
    get: function get() {
      return (0, _flatten.default)(new Array(this.canvas.__jsonld.otherContent) // eslint-disable-line no-underscore-dangle
      ).filter(function (otherContent) {
        return otherContent && otherContent['@type'] === 'sc:AnnotationList';
      }).map(function (otherContent) {
        return otherContent['@id'];
      });
    }
    /** */

  }, {
    key: "imageResource",
    get: function get() {
      if (!(this.canvas.getImages()[0] && this.canvas.getImages()[0].getResource() && this.canvas.getImages()[0].getResource().getServices()[0] && this.canvas.getImages()[0].getResource().getServices()[0].id)) {
        return undefined;
      }

      return this.canvas.getImages()[0].getResource();
    }
    /**
     */

  }, {
    key: "imageId",
    get: function get() {
      if (!this.imageResource) {
        return undefined;
      }

      return this.imageResource.getServices()[0].id;
    }
    /**
     */

  }, {
    key: "imageInformationUri",
    get: function get() {
      if (!this.imageId) {
        return undefined;
      }

      return "".concat(this.imageId.replace(/\/$/, ''), "/info.json");
    }
    /**
     * checks whether the canvas has a valid height
     */

  }, {
    key: "hasValidHeight",
    get: function get() {
      return typeof this.canvas.getHeight() === 'number' && this.canvas.getHeight() > 0;
    }
    /**
     * checks whether the canvas has a valid height
     */

  }, {
    key: "hasValidWidth",
    get: function get() {
      return typeof this.canvas.getHeight() === 'number' && this.canvas.getHeight() > 0;
    }
    /**
     * checks whether the canvas has valid dimensions
     */

  }, {
    key: "hasValidDimensions",
    get: function get() {
      return this.hasValidHeight && this.hasValidWidth;
    }
  }]);
  return ManifestoCanvas;
}();

exports.default = ManifestoCanvas;