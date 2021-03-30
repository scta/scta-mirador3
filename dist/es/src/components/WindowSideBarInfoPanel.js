"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarInfoPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _SanitizedHtml = require("./SanitizedHtml");

var _LabelValueMetadata = require("./LabelValueMetadata");

var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));

var _LocalePicker = _interopRequireDefault(require("../containers/LocalePicker"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * WindowSideBarInfoPanel
 */
var WindowSideBarInfoPanel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowSideBarInfoPanel, _Component);

  function WindowSideBarInfoPanel() {
    (0, _classCallCheck2.default)(this, WindowSideBarInfoPanel);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowSideBarInfoPanel).apply(this, arguments));
  }

  (0, _createClass2.default)(WindowSideBarInfoPanel, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          canvasDescription = _this$props.canvasDescription,
          canvasLabel = _this$props.canvasLabel,
          canvasMetadata = _this$props.canvasMetadata,
          manifestDescription = _this$props.manifestDescription,
          manifestLabel = _this$props.manifestLabel,
          manifestMetadata = _this$props.manifestMetadata,
          manifestUrl = _this$props.manifestUrl,
          windowId = _this$props.windowId,
          id = _this$props.id,
          classes = _this$props.classes,
          t = _this$props.t,
          locale = _this$props.locale,
          setLocale = _this$props.setLocale,
          availableLocales = _this$props.availableLocales,
          showLocalePicker = _this$props.showLocalePicker;
      return _react.default.createElement(_CompanionWindow.default, {
        title: t('aboutThisItem'),
        paperClassName: (0, _cssNs.default)('window-sidebar-info-panel'),
        windowId: windowId,
        id: id,
        titleControls: showLocalePicker && _react.default.createElement(_LocalePicker.default, {
          locale: locale,
          setLocale: setLocale,
          availableLocales: availableLocales
        })
      }, _react.default.createElement("div", {
        className: classes.section
      }, canvasLabel && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
        variant: "overline",
        id: "".concat(id, "-currentItem")
      }, t('currentItem')), _react.default.createElement(_Typography.default, {
        "aria-labelledby": "".concat(id, "-currentItem"),
        variant: "h4"
      }, canvasLabel)), canvasDescription && _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, _react.default.createElement(_SanitizedHtml.SanitizedHtml, {
        htmlString: canvasDescription,
        ruleSet: "iiif"
      })), canvasMetadata.length > 0 && _react.default.createElement(_LabelValueMetadata.LabelValueMetadata, {
        labelValuePairs: canvasMetadata
      })), _react.default.createElement("div", {
        className: classes.section
      }, manifestLabel && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
        variant: "overline",
        id: "".concat(id, "-resource")
      }, t('resource')), _react.default.createElement(_Typography.default, {
        "aria-labelledby": "".concat(id, "-resource"),
        variant: "h4"
      }, manifestLabel)), manifestDescription && _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, _react.default.createElement(_SanitizedHtml.SanitizedHtml, {
        htmlString: manifestDescription,
        ruleSet: "iiif"
      })), manifestMetadata.length > 0 && _react.default.createElement(_LabelValueMetadata.LabelValueMetadata, {
        labelValuePairs: manifestMetadata
      })), _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement(_Typography.default, {
        variant: "overline",
        id: "".concat(id, "-related")
      }, t('related')), _react.default.createElement(_Typography.default, {
        "aria-labelledby": "".concat(id, "-related"),
        variant: "h4"
      }, t('links')), _react.default.createElement("dl", {
        className: (0, _cssNs.default)('label-value-metadata')
      }, manifestUrl && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Typography.default, {
        variant: "subtitle2",
        component: "dt"
      }, t('iiif_manifest')), _react.default.createElement(_Typography.default, {
        variant: "body1",
        component: "dd"
      }, _react.default.createElement("a", {
        target: "_blank",
        rel: "noopener noreferrer",
        href: manifestUrl
      }, manifestUrl))))));
    }
  }]);
  return WindowSideBarInfoPanel;
}(_react.Component);

exports.WindowSideBarInfoPanel = WindowSideBarInfoPanel;
WindowSideBarInfoPanel.propTypes = {
  availableLocales: _propTypes.default.arrayOf(_propTypes.default.string),
  canvasDescription: _propTypes.default.string,
  canvasLabel: _propTypes.default.string,
  canvasMetadata: _propTypes.default.array,
  // eslint-disable-line react/forbid-prop-types
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  id: _propTypes.default.string.isRequired,
  locale: _propTypes.default.string,
  manifestDescription: _propTypes.default.string,
  manifestLabel: _propTypes.default.string,
  manifestMetadata: _propTypes.default.array,
  // eslint-disable-line react/forbid-prop-types
  manifestUrl: _propTypes.default.string,
  setLocale: _propTypes.default.func,
  showLocalePicker: _propTypes.default.bool,
  t: _propTypes.default.func,
  windowId: _propTypes.default.string.isRequired
};
WindowSideBarInfoPanel.defaultProps = {
  availableLocales: [],
  canvasDescription: null,
  canvasLabel: null,
  canvasMetadata: [],
  classes: {},
  locale: '',
  manifestDescription: null,
  manifestLabel: null,
  manifestMetadata: [],
  manifestUrl: null,
  setLocale: undefined,
  showLocalePicker: false,
  t: function t(key) {
    return key;
  }
};