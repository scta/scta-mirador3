"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * CanvasWorld
 */
var CanvasWorld =
/*#__PURE__*/
function () {
  /**
   * @param {Array} canvases - Array of Manifesto:Canvas objects to create a
   * world from.
   */
  function CanvasWorld(canvases) {
    (0, _classCallCheck2.default)(this, CanvasWorld);
    this.canvases = canvases;
  }
  /**
   * canvasToWorldCoordinates - calculates the canvas coordinates respective to
   * the world.
   */


  (0, _createClass2.default)(CanvasWorld, [{
    key: "canvasToWorldCoordinates",
    value: function canvasToWorldCoordinates(i) {
      var wholeBounds = this.worldBounds();
      var canvas = this.canvases[i];
      var aspectRatio = canvas.getWidth() / canvas.getHeight();
      var scaledWidth = Math.floor(wholeBounds[3] * aspectRatio);
      var x = 0;

      if (i === 1) {
        x = wholeBounds[2] - scaledWidth;
      }

      return [x, 0, scaledWidth, wholeBounds[3]];
    }
    /** */

  }, {
    key: "indexOfTarget",
    value: function indexOfTarget(canvasTarget) {
      return this.canvases.map(function (canvas) {
        return canvas.id;
      }).indexOf(canvasTarget);
    }
    /**
     * offsetByCanvas - calculates the offset for a given canvas target. Currently
     * assumes a horrizontal only layout.
     */

  }, {
    key: "offsetByCanvas",
    value: function offsetByCanvas(canvasTarget) {
      var offset = {
        x: 0,
        y: 0
      };
      var i;

      for (i = 0; i < this.indexOfTarget(canvasTarget); i += 1) {
        offset.x += this.canvases[i].getWidth();
      }

      return offset;
    }
    /**
     * worldBounds - calculates the "World" bounds. World in this case is canvases
     * lined up horizontally starting from left to right.
     */

  }, {
    key: "worldBounds",
    value: function worldBounds() {
      var heights = [];
      var dimensions = [];
      this.canvases.forEach(function (canvas) {
        heights.push(canvas.getHeight());
        dimensions.push({
          height: canvas.getHeight(),
          width: canvas.getWidth()
        });
      });
      var minHeight = Math.min.apply(Math, heights);
      var scaledWidth = 0;
      dimensions.forEach(function (dim) {
        var aspectRatio = dim.width / dim.height;
        scaledWidth += Math.floor(minHeight * aspectRatio);
      });
      return [0, 0, scaledWidth, minHeight];
    }
  }]);
  return CanvasWorld;
}();

exports.default = CanvasWorld;