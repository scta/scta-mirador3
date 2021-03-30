"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var _ErrorDialog = require("../components/ErrorDialog");

var actions = _interopRequireWildcard(require("../state/actions"));

/**
 * mapStateToProps - to hook up connect
 * @memberof ErrorDialog
 * @private
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    errors: state.errors
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */


var mapDispatchToProps = {
  removeError: actions.removeError
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('ErrorDialog'));

var _default = enhance(_ErrorDialog.ErrorDialog);

exports.default = _default;