"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryWindow = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _WindowSideBar = _interopRequireDefault(require("../containers/WindowSideBar"));

var _WindowViewer = _interopRequireDefault(require("../containers/WindowViewer"));

var _GalleryView = _interopRequireDefault(require("../containers/GalleryView"));

var _CompanionArea = _interopRequireDefault(require("../containers/CompanionArea"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * WindowMiddleContent - component that renders the "middle" area of the
 * Mirador Window
 */
var PrimaryWindow =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(PrimaryWindow, _Component);

  function PrimaryWindow() {
    (0, _classCallCheck2.default)(this, PrimaryWindow);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PrimaryWindow).apply(this, arguments));
  }

  (0, _createClass2.default)(PrimaryWindow, [{
    key: "renderViewer",

    /**
     * renderViewer
     *
     * @return {(String|null)}
     */
    value: function renderViewer() {
      var _this$props = this.props,
          manifest = _this$props.manifest,
          window = _this$props.window;

      if (manifest && manifest.isFetching === false) {
        if (window.view === 'gallery') {
          return _react.default.createElement(_GalleryView.default, {
            window: window,
            manifest: manifest
          });
        }

        return _react.default.createElement(_WindowViewer.default, {
          window: window
        });
      }

      return null;
    }
    /**
     * Render the component
     */

  }, {
    key: "render",
    value: function render() {
      var window = this.props.window;
      return _react.default.createElement("div", {
        className: (0, _cssNs.default)('primary-window')
      }, _react.default.createElement(_WindowSideBar.default, {
        windowId: window.id
      }), _react.default.createElement(_CompanionArea.default, {
        windowId: window.id,
        position: "left"
      }), this.renderViewer());
    }
  }]);
  return PrimaryWindow;
}(_react.Component);

exports.PrimaryWindow = PrimaryWindow;
PrimaryWindow.propTypes = {
  manifest: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  window: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};
PrimaryWindow.defaultProps = {
  manifest: null
};