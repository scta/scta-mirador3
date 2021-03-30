"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _AnnotationResource = _interopRequireDefault(require("./AnnotationResource"));

/** */
var Annotation =
/*#__PURE__*/
function () {
  /** */
  function Annotation(json, target) {
    (0, _classCallCheck2.default)(this, Annotation);
    this.json = json;
    this.target = target;
  }
  /** */


  (0, _createClass2.default)(Annotation, [{
    key: "present",

    /** */
    value: function present() {
      return this.resources && this.resources.length > 0;
    }
    /** */

  }, {
    key: "id",
    get: function get() {
      return this.json['@id'];
    }
  }, {
    key: "resources",
    get: function get() {
      if (!this.json || !this.json.resources) return [];
      return (0, _flatten.default)([this.json.resources]).map(function (resource) {
        return new _AnnotationResource.default(resource);
      });
    }
  }]);
  return Annotation;
}();

exports.default = Annotation;