"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OpenSeadragonViewer = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _openseadragon = _interopRequireDefault(require("openseadragon"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

var _OpenSeadragonCanvasOverlay = _interopRequireDefault(require("../lib/OpenSeadragonCanvasOverlay"));

var _CanvasWorld = _interopRequireDefault(require("../lib/CanvasWorld"));

/**
 * Represents a OpenSeadragonViewer in the mirador workspace. Responsible for mounting
 * and rendering OSD.
 */
var OpenSeadragonViewer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(OpenSeadragonViewer, _Component);
  (0, _createClass2.default)(OpenSeadragonViewer, null, [{
    key: "annotationsMatch",

    /**
     * annotationsMatch - compares previous annotations to current to determine
     * whether to add a new updateCanvas method to draw annotations
     * @param  {Array} currentAnnotations
     * @param  {Array} prevAnnotations
     * @return {Boolean}
     */
    value: function annotationsMatch(currentAnnotations, prevAnnotations) {
      return currentAnnotations.some(function (annotation, index) {
        if (!prevAnnotations[index]) {
          return false;
        }

        var newIds = annotation.resources.map(function (r) {
          return r.id;
        });
        var prevIds = prevAnnotations[index].resources.map(function (r) {
          return r.id;
        }); // The newIds === prevIds is always returning false right now (because javascript)
        // Using something like lodash's isEqual causes behavior
        // that was unexpeected when switching annotations and should to be investigated further

        if (annotation.id === prevAnnotations[index].id && newIds === prevIds) {
          return true;
        }

        return false;
      });
    }
    /**
     * @param {Object} props
     */

  }]);

  function OpenSeadragonViewer(props) {
    var _this;

    (0, _classCallCheck2.default)(this, OpenSeadragonViewer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(OpenSeadragonViewer).call(this, props));
    _this.viewer = null;
    _this.osdCanvasOverlay = null; // An initial value for the updateCanvas method

    _this.updateCanvas = function () {};

    _this.ref = _react.default.createRef();
    _this.onUpdateViewport = _this.onUpdateViewport.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.onViewportChange = _this.onViewportChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.zoomToWorld = _this.zoomToWorld.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * React lifecycle event
   */


  (0, _createClass2.default)(OpenSeadragonViewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          tileSources = _this$props.tileSources,
          viewer = _this$props.viewer;

      if (!this.ref.current) {
        return;
      }

      this.viewer = new _openseadragon.default({
        alwaysBlend: false,
        blendTime: 0.1,
        id: this.ref.current.id,
        preserveImageSizeOnResize: true,
        preserveViewport: true,
        showNavigationControl: false
      });
      this.osdCanvasOverlay = new _OpenSeadragonCanvasOverlay.default(this.viewer);
      this.viewer.addHandler('update-viewport', this.onUpdateViewport);
      this.viewer.addHandler('viewport-change', this.onViewportChange);

      if (viewer) {
        this.viewer.viewport.panTo(viewer, false);
        this.viewer.viewport.zoomTo(viewer.zoom, viewer, false);
      }

      tileSources.forEach(function (tileSource, i) {
        return _this2.addTileSource(tileSource, i);
      });
    }
    /**
     * When the tileSources change, make sure to close the OSD viewer.
     * When the annotations change, reset the updateCanvas method to make sure
     * they are added.
     * When the viewport state changes, pan or zoom the OSD viewer as appropriate
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this3 = this;

      var _this$props2 = this.props,
          tileSources = _this$props2.tileSources,
          viewer = _this$props2.viewer,
          highlightedAnnotations = _this$props2.highlightedAnnotations,
          selectedAnnotations = _this$props2.selectedAnnotations;
      var highlightsUpdated = !OpenSeadragonViewer.annotationsMatch(highlightedAnnotations, prevProps.highlightedAnnotations);
      var selectionsUpdated = !OpenSeadragonViewer.annotationsMatch(selectedAnnotations, prevProps.selectedAnnotations);

      if (highlightsUpdated || selectionsUpdated) {
        this.updateCanvas = function () {
          _this3.osdCanvasOverlay.clear();

          _this3.osdCanvasOverlay.resize();

          _this3.osdCanvasOverlay.canvasUpdate(function () {
            if (highlightsUpdated) {
              _this3.annotationsToContext(highlightedAnnotations, '#00BFFF');
            }

            if (selectionsUpdated) {
              _this3.annotationsToContext(selectedAnnotations, 'yellow');
            }
          });
        };

        this.viewer.forceRedraw();
      }

      if (!this.tileSourcesMatch(prevProps.tileSources)) {
        this.viewer.close();
        Promise.all(tileSources.map(function (tileSource, i) {
          return _this3.addTileSource(tileSource, i);
        })).then(function () {
          if (tileSources[0]) {
            _this3.zoomToWorld();
          }
        });
      } else if (viewer) {
        var viewport = this.viewer.viewport;

        if (viewer.x !== viewport.centerSpringX.target.value || viewer.y !== viewport.centerSpringY.target.value) {
          this.viewer.viewport.panTo(viewer, false);
        }

        if (viewer.zoom !== viewport.zoomSpring.target.value) {
          this.viewer.viewport.zoomTo(viewer.zoom, viewer, false);
        }
      }
    }
    /**
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.viewer.removeAllHandlers();
    }
    /**
     * onUpdateViewport - fires during OpenSeadragon render method.
     */

  }, {
    key: "onUpdateViewport",
    value: function onUpdateViewport(event) {
      this.updateCanvas();
    }
    /**
     * Forward OSD state to redux
     */

  }, {
    key: "onViewportChange",
    value: function onViewportChange(event) {
      var _this$props3 = this.props,
          updateViewport = _this$props3.updateViewport,
          windowId = _this$props3.windowId;
      var viewport = event.eventSource.viewport;
      updateViewport(windowId, {
        x: Math.round(viewport.centerSpringX.target.value),
        y: Math.round(viewport.centerSpringY.target.value),
        zoom: viewport.zoomSpring.target.value
      });
    }
    /**
     * annotationsToContext - converts anontations to a canvas context
     */

  }, {
    key: "annotationsToContext",
    value: function annotationsToContext(annotations) {
      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yellow';
      var canvasWorld = this.props.canvasWorld;
      var context = this.osdCanvasOverlay.context2d;
      annotations.forEach(function (annotation) {
        annotation.resources.forEach(function (resource) {
          var offset = canvasWorld.offsetByCanvas(resource.targetId);
          var fragment = resource.fragmentSelector;
          fragment[0] += offset.x;
          context.strokeStyle = color;
          context.lineWidth = 10;
          context.strokeRect.apply(context, (0, _toConsumableArray2.default)(fragment));
        });
      });
    }
    /**
     */

  }, {
    key: "addTileSource",
    value: function addTileSource(tileSource) {
      var _this4 = this;

      var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var canvasWorld = this.props.canvasWorld;
      return new Promise(function (resolve, reject) {
        if (!_this4.viewer) {
          return;
        }

        _this4.viewer.addTiledImage({
          error: function error(event) {
            return reject(event);
          },
          fitBounds: (0, _construct2.default)(_openseadragon.default.Rect, (0, _toConsumableArray2.default)(canvasWorld.canvasToWorldCoordinates(i))),
          success: function success(event) {
            return resolve(event);
          },
          tileSource: tileSource
        });
      });
    }
    /**
     */

  }, {
    key: "fitBounds",
    value: function fitBounds(x, y, w, h) {
      var immediately = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      this.viewer.viewport.fitBounds(new _openseadragon.default.Rect(x, y, w, h), immediately);
    }
    /**
     * tileSourcesMatch - compares previous tileSources to current to determine
     * whether a refresh of the OSD viewer is needed.
     * @param  {Array} prevTileSources
     * @return {Boolean}
     */

  }, {
    key: "tileSourcesMatch",
    value: function tileSourcesMatch(prevTileSources) {
      var tileSources = this.props.tileSources;
      return tileSources.some(function (tileSource, index) {
        if (!prevTileSources[index]) {
          return false;
        }

        if (tileSource['@id'] === prevTileSources[index]['@id']) {
          return true;
        }

        return false;
      });
    }
    /**
     * zoomToWorld - zooms the viewer to the extent of the canvas world
     */

  }, {
    key: "zoomToWorld",
    value: function zoomToWorld() {
      var immediately = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var canvasWorld = this.props.canvasWorld;
      this.fitBounds.apply(this, (0, _toConsumableArray2.default)(canvasWorld.worldBounds()).concat([immediately]));
    }
    /**
     * Renders things
     */

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props4 = this.props,
          windowId = _this$props4.windowId,
          children = _this$props4.children,
          classes = _this$props4.classes,
          label = _this$props4.label,
          t = _this$props4.t;

      var enhancedChildren = _react.default.Children.map(children, function (child) {
        return _react.default.cloneElement(child, {
          zoomToWorld: _this5.zoomToWorld
        });
      });

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
        className: (0, _cssNs.default)('osd-container'),
        id: "".concat(windowId, "-osd"),
        ref: this.ref,
        "aria-label": t('item', {
          label: label
        })
      }, _react.default.createElement(_Paper.default, {
        square: true,
        className: classes.controls,
        elevation: 0
      }, enhancedChildren)));
    }
  }]);
  return OpenSeadragonViewer;
}(_react.Component);

exports.OpenSeadragonViewer = OpenSeadragonViewer;
OpenSeadragonViewer.defaultProps = {
  children: null,
  classes: {},
  highlightedAnnotations: [],
  label: null,
  selectedAnnotations: [],
  tileSources: [],
  viewer: null
};
OpenSeadragonViewer.propTypes = {
  canvasWorld: _propTypes.default.instanceOf(_CanvasWorld.default).isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node]),
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  highlightedAnnotations: _propTypes.default.arrayOf(_propTypes.default.object),
  label: _propTypes.default.string,
  selectedAnnotations: _propTypes.default.arrayOf(_propTypes.default.object),
  t: _propTypes.default.func.isRequired,
  tileSources: _propTypes.default.arrayOf(_propTypes.default.object),
  updateViewport: _propTypes.default.func.isRequired,
  viewer: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  windowId: _propTypes.default.string.isRequired
};