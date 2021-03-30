"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompanionArea = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Slide = _interopRequireDefault(require("@material-ui/core/Slide"));

var _ArrowLeftSharp = _interopRequireDefault(require("@material-ui/icons/ArrowLeftSharp"));

var _ArrowRightSharp = _interopRequireDefault(require("@material-ui/icons/ArrowRightSharp"));

var _CompanionWindowFactory = _interopRequireDefault(require("../containers/CompanionWindowFactory"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/** */
var CompanionArea =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CompanionArea, _Component);

  function CompanionArea() {
    (0, _classCallCheck2.default)(this, CompanionArea);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CompanionArea).apply(this, arguments));
  }

  (0, _createClass2.default)(CompanionArea, [{
    key: "areaLayoutClass",

    /** */
    value: function areaLayoutClass() {
      var _this$props = this.props,
          classes = _this$props.classes,
          position = _this$props.position;
      return position === 'bottom' || position === 'far-bottom' ? classes.horizontal : null;
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          companionWindows = _this$props2.companionWindows,
          companionAreaOpen = _this$props2.companionAreaOpen,
          setCompanionAreaOpen = _this$props2.setCompanionAreaOpen,
          position = _this$props2.position,
          sideBarOpen = _this$props2.sideBarOpen,
          t = _this$props2.t,
          windowId = _this$props2.windowId;
      return _react.default.createElement("div", {
        className: [classes.root, this.areaLayoutClass(), (0, _cssNs.default)("companion-area-".concat(position))].join(' ')
      }, setCompanionAreaOpen && position === 'left' && sideBarOpen && companionWindows.length > 0 && _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": companionAreaOpen ? t('collapseSidePanel') : t('expandSidePanel'),
        className: classes.toggle,
        onClick: function onClick() {
          setCompanionAreaOpen(windowId, !companionAreaOpen);
        },
        TooltipProps: {
          placement: 'right',
          style: {
            left: '100%',
            position: 'absolute'
          }
        }
      }, companionAreaOpen ? _react.default.createElement(_ArrowLeftSharp.default, null) : _react.default.createElement(_ArrowRightSharp.default, null)), _react.default.createElement(_Slide.default, {
        in: companionAreaOpen,
        direction: "right"
      }, _react.default.createElement("div", {
        className: [(0, _cssNs.default)('companion-windows'), this.areaLayoutClass()].join(' '),
        style: {
          display: companionAreaOpen ? 'flex' : 'none'
        }
      }, companionWindows.map(function (cw) {
        return _react.default.createElement(_CompanionWindowFactory.default, {
          id: cw.id,
          key: cw.id,
          windowId: windowId
        });
      }))));
    }
  }]);
  return CompanionArea;
}(_react.Component);

exports.CompanionArea = CompanionArea;
CompanionArea.propTypes = {
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  companionAreaOpen: _propTypes.default.bool.isRequired,
  companionWindows: _propTypes.default.array.isRequired,
  // eslint-disable-line react/forbid-prop-types
  position: _propTypes.default.string.isRequired,
  setCompanionAreaOpen: _propTypes.default.func,
  sideBarOpen: _propTypes.default.bool,
  t: _propTypes.default.func.isRequired,
  windowId: _propTypes.default.string.isRequired
};
CompanionArea.defaultProps = {
  classes: {},
  setCompanionAreaOpen: function setCompanionAreaOpen() {},
  sideBarOpen: false
};