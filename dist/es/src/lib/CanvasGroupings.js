"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 *
 */
var CanvasGroupings =
/*#__PURE__*/
function () {
  /**
   */
  function CanvasGroupings(canvases) {
    var viewType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'single';
    (0, _classCallCheck2.default)(this, CanvasGroupings);
    this.canvases = canvases;
    this.viewType = viewType;
    this._groupings = null; // eslint-disable-line no-underscore-dangle
  }
  /**
   */


  (0, _createClass2.default)(CanvasGroupings, [{
    key: "getCanvases",
    value: function getCanvases(index) {
      switch (this.viewType) {
        case 'book':
          return this.groupings()[Math.ceil(index / 2)];

        default:
          return this.groupings()[index];
      }
    }
    /**
     * Groups a set of canvases based on the view type. Single, is just an array
     * of canvases, while book view creates pairs.
     */

  }, {
    key: "groupings",
    value: function groupings() {
      if (this._groupings) {
        // eslint-disable-line no-underscore-dangle
        return this._groupings; // eslint-disable-line no-underscore-dangle
      }

      if (this.viewType !== 'book') {
        return this.canvases.map(function (canvas) {
          return [canvas];
        });
      }

      var groupings = [];
      this.canvases.forEach(function (canvas, i) {
        if (i === 0) {
          groupings.push([canvas]);
          return;
        } // Odd page


        if (i % 2 !== 0) {
          groupings.push([canvas]);
        } else {
          // Even page
          groupings[Math.ceil(i / 2)].push(canvas);
        }
      });
      this._groupings = groupings; // eslint-disable-line no-underscore-dangle

      return groupings;
    }
  }]);
  return CanvasGroupings;
}();

exports.default = CanvasGroupings;