"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbnailNavigation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactVirtualizedAutoSizer = _interopRequireDefault(require("react-virtualized-auto-sizer"));

var _reactWindow = require("react-window");

var _classnames = _interopRequireDefault(require("classnames"));

var _CanvasWorld = _interopRequireDefault(require("../lib/CanvasWorld"));

var _ThumbnailCanvasGrouping = _interopRequireDefault(require("../containers/ThumbnailCanvasGrouping"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 */
var ThumbnailNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ThumbnailNavigation, _Component);

  /**
   */
  function ThumbnailNavigation(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ThumbnailNavigation);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ThumbnailNavigation).call(this, props));
    _this.scrollbarSize = 15;
    _this.spacing = 8; // 2 * (2px margin + 2px border + 2px padding + 2px padding)

    _this.calculateScaledSize = _this.calculateScaledSize.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.itemCount = _this.itemCount.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleKeyUp = _this.handleKeyUp.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.nextCanvas = _this.nextCanvas.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.previousCanvas = _this.previousCanvas.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.gridRef = _react.default.createRef();
    return _this;
  }
  /**
   * If the view has changed and the thumbnailNavigation is open, recompute all
   * of the grids
   */


  (0, _createClass2.default)(ThumbnailNavigation, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          position = _this$props.position,
          window = _this$props.window;

      if (prevProps.window.view !== window.view && position !== 'off') {
        this.gridRef.current.resetAfterIndex(0);
      }

      if (prevProps.window.canvasIndex !== window.canvasIndex) {
        var index = window.canvasIndex;
        if (window.view === 'book') index = Math.ceil(index / 2);
        this.gridRef.current.scrollToItem(index, 'center');
      }
    }
    /**
     * When on right, row height
     * When on bottom, column width
     */

  }, {
    key: "calculateScaledSize",
    value: function calculateScaledSize(index) {
      var _this$props2 = this.props,
          config = _this$props2.config,
          canvasGroupings = _this$props2.canvasGroupings,
          position = _this$props2.position;
      var canvases = canvasGroupings.groupings()[index];
      var world = new _CanvasWorld.default(canvases);
      var bounds = world.worldBounds();

      switch (position) {
        case 'far-right':
          {
            var calc = Math.floor(this.calculatingWidth(canvases.length) * bounds[3] / bounds[2]);
            return calc + this.spacing;
          }
        // Default case bottom

        default:
          {
            var _calc = Math.ceil((config.thumbnailNavigation.height - this.scrollbarSize - this.spacing - 4) * bounds[2] / bounds[3]);

            return _calc;
          }
      }
    }
    /** */

  }, {
    key: "calculatingWidth",
    value: function calculatingWidth(canvasesLength) {
      var config = this.props.config;

      if (canvasesLength === 1) {
        return config.thumbnailNavigation.width;
      }

      return config.thumbnailNavigation.width * 2;
    }
    /** */

  }, {
    key: "rightWidth",
    value: function rightWidth() {
      var _this$props3 = this.props,
          window = _this$props3.window,
          config = _this$props3.config;

      switch (window.view) {
        case 'book':
          return config.thumbnailNavigation.width * 2;

        default:
          return config.thumbnailNavigation.width;
      }
    }
    /** */

  }, {
    key: "style",
    value: function style() {
      var _this$props4 = this.props,
          position = _this$props4.position,
          config = _this$props4.config;

      switch (position) {
        case 'far-right':
          return {
            height: '100%',
            minHeight: 0,
            width: "".concat(this.rightWidth() + this.scrollbarSize + this.spacing, "px")
          };
        // Default case bottom

        default:
          return {
            height: "".concat(config.thumbnailNavigation.height, "px"),
            width: '100%'
          };
      }
    }
    /** */

  }, {
    key: "areaHeight",
    value: function areaHeight(height) {
      var _this$props5 = this.props,
          config = _this$props5.config,
          position = _this$props5.position;

      switch (position) {
        case 'far-right':
          return height;
        // Default case bottom

        default:
          return config.thumbnailNavigation.height;
      }
    }
    /** */

  }, {
    key: "itemCount",
    value: function itemCount() {
      var canvasGroupings = this.props.canvasGroupings;
      return canvasGroupings.groupings().length;
    }
    /** */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var position = this.props.position;
      var nextKey = 'ArrowRight';
      var previousKey = 'ArrowLeft';

      if (position === 'far-right') {
        nextKey = 'ArrowDown';
        previousKey = 'ArrowUp';
      }

      switch (e.key) {
        case nextKey:
          this.nextCanvas();
          break;

        case previousKey:
          this.previousCanvas();
          break;

        default:
          break;
      }
    }
    /**
     */

  }, {
    key: "nextCanvas",
    value: function nextCanvas() {
      var _this$props6 = this.props,
          window = _this$props6.window,
          setCanvas = _this$props6.setCanvas;

      if (this.hasNextCanvas()) {
        setCanvas(window.id, window.canvasIndex + this.canvasIncrementor());
      }
    }
    /**
     */

  }, {
    key: "hasNextCanvas",
    value: function hasNextCanvas() {
      var _this$props7 = this.props,
          window = _this$props7.window,
          canvasGroupings = _this$props7.canvasGroupings;
      return window.canvasIndex < canvasGroupings.canvases.length - this.canvasIncrementor();
    }
    /**
     */

  }, {
    key: "previousCanvas",
    value: function previousCanvas() {
      var _this$props8 = this.props,
          window = _this$props8.window,
          setCanvas = _this$props8.setCanvas;

      if (this.hasPreviousCanvas()) {
        setCanvas(window.id, Math.max(0, window.canvasIndex - this.canvasIncrementor()));
      }
    }
    /**
     */

  }, {
    key: "hasPreviousCanvas",
    value: function hasPreviousCanvas() {
      var window = this.props.window;
      return window.canvasIndex > 0;
    }
    /**
     */

  }, {
    key: "canvasIncrementor",
    value: function canvasIncrementor() {
      var window = this.props.window;

      switch (window.view) {
        case 'book':
          return 2;

        default:
          return 1;
      }
    }
    /**
     * Renders things
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props9 = this.props,
          t = _this$props9.t,
          canvasGroupings = _this$props9.canvasGroupings,
          classes = _this$props9.classes,
          config = _this$props9.config,
          position = _this$props9.position,
          window = _this$props9.window;

      if (position === 'off') {
        return _react.default.createElement(_react.default.Fragment, null);
      }

      return _react.default.createElement("div", {
        className: (0, _classnames.default)((0, _cssNs.default)('thumb-navigation'), classes.thumbNavigation),
        "aria-label": t('thumbnailNavigation'),
        style: this.style(),
        tabIndex: 0,
        onKeyUp: this.handleKeyUp,
        role: "grid"
      }, _react.default.createElement(_reactVirtualizedAutoSizer.default, {
        defaultHeight: 100,
        defaultWidth: 400
      }, function (_ref) {
        var height = _ref.height,
            width = _ref.width;
        return _react.default.createElement(_reactWindow.VariableSizeList, {
          height: _this2.areaHeight(height),
          itemCount: _this2.itemCount(),
          itemSize: _this2.calculateScaledSize,
          width: width,
          layout: position === 'far-bottom' ? 'horizontal' : 'vertical',
          itemData: {
            canvasGroupings: canvasGroupings,
            config: config,
            height: config.thumbnailNavigation.height - _this2.spacing - _this2.scrollbarSize,
            position: position,
            windowId: window.id
          },
          ref: _this2.gridRef
        }, _ThumbnailCanvasGrouping.default);
      }));
    }
  }]);
  return ThumbnailNavigation;
}(_react.Component);

exports.ThumbnailNavigation = ThumbnailNavigation;
ThumbnailNavigation.propTypes = {
  canvasGroupings: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  config: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  position: _propTypes.default.string.isRequired,
  setCanvas: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired,
  window: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};