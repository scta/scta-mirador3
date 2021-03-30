"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactI18next = require("react-i18next");

var _core = require("@material-ui/core");

var _extend = require("../extend");

var _selectors = require("../state/selectors");

var actions = _interopRequireWildcard(require("../state/actions"));

var _ManifestListItem = require("../components/ManifestListItem");

/** */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var manifestId = _ref.manifestId;
  return {
    error: (0, _selectors.getManifest)(state, {
      manifestId: manifestId
    }).error,
    isFetching: (0, _selectors.getManifest)(state, {
      manifestId: manifestId
    }).isFetching,
    manifestLogo: (0, _selectors.getManifestLogo)(state, {
      manifestId: manifestId
    }),
    provider: (0, _selectors.getManifest)(state, {
      manifestId: manifestId
    }).provider || (0, _selectors.getManifestProvider)(state, {
      manifestId: manifestId
    }),
    ready: !!(0, _selectors.getManifest)(state, {
      manifestId: manifestId
    }).json,
    size: (0, _selectors.getManifestCanvases)(state, {
      manifestId: manifestId
    }).length,
    thumbnail: (0, _selectors.getManifestThumbnail)(state, {
      manifestId: manifestId
    }),
    title: (0, _selectors.getManifestTitle)(state, {
      manifestId: manifestId
    })
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */


var mapDispatchToProps = {
  addWindow: actions.addWindow,
  fetchManifest: actions.fetchManifest
};
/**
 *
 * @param theme
 * @returns {{root: {}, label: {textAlign: string, textTransform: string}}}
 */

var styles = function styles(theme) {
  return {
    label: {
      textAlign: 'left',
      textTransform: 'initial'
    },
    logo: {
      height: '2.5rem',
      paddingRight: 8
    },
    placeholder: {
      backgroundColor: theme.palette.grey[300]
    },
    root: (0, _objectSpread2.default)({}, theme.mixins.gutters())
  };
};

var enhance = (0, _redux.compose)((0, _reactI18next.withTranslation)(), (0, _core.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('ManifestListItem'));

var _default = enhance(_ManifestListItem.ManifestListItem);

exports.default = _default;