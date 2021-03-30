"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _redux = require("redux");

var _reactI18next = require("react-i18next");

var _styles = require("@material-ui/core/styles");

var _extend = require("../extend");

var _WorkspaceControlPanel = require("../components/WorkspaceControlPanel");

/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)},
 * drawer: {overflowX: string, height: string}}}
 */
var styles = function styles(theme) {
  return {
    ctrlBtn: {
      margin: theme.spacing.unit
    },
    drawer: {
      overflowX: 'hidden'
    },
    root: (0, _defineProperty2.default)({}, theme.breakpoints.up('sm'), {
      height: '100%',
      left: 0,
      right: 'auto',
      width: 64
    }),
    toolbar: (0, _defineProperty2.default)({}, theme.breakpoints.up('sm'), {
      display: 'block'
    })
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _styles.withStyles)(styles), (0, _extend.withPlugins)('WorkspaceControlPanel') // further HOC go here
);

var _default = enhance(_WorkspaceControlPanel.WorkspaceControlPanel);

exports.default = _default;