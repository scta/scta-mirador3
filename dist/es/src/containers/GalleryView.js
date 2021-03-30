"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _styles = require("@material-ui/core/styles");

var actions = _interopRequireWildcard(require("../state/actions"));

var _extend = require("../extend");

var _GalleryView = require("../components/GalleryView");

var _selectors = require("../state/selectors");

/**
 * mapStateToProps - to hook up connect
 * @memberof WindowViewer
 * @private
 */
var mapStateToProps = function mapStateToProps(state, _ref) {
  var window = _ref.window;
  return {
    canvases: (0, _selectors.getManifestCanvases)(state, {
      windowId: window.id
    })
  };
};
/**
 * Styles to be passed to the withStyles HOC
 */


var styles = function styles(theme) {
  return {
    galleryContainer: {
      alignItems: 'flex-start',
      flexDirection: 'row',
      flexWrap: 'wrap',
      overflowX: 'hidden',
      overflowY: 'scroll',
      padding: '50px 0 50px 20px',
      width: '100%'
    },
    galleryViewCaption: {
      boxOrient: 'vertical',
      display: '-webkit-box',
      height: '3em',
      lineClamp: '2',
      lineHeight: '1.5em',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordBreak: 'break-word'
    },
    galleryViewItem: {
      '&:focus': {
        outline: 'none'
      },
      '&:hover': {
        border: "2px solid ".concat(theme.palette.secondary.main)
      },
      border: '2px solid transparent',
      cursor: 'pointer',
      display: 'inline-block',
      height: '165px',
      margin: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit / 2, "px"),
      minWidth: '60px',
      overflow: 'hidden',
      padding: theme.spacing.unit / 2,
      width: 'min-content'
    },
    galleryViewItemCurrent: {
      border: "2px solid ".concat(theme.palette.secondary.main)
    }
  };
};
/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof WindowViewer
 * @private
 */


var mapDispatchToProps = {
  setCanvas: actions.setCanvas
};
var enhance = (0, _redux.compose)((0, _styles.withStyles)(styles), (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('GalleryView') // further HOC go here
);

var _default = enhance(_GalleryView.GalleryView);

exports.default = _default;