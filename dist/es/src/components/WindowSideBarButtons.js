"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowSideBarButtons = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _InfoSharp = _interopRequireDefault(require("@material-ui/icons/InfoSharp"));

var _CommentSharp = _interopRequireDefault(require("@material-ui/icons/CommentSharp"));

var _CanvasIndexIcon = _interopRequireDefault(require("./icons/CanvasIndexIcon"));

/**
 *
 */
var WindowSideBarButtons =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowSideBarButtons, _Component);
  (0, _createClass2.default)(WindowSideBarButtons, null, [{
    key: "activateTab",

    /**
     * selects the given tab
     * @param {*} tab the tab to activate
     */
    value: function activateTab(tab) {
      tab.removeAttribute('tabindex');
      tab.setAttribute('aria-selected', 'true');
    }
    /** */

  }]);

  function WindowSideBarButtons(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WindowSideBarButtons);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowSideBarButtons).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleKeyUp = _this.handleKeyUp.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.keys = {
      down: 'ArrowDown',
      end: 'End',
      home: 'Home',
      up: 'ArrowUp'
    };
    _this.chars = {
      down: 40,
      end: 35,
      home: 36,
      up: 38
    };
    return _this;
  }
  /**
   *
   */


  (0, _createClass2.default)(WindowSideBarButtons, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.tabBar = _reactDom.default.findDOMNode(this.tabsRef); // eslint-disable-line react/no-find-dom-node

      this.tabs = Array.from(this.tabBar.querySelectorAll('button[role=tab]'));
      /*
        the change event isn't fired, when the tabs component is initialized,
        so we have to perform the required actions on our own
      */

      var selectedTab = this.tabs.find(function (t) {
        return t.getAttribute('aria-selected') === 'true';
      }) || this.tabs[0];
      this.selectTab(selectedTab);
      selectedTab.focus();
    }
    /**
     * Set the ref to the parent tabs element
     */

  }, {
    key: "setTabsRef",
    value: function setTabsRef(ref) {
      if (this.tabsRef) return;
      this.tabsRef = ref;
    }
    /**
     * @param {object} event the change event
     * @param {string} value the tab's value
    */

  }, {
    key: "handleChange",
    value: function handleChange(event, value) {
      var addCompanionWindow = this.props.addCompanionWindow;
      var tab = event.target;
      this.selectTab(tab);
      addCompanionWindow(value);
    }
    /**
     *
     * @param {*} tab the tab to select
     */

  }, {
    key: "selectTab",
    value: function selectTab(tab) {
      WindowSideBarButtons.activateTab(tab);
      this.deactivateTabs(this.tabs.indexOf(tab));
    }
    /**
     * @param {number} omit tab index to omit
     */

  }, {
    key: "deactivateTabs",
    value: function deactivateTabs() {
      var omit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      this.tabs.map(function (v, k) {
        if (k !== omit) {
          v.setAttribute('tabindex', '-1');
          v.setAttribute('aria-selected', 'false');
        }

        return null;
      });
    }
    /**
     *
     * @param {object} event the keyUp event
     */

  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      if (event.key === this.keys.up || event.which === this.chars.up) {
        event.preventDefault();
        return this.focusPreviousTab(event.target);
      }

      if (event.key === this.keys.down || event.which === this.chars.down) {
        event.preventDefault();
        return this.focusNextTab(event.target);
      }

      return null;
    }
    /**
     * focus the previous tab
     * @param {object} tab the currently selected tab
     */

  }, {
    key: "focusPreviousTab",
    value: function focusPreviousTab(tab) {
      var previousTab = tab.previousSibling || this.tabs[this.tabs.length - 1];
      previousTab.focus();
    }
    /**
     * focus the next tab
     * @param {object} tab the currently selected tab
     */

  }, {
    key: "focusNextTab",
    value: function focusNextTab(tab) {
      var nextTab = tab.nextSibling || this.tabs[0];
      nextTab.focus();
    }
    /**
     * render
     *
     * @return {type}  description
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          hasAnnotations = _this$props.hasAnnotations,
          sideBarPanel = _this$props.sideBarPanel,
          t = _this$props.t;
      /** */

      var TabButton = function TabButton(props) {
        return _react.default.createElement(_Tab.default, (0, _extends2.default)({
          classes: {
            root: classes.tab,
            selected: classes.tabSelected
          },
          "aria-label": t('openCompanionWindow', {
            context: props.value
          }),
          icon: _react.default.createElement(_Tooltip.default, {
            title: t('openCompanionWindow', {
              context: props.value
            })
          }, props.icon),
          TouchRippleProps: {
            classes: {
              child: classes.tabRipple
            }
          },
          onKeyUp: _this2.handleKeyUp
        }, props));
      };

      return _react.default.createElement(_Tabs.default, {
        classes: {
          flexContainer: classes.tabsFlexContainer,
          indicator: classes.tabsIndicator
        },
        value: sideBarPanel === 'closed' ? false : sideBarPanel,
        onChange: this.handleChange,
        variant: "fullWidth",
        indicatorColor: "secondary",
        textColor: "secondary",
        "aria-orientation": "vertical",
        "aria-label": t('sidebarPanelsNavigation'),
        ref: function ref(_ref) {
          return _this2.setTabsRef(_ref);
        }
      }, _react.default.createElement(TabButton, {
        value: "info",
        icon: _react.default.createElement(_InfoSharp.default, null)
      }), _react.default.createElement(TabButton, {
        value: "canvas",
        icon: _react.default.createElement(_CanvasIndexIcon.default, null)
      }), _react.default.createElement(TabButton, {
        value: "annotations",
        icon: _react.default.createElement(_Badge.default, {
          color: "error",
          invisible: !hasAnnotations,
          variant: "dot"
        }, _react.default.createElement(_CommentSharp.default, null))
      }));
    }
  }]);
  return WindowSideBarButtons;
}(_react.Component);

exports.WindowSideBarButtons = WindowSideBarButtons;
WindowSideBarButtons.propTypes = {
  addCompanionWindow: _propTypes.default.func.isRequired,
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  hasAnnotations: _propTypes.default.bool,
  sideBarPanel: _propTypes.default.string,
  t: _propTypes.default.func
};
WindowSideBarButtons.defaultProps = {
  classes: {},
  hasAnnotations: false,
  sideBarPanel: 'closed',
  t: function t(key) {
    return key;
  }
};