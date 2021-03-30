"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _extend = require("../extend");

var _selectors = require("../state/selectors");

var _CompanionWindowFactory = require("../components/CompanionWindowFactory");

/**
 * mapStateToProps - to hook up connect
 * @memberof CompanionWindow
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var id = _ref.id;
  var companionWindow = (0, _selectors.getCompanionWindow)(state, {
    companionWindowId: id
  });
  return (0, _objectSpread2.default)({}, companionWindow, {
    isDisplayed: companionWindow && companionWindow.content && companionWindow.content.length > 0
  });
};

var enhance = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps), (0, _extend.withPlugins)('CompanionWindowFactory'));

var _default = enhance(_CompanionWindowFactory.CompanionWindowFactory);

exports.default = _default;