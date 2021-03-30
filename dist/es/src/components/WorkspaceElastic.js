"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRnd = require("react-rnd");

var _reactResizeObserver = _interopRequireDefault(require("react-resize-observer"));

var _Window = _interopRequireDefault(require("../containers/Window"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * Represents a work area that contains any number of windows
 * @memberof Workspace
 * @private
 */
var WorkspaceElastic =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(WorkspaceElastic, _React$Component);

  function WorkspaceElastic() {
    (0, _classCallCheck2.default)(this, WorkspaceElastic);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceElastic).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceElastic, [{
    key: "render",

    /**
     */
    value: function render() {
      var _this$props = this.props,
          workspace = _this$props.workspace,
          windows = _this$props.windows,
          setWorkspaceViewportDimensions = _this$props.setWorkspaceViewportDimensions,
          setWorkspaceViewportPosition = _this$props.setWorkspaceViewportPosition,
          updateWindowPosition = _this$props.updateWindowPosition,
          setWindowSize = _this$props.setWindowSize;
      var viewportPosition = workspace.viewportPosition;
      var offsetX = workspace.width / 2;
      var offsetY = workspace.height / 2;
      return _react.default.createElement("div", {
        style: {
          height: '100%',
          position: 'relative',
          width: '100%'
        }
      }, _react.default.createElement(_reactResizeObserver.default, {
        onResize: function onResize(rect) {
          setWorkspaceViewportDimensions(rect);
        }
      }), _react.default.createElement(_reactRnd.Rnd, {
        default: {
          height: workspace.height,
          width: workspace.width
        },
        position: {
          x: -1 * viewportPosition.x - offsetX,
          y: -1 * viewportPosition.y - offsetY
        },
        enableResizing: {
          bottom: false,
          bottomLeft: false,
          bottomRight: false,
          left: false,
          right: false,
          top: false,
          topLeft: false,
          topRight: false
        },
        onDragStop: function onDragStop(e, d) {
          setWorkspaceViewportPosition({
            x: -1 * d.x - offsetX,
            y: -1 * d.y - offsetY
          });
        },
        cancel: ".".concat((0, _cssNs.default)('window')),
        className: (0, _cssNs.default)('workspace')
      }, Object.values(windows).map(function (window) {
        return _react.default.createElement(_reactRnd.Rnd, {
          key: "".concat(window.id, "-").concat(workspace.id),
          size: {
            height: window.height,
            width: window.width
          },
          position: {
            x: window.x + offsetX,
            y: window.y + offsetY
          },
          bounds: "parent",
          onDragStop: function onDragStop(e, d) {
            updateWindowPosition(window.id, {
              x: d.x - offsetX,
              y: d.y - offsetY
            });
          },
          onResize: function onResize(e, direction, ref, delta, position) {
            setWindowSize(window.id, {
              height: ref.style.height,
              width: ref.style.width,
              x: position.x - offsetX,
              y: position.y - offsetY
            });
          },
          dragHandleClassName: (0, _cssNs.default)('window-top-bar'),
          className: workspace.focusedWindowId === window.id ? (0, _cssNs.default)('workspace-focused-window') : null
        }, _react.default.createElement(_Window.default, {
          window: window
        }));
      })));
    }
  }]);
  return WorkspaceElastic;
}(_react.default.Component);

WorkspaceElastic.propTypes = {
  setWindowSize: _propTypes.default.func.isRequired,
  setWorkspaceViewportDimensions: _propTypes.default.func.isRequired,
  setWorkspaceViewportPosition: _propTypes.default.func.isRequired,
  updateWindowPosition: _propTypes.default.func.isRequired,
  windows: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  workspace: _propTypes.default.object.isRequired // eslint-disable-line react/forbid-prop-types

};
var _default = WorkspaceElastic;
exports.default = _default;