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

var _WorkspaceImport = require("../components/WorkspaceImport");

var actions = _interopRequireWildcard(require("../state/actions"));

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof App
 * @private
 */
var mapDispatchToProps = {
  addError: actions.addError,
  importConfig: actions.importMiradorState
};
var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(null, mapDispatchToProps), (0, _extend.withPlugins)('WorkspaceImport'));

var _default = enhance(_WorkspaceImport.WorkspaceImport);

exports.default = _default;