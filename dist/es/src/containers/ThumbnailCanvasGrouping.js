"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _styles = require("@material-ui/core/styles");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _ThumbnailCanvasGrouping = require("../components/ThumbnailCanvasGrouping");

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ThumbnailCanvasGrouping
 * @private
 */
var mapDispatchToProps = {
  setCanvas: actions.setCanvas
};
/**
 * mapStateToProps - used to hook up state to props
 * @memberof ThumbnailCanvasGrouping
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var data = _ref.data;
  return {
    window: (0, _selectors.getWindow)(state, {
      windowId: data.windowId
    })
  };
};
/**
 * Styles for withStyles HOC
 */


var styles = function styles(theme) {
  return {
    canvas: {
      '&$currentCanvas': {
        border: "2px solid ".concat(theme.palette.secondary.main)
      },
      border: '2px solid transparent',
      boxSizing: 'border-box',
      color: theme.palette.common.white,
      cursor: 'pointer'
    },
    currentCanvas: {}
  };
};

var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('ThumbnailCanvasGrouping'));

var _default = enhance(_ThumbnailCanvasGrouping.ThumbnailCanvasGrouping);

exports.default = _default;