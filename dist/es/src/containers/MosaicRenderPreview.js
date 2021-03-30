"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var _reactI18next = require("react-i18next");

var _extend = require("../extend");

var _selectors = require("../state/selectors");

var _MosaicRenderPreview = require("../components/MosaicRenderPreview");

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    title: (0, _selectors.getManifestTitle)(state, {
      windowId: windowId
    })
  };
};
/**
 *
 * @param theme
 * @returns {{ctrlBtn: {margin: (number|string)}}}
 */


var styles = function styles(theme) {
  return {
    preview: (0, _objectSpread2.default)({}, theme.typography.h4)
  };
};

var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, null), (0, _extend.withPlugins)('MosaicRenderPreview'));

var _default = enhance(_MosaicRenderPreview.MosaicRenderPreview);

exports.default = _default;