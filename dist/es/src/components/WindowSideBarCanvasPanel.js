"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarCanvasPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _CanvasThumbnail = require("./CanvasThumbnail");

var _ManifestoCanvas = _interopRequireDefault(require("../lib/ManifestoCanvas"));

var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));

/**
 * a panel showing the canvases for a given manifest
 */
var WindowSideBarCanvasPanel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowSideBarCanvasPanel, _Component);

  /** */
  function WindowSideBarCanvasPanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WindowSideBarCanvasPanel);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowSideBarCanvasPanel).call(this, props));
    _this.handleVariantChange = _this.handleVariantChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** @private */


  (0, _createClass2.default)(WindowSideBarCanvasPanel, [{
    key: "getIdAndLabelOfCanvases",
    value: function getIdAndLabelOfCanvases() {
      var canvases = this.props.canvases;
      return canvases.map(function (canvas, index) {
        return {
          id: canvas.id,
          label: new _ManifestoCanvas.default(canvas).getLabel()
        };
      });
    }
    /** @private */

  }, {
    key: "handleVariantChange",
    value: function handleVariantChange(event) {
      var updateVariant = this.props.updateVariant;
      updateVariant(event.target.value);
    }
    /** */

  }, {
    key: "renderCompact",
    value: function renderCompact(canvas, otherCanvas) {
      var classes = this.props.classes;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
        className: (0, _classnames.default)(classes.label),
        variant: "body1"
      }, canvas.label));
    }
    /** */

  }, {
    key: "renderThumbnail",
    value: function renderThumbnail(canvas, otherCanvas) {
      var _this$props = this.props,
          classes = _this$props.classes,
          config = _this$props.config;
      var _config$canvasNavigat = config.canvasNavigation,
          width = _config$canvasNavigat.width,
          height = _config$canvasNavigat.height;
      var manifestoCanvas = new _ManifestoCanvas.default(otherCanvas);
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        style: {
          minWidth: 50
        }
      }, _react.default.createElement(_CanvasThumbnail.CanvasThumbnail, {
        className: (0, _classnames.default)(classes.clickable),
        isValid: manifestoCanvas.hasValidDimensions,
        imageUrl: manifestoCanvas.thumbnail(width, height),
        maxHeight: config.canvasNavigation.height,
        maxWidth: config.canvasNavigation.width,
        aspectRatio: manifestoCanvas.aspectRatio
      })), _react.default.createElement(_Typography.default, {
        className: (0, _classnames.default)(classes.label),
        variant: "body1"
      }, canvas.label));
    }
    /**
     * render
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          canvases = _this$props2.canvases,
          setCanvas = _this$props2.setCanvas,
          classes = _this$props2.classes,
          t = _this$props2.t,
          variant = _this$props2.variant,
          windowId = _this$props2.windowId,
          id = _this$props2.id;
      var canvasesIdAndLabel = this.getIdAndLabelOfCanvases(canvases);
      return _react.default.createElement(_CompanionWindow.default, {
        title: t('canvasIndex'),
        id: id,
        windowId: windowId,
        titleControls: _react.default.createElement(_FormControl.default, null, _react.default.createElement(_Select.default, {
          MenuProps: {
            anchorOrigin: {
              horizontal: 'left',
              vertical: 'bottom'
            },
            getContentAnchorEl: null
          },
          displayEmpty: true,
          value: variant,
          onChange: this.handleVariantChange,
          name: "variant",
          classes: {
            select: classes.select
          },
          className: classes.selectEmpty
        }, _react.default.createElement(_MenuItem.default, {
          value: "compact"
        }, _react.default.createElement(_Typography.default, {
          variant: "body2"
        }, t('compactList'))), _react.default.createElement(_MenuItem.default, {
          value: "thumbnail"
        }, _react.default.createElement(_Typography.default, {
          variant: "body2"
        }, t('thumbnailList')))))
      }, _react.default.createElement(_List.default, null, canvasesIdAndLabel.map(function (canvas, canvasIndex) {
        var onClick = function onClick() {
          setCanvas(windowId, canvasIndex);
        }; // eslint-disable-line require-jsdoc, max-len


        return _react.default.createElement(_ListItem.default, {
          key: canvas.id,
          className: classes.listItem,
          alignItems: "flex-start",
          onClick: onClick,
          button: true,
          component: "li"
        }, variant === 'compact' && _this2.renderCompact(canvas, canvases[canvasIndex]), variant === 'thumbnail' && _this2.renderThumbnail(canvas, canvases[canvasIndex]));
      })));
    }
  }]);
  return WindowSideBarCanvasPanel;
}(_react.Component);

exports.WindowSideBarCanvasPanel = WindowSideBarCanvasPanel;
WindowSideBarCanvasPanel.propTypes = {
  canvases: _propTypes.default.array.isRequired,
  // eslint-disable-line react/forbid-prop-types
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  config: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  id: _propTypes.default.string.isRequired,
  setCanvas: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired,
  updateVariant: _propTypes.default.func.isRequired,
  variant: _propTypes.default.oneOf(['compact', 'thumbnail']),
  windowId: _propTypes.default.string.isRequired
};
WindowSideBarCanvasPanel.defaultProps = {
  variant: 'thumbnail'
};