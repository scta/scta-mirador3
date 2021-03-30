"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewerNavigation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _PlayCircleOutlineSharp = _interopRequireDefault(require("@material-ui/icons/PlayCircleOutlineSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 */
var ViewerNavigation =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ViewerNavigation, _Component);

  /**
   */
  function ViewerNavigation(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ViewerNavigation);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ViewerNavigation).call(this, props));
    _this.nextCanvas = _this.nextCanvas.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.previousCanvas = _this.previousCanvas.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   */


  (0, _createClass2.default)(ViewerNavigation, [{
    key: "nextCanvas",
    value: function nextCanvas() {
      var _this$props = this.props,
          window = _this$props.window,
          setCanvas = _this$props.setCanvas;

      if (this.hasNextCanvas()) {
        setCanvas(window.id, window.canvasIndex + this.canvasIncrementor());
      }
    }
    /**
     */

  }, {
    key: "hasNextCanvas",
    value: function hasNextCanvas() {
      var _this$props2 = this.props,
          window = _this$props2.window,
          canvases = _this$props2.canvases;
      return window.canvasIndex < canvases.length - this.canvasIncrementor();
    }
    /**
     */

  }, {
    key: "previousCanvas",
    value: function previousCanvas() {
      var _this$props3 = this.props,
          window = _this$props3.window,
          setCanvas = _this$props3.setCanvas;

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
      var t = this.props.t;
      return _react.default.createElement("div", {
        className: (0, _cssNs.default)('osd-navigation')
      }, _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('previousCanvas'),
        className: (0, _cssNs.default)('previous-canvas-button'),
        disabled: !this.hasPreviousCanvas(),
        onClick: this.previousCanvas
      }, _react.default.createElement(_PlayCircleOutlineSharp.default, {
        style: {
          transform: 'rotate(180deg)'
        }
      })), _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('nextCanvas'),
        className: (0, _cssNs.default)('next-canvas-button'),
        disabled: !this.hasNextCanvas(),
        onClick: this.nextCanvas
      }, _react.default.createElement(_PlayCircleOutlineSharp.default, null)));
    }
  }]);
  return ViewerNavigation;
}(_react.Component);

exports.ViewerNavigation = ViewerNavigation;
ViewerNavigation.propTypes = {
  canvases: _propTypes.default.array.isRequired,
  // eslint-disable-line react/forbid-prop-types
  setCanvas: _propTypes.default.func.isRequired,
  t: _propTypes.default.func.isRequired,
  window: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};