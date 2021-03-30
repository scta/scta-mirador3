"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarAnnotationsPanel = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _SanitizedHtml = require("./SanitizedHtml");

var _AnnotationSettings = _interopRequireDefault(require("../containers/AnnotationSettings"));

var _CompanionWindow = _interopRequireDefault(require("../containers/CompanionWindow"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 * WindowSideBarAnnotationsPanel ~
*/
var WindowSideBarAnnotationsPanel =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowSideBarAnnotationsPanel, _Component);

  /**
   * constructor -
   */
  function WindowSideBarAnnotationsPanel(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WindowSideBarAnnotationsPanel);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowSideBarAnnotationsPanel).call(this, props));
    _this.handleClick = _this.handleClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleMouseEnter = _this.handleMouseEnter.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleMouseLeave = _this.handleMouseLeave.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * Handle click event of an annotation.
  */


  (0, _createClass2.default)(WindowSideBarAnnotationsPanel, [{
    key: "handleClick",
    value: function handleClick(event, annotation) {
      var _this$props = this.props,
          deselectAnnotation = _this$props.deselectAnnotation,
          selectAnnotation = _this$props.selectAnnotation,
          selectedAnnotationIds = _this$props.selectedAnnotationIds,
          windowId = _this$props.windowId;

      if (selectedAnnotationIds.includes(annotation.id)) {
        deselectAnnotation(windowId, annotation.targetId, annotation.id);
      } else {
        selectAnnotation(windowId, annotation.targetId, annotation.id);
      }
    }
    /** */

  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter(annotation) {
      var _this$props2 = this.props,
          allAnnotationsAreHighlighted = _this$props2.allAnnotationsAreHighlighted,
          highlightAnnotation = _this$props2.highlightAnnotation,
          windowId = _this$props2.windowId;
      if (allAnnotationsAreHighlighted) return;
      highlightAnnotation(windowId, annotation.id);
    }
    /** */

  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      var _this$props3 = this.props,
          allAnnotationsAreHighlighted = _this$props3.allAnnotationsAreHighlighted,
          highlightAnnotation = _this$props3.highlightAnnotation,
          windowId = _this$props3.windowId;
      if (allAnnotationsAreHighlighted) return;
      highlightAnnotation(windowId, null);
    }
    /**
     * Rreturn an array of sanitized annotation data
     */

  }, {
    key: "sanitizedAnnotations",
    value: function sanitizedAnnotations() {
      var _this2 = this;

      var _this$props4 = this.props,
          annotations = _this$props4.annotations,
          classes = _this$props4.classes,
          selectedAnnotationIds = _this$props4.selectedAnnotationIds;
      return _react.default.createElement(_List.default, null, annotations.map(function (annotation) {
        return _react.default.createElement(_ListItem.default, {
          className: classes.annotationListItem,
          key: annotation.id,
          selected: selectedAnnotationIds.includes(annotation.id),
          onClick: function onClick(e) {
            return _this2.handleClick(e, annotation);
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.handleMouseEnter(annotation);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.handleMouseLeave(annotation);
          }
        }, _react.default.createElement(_ListItemText.default, {
          primaryTypographyProps: {
            variant: 'body2'
          }
        }, _react.default.createElement(_SanitizedHtml.SanitizedHtml, {
          ruleSet: "iiif",
          htmlString: annotation.content
        })));
      }));
    }
    /**
     * Returns the rendered component
    */

  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          annotations = _this$props5.annotations,
          classes = _this$props5.classes,
          t = _this$props5.t,
          windowId = _this$props5.windowId,
          id = _this$props5.id;
      return _react.default.createElement(_CompanionWindow.default, {
        title: t('annotations'),
        paperClassName: (0, _cssNs.default)('window-sidebar-annotation-panel'),
        windowId: windowId,
        id: id
      }, _react.default.createElement(_AnnotationSettings.default, {
        windowId: windowId
      }), _react.default.createElement("div", {
        className: classes.section
      }, _react.default.createElement(_Typography.default, {
        component: "p",
        variant: "subtitle2"
      }, t('showingNumAnnotations', {
        number: annotations.length
      }))), this.sanitizedAnnotations());
    }
  }]);
  return WindowSideBarAnnotationsPanel;
}(_react.Component);

exports.WindowSideBarAnnotationsPanel = WindowSideBarAnnotationsPanel;
WindowSideBarAnnotationsPanel.propTypes = {
  allAnnotationsAreHighlighted: _propTypes.default.bool.isRequired,
  annotations: _propTypes.default.arrayOf(_propTypes.default.shape({
    content: _propTypes.default.string.isRequired,
    id: _propTypes.default.string.isRequired
  })),
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  deselectAnnotation: _propTypes.default.func.isRequired,
  highlightAnnotation: _propTypes.default.func.isRequired,
  id: _propTypes.default.string.isRequired,
  selectAnnotation: _propTypes.default.func.isRequired,
  selectedAnnotationIds: _propTypes.default.arrayOf(_propTypes.default.string),
  t: _propTypes.default.func,
  windowId: _propTypes.default.string.isRequired
};
WindowSideBarAnnotationsPanel.defaultProps = {
  annotations: [],
  selectedAnnotationIds: [],
  t: function t(key) {
    return key;
  }
};