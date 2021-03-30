"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.set = set;
exports.update = update;
exports.unset = unset;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _set2 = _interopRequireDefault(require("lodash/fp/set"));

var _update2 = _interopRequireDefault(require("lodash/fp/update"));

var _unset2 = _interopRequireDefault(require("lodash/fp/unset"));

/**
* Sets the value at path of object.
* If a portion of `path` doesn't exist, it's created.
*
* @param {Object} object
* @param {String|String[]} path
* @param {any} value
* @return {Object}
*/
function set(object, path, value) {
  return (0, _set2.default)(path, value, object);
}
/**
* Updates the value at path of object.
* If a portion of `path` doesn't exist, it's created.
* If `value` is a function it should have this signature: (currentValue) => newValue.
* If `value` is an object it is assumed that the current value is also an object
* and the new value will crated by: { ...currentValue, ...value }.
*
* @param {Object} object
* @param {String|String[]} path
* @param {Object|Function} value
* @return {Object}
*/


function update(object, path, value) {
  return typeof value === 'function' ? (0, _update2.default)(path, value, object) : (0, _update2.default)(path, function (current) {
    return (0, _objectSpread2.default)({}, current, value);
  }, object);
}
/**
* Removes the property at path of object.
*
* @param {Object} object
* @param {String|String[]} path
* @param {Object}
*/


function unset(object, path) {
  return (0, _unset2.default)(path, object);
}