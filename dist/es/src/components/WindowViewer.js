"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowViewer = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _OpenSeadragonViewer = _interopRequireDefault(require("../containers/OpenSeadragonViewer"));

var _WindowCanvasNavigationControls = _interopRequireDefault(require("../containers/WindowCanvasNavigationControls"));

var _ManifestoCanvas = _interopRequireDefault(require("../lib/ManifestoCanvas"));

var _WindowAuthenticationControl = _interopRequireDefault(require("../containers/WindowAuthenticationControl"));

/**
 * Represents a WindowViewer in the mirador workspace. Responsible for mounting
 * OSD and Navigation
 */
var WindowViewer =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowViewer, _Component);

  function WindowViewer() {
    (0, _classCallCheck2.default)(this, WindowViewer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowViewer).apply(this, arguments));
  }

  (0, _createClass2.default)(WindowViewer, [{
    key: "componentDidMount",

    /**
     * componentDidMount - React lifecycle method
     * Request the initial canvas on mount
     */
    value: function componentDidMount() {
      var _this$props = this.props,
          currentCanvases = _this$props.currentCanvases,
          fetchInfoResponse = _this$props.fetchInfoResponse,
          fetchAnnotation = _this$props.fetchAnnotation;

      if (!this.infoResponseIsInStore()) {
        currentCanvases.forEach(function (canvas) {
          var manifestoCanvas = new _ManifestoCanvas.default(canvas);
          var imageResource = manifestoCanvas.imageResource;

          if (imageResource) {
            fetchInfoResponse({
              imageResource: imageResource
            });
          }

          manifestoCanvas.annotationListUris.forEach(function (uri) {
            fetchAnnotation(manifestoCanvas.canvas.id, uri);
          });
        });
      }
    }
    /**
     * componentDidUpdate - React lifecycle method
     * Request a new canvas if it is needed
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          currentCanvases = _this$props2.currentCanvases,
          window = _this$props2.window,
          fetchInfoResponse = _this$props2.fetchInfoResponse,
          fetchAnnotation = _this$props2.fetchAnnotation;

      if (prevProps.window.view !== window.view || prevProps.window.canvasIndex !== window.canvasIndex && !this.infoResponseIsInStore()) {
        currentCanvases.forEach(function (canvas) {
          var manifestoCanvas = new _ManifestoCanvas.default(canvas);
          var imageResource = manifestoCanvas.imageResource;

          if (imageResource) {
            fetchInfoResponse({
              imageResource: imageResource
            });
          }

          manifestoCanvas.annotationListUris.forEach(function (uri) {
            fetchAnnotation(manifestoCanvas.canvas.id, uri);
          });
        });
      }
    }
    /**
     * infoResponseIsInStore - checks whether or not an info response is already
     * in the store. No need to request it again.
     * @return [Boolean]
     */

  }, {
    key: "infoResponseIsInStore",
    value: function infoResponseIsInStore() {
      var currentCanvases = this.props.currentCanvases;
      var responses = this.currentInfoResponses();

      if (responses.length === currentCanvases.length) {
        return true;
      }

      return false;
    }
    /**
     * currentInfoResponses - Selects infoResponses that are relevent to existing
     * canvases to be displayed.
     */

  }, {
    key: "currentInfoResponses",
    value: function currentInfoResponses() {
      var _this$props3 = this.props,
          currentCanvases = _this$props3.currentCanvases,
          infoResponses = _this$props3.infoResponses;
      return currentCanvases.map(function (canvas) {
        return infoResponses[new _ManifestoCanvas.default(canvas).imageId];
      }).filter(function (infoResponse) {
        return infoResponse !== undefined && infoResponse.isFetching === false && infoResponse.error === undefined;
      });
    }
    /**
     * Return an image information response from the store for the correct image
     */

  }, {
    key: "tileInfoFetchedFromStore",
    value: function tileInfoFetchedFromStore() {
      var currentCanvases = this.props.currentCanvases;
      var responses = this.currentInfoResponses().map(function (infoResponse) {
        return infoResponse.json;
      }); // Only return actual tileSources when all current canvases have completed.

      if (responses.length === currentCanvases.length) {
        return responses;
      }

      return [];
    }
    /**
     * Renders things
     */

  }, {
    key: "render",
    value: function render() {
      var window = this.props.window;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_OpenSeadragonViewer.default, {
        tileSources: this.tileInfoFetchedFromStore(),
        windowId: window.id
      }, _react.default.createElement(_WindowCanvasNavigationControls.default, {
        key: "canvas_nav",
        windowId: window.id
      })), _react.default.createElement(_WindowAuthenticationControl.default, {
        key: "auth",
        windowId: window.id
      }));
    }
  }]);
  return WindowViewer;
}(_react.Component);

exports.WindowViewer = WindowViewer;
WindowViewer.propTypes = {
  currentCanvases: _propTypes.default.array.isRequired,
  // eslint-disable-line react/forbid-prop-types
  fetchAnnotation: _propTypes.default.func.isRequired,
  fetchInfoResponse: _propTypes.default.func.isRequired,
  infoResponses: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  window: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};