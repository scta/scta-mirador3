"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionWindowFactory = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThumbnailNavigation = _interopRequireDefault(require("../containers/ThumbnailNavigation"));

var _WindowSideBarAnnotationsPanel = _interopRequireDefault(require("../containers/WindowSideBarAnnotationsPanel"));

var _WindowSideBarInfoPanel = _interopRequireDefault(require("../containers/WindowSideBarInfoPanel"));

var _WindowSideBarCanvasPanel = _interopRequireDefault(require("../containers/WindowSideBarCanvasPanel"));

/**
 * Render a companion window using the appropriate component for the content
 */
var CompanionWindowFactory =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CompanionWindowFactory, _Component);

  function CompanionWindowFactory() {
    (0, _classCallCheck2.default)(this, CompanionWindowFactory);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CompanionWindowFactory).apply(this, arguments));
  }

  (0, _createClass2.default)(CompanionWindowFactory, [{
    key: "render",

    /** */
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          windowId = _this$props.windowId,
          id = _this$props.id;

      switch (content) {
        case 'info':
          return _react.default.createElement(_WindowSideBarInfoPanel.default, {
            id: id,
            windowId: windowId
          });

        case 'canvas':
          return _react.default.createElement(_WindowSideBarCanvasPanel.default, {
            id: id,
            windowId: windowId
          });

        case 'annotations':
          return _react.default.createElement(_WindowSideBarAnnotationsPanel.default, {
            id: id,
            windowId: windowId
          });

        case 'thumbnailNavigation':
          return _react.default.createElement(_ThumbnailNavigation.default, {
            id: id,
            windowId: windowId
          });

        default:
          return _react.default.createElement(_react.default.Fragment, null);
      }
    }
  }]);
  return CompanionWindowFactory;
}(_react.Component);

exports.CompanionWindowFactory = CompanionWindowFactory;
CompanionWindowFactory.propTypes = {
  content: _propTypes.default.string,
  id: _propTypes.default.string.isRequired,
  windowId: _propTypes.default.string.isRequired
};
CompanionWindowFactory.defaultProps = {
  content: null
};