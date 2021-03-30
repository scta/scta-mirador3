"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _reactRedux = require("react-redux");

var _redux = require("redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _ManifestForm = require("../components/ManifestForm");

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestForm
 * @private
 */
var mapDispatchToProps = {
  fetchManifest: actions.fetchManifest
};
/**
 *
 * @param theme
 */

var styles = function styles(theme) {
  return {
    buttons: (0, _defineProperty2.default)({
      textAlign: 'right'
    }, theme.breakpoints.up('sm'), {
      textAlign: 'inherit'
    }),
    input: (0, _objectSpread2.default)({}, theme.typography.body1)
  };
};

var enhance = (0, _redux.compose)((0, _core.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(null, mapDispatchToProps), (0, _extend.withPlugins)('ManifestForm'));

var _default = enhance(_ManifestForm.ManifestForm);

exports.default = _default;