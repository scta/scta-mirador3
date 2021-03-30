"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _compact = _interopRequireDefault(require("lodash/compact"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _v = _interopRequireDefault(require("uuid/v4"));

/** */
var AnnotationResource =
/*#__PURE__*/
function () {
  /** */
  function AnnotationResource() {
    var resource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, AnnotationResource);
    this.resource = resource;
  }
  /** */


  (0, _createClass2.default)(AnnotationResource, [{
    key: "id",
    get: function get() {
      this._id = this._id || this.resource['@id'] || (0, _v.default)(); // eslint-disable-line no-underscore-dangle

      return this._id; // eslint-disable-line no-underscore-dangle
    }
    /** */

  }, {
    key: "targetId",
    get: function get() {
      var on = this.resource.on;

      switch ((0, _typeof2.default)(on)) {
        case 'string':
          return on.replace(/#?xywh=(.*)$/, '');

        case 'object':
          return on.full.replace(/#?xywh=(.*)$/, '');

        default:
          return null;
      }
    }
    /**
     * @return {[Array]}
     */

  }, {
    key: "motivations",
    get: function get() {
      return (0, _flatten.default)((0, _compact.default)(new Array(this.resource.motivation)));
    }
    /** */

  }, {
    key: "resources",
    get: function get() {
      return (0, _flatten.default)((0, _compact.default)(new Array(this.resource.resource)));
    }
    /** */

  }, {
    key: "chars",
    get: function get() {
      return this.resources.map(function (r) {
        return r.chars;
      }).join(' ');
    }
    /** */

  }, {
    key: "fragmentSelector",
    get: function get() {
      var on = this.resource.on;

      switch ((0, _typeof2.default)(on)) {
        case 'string':
          return on.match(/xywh=(.*)$/)[1].split(',').map(function (str) {
            return parseInt(str, 10);
          });

        case 'object':
          return on.selector.value.match(/xywh=(.*)$/)[1].split(',').map(function (str) {
            return parseInt(str, 10);
          });

        default:
          return null;
      }
    }
  }]);
  return AnnotationResource;
}();

exports.default = AnnotationResource;