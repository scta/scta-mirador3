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

var _WindowViewSettings = require("../components/WindowViewSettings");

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
var mapDispatchToProps = {
  setWindowViewType: actions.setWindowViewType
};
/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */

var mapStateToProps = function mapStateToProps(state, _ref) {
  var windowId = _ref.windowId;
  return {
    windowViewType: (0, _selectors.getWindowViewType)(state, {
      windowId: windowId
    })
  };
};
/** */


var styles = function styles(theme) {
  return {
    MenuItem: {
      display: 'inline'
    },
    selectedLabel: {
      color: theme.palette.secondary.main
    }
  };
};

var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactI18next.withTranslation)(), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('WindowViewSettings'));

var _default = enhance(_WindowViewSettings.WindowViewSettings);

exports.default = _default;