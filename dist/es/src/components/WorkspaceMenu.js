"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMenu = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _Input = _interopRequireDefault(require("@material-ui/icons/Input"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _SaveAltSharp = _interopRequireDefault(require("@material-ui/icons/SaveAltSharp"));

var _SettingsSharp = _interopRequireDefault(require("@material-ui/icons/SettingsSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LanguageSettings = _interopRequireDefault(require("../containers/LanguageSettings"));

var _NestedMenu = require("./NestedMenu");

var _WindowList = _interopRequireDefault(require("../containers/WindowList"));

var _WorkspaceSettings = _interopRequireDefault(require("../containers/WorkspaceSettings"));

var _WorkspaceSelectionDialog = _interopRequireDefault(require("../containers/WorkspaceSelectionDialog"));

var _WorkspaceExport = _interopRequireDefault(require("../containers/WorkspaceExport"));

var _WorkspaceImport = _interopRequireDefault(require("../containers/WorkspaceImport"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

/**
 */
var WorkspaceMenu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceMenu, _Component);

  /**
   * constructor -
   */
  function WorkspaceMenu(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WorkspaceMenu);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceMenu).call(this, props));
    _this.state = {
      exportWorkspace: {},
      importWorkspace: {},
      settings: {},
      toggleZoom: {},
      windowList: {},
      workspaceSelection: {}
    };
    _this.handleMenuItemClick = _this.handleMenuItemClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleMenuItemClose = _this.handleMenuItemClose.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(WorkspaceMenu, [{
    key: "handleMenuItemClick",
    value: function handleMenuItemClick(item, event) {
      var obj = {};
      obj[item] = {};
      obj[item].open = true;
      obj[item].anchorEl = event.currentTarget;
      this.setState(obj);
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuItemClose",
    value: function handleMenuItemClose(item) {
      var _this2 = this;

      return function (event) {
        var obj = {};
        obj[item] = {};
        obj[item].open = false;
        obj[item].anchorEl = null;

        _this2.setState(obj);
      };
    }
    /**
     * @private
     */

  }, {
    key: "handleZoomToggleClick",
    value: function handleZoomToggleClick() {
      var _this$props = this.props,
          toggleZoomControls = _this$props.toggleZoomControls,
          showZoomControls = _this$props.showZoomControls;
      toggleZoomControls(!showZoomControls);
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          containerId = _this$props2.containerId,
          handleClose = _this$props2.handleClose,
          anchorEl = _this$props2.anchorEl,
          t = _this$props2.t,
          showZoomControls = _this$props2.showZoomControls;
      var _this$state = this.state,
          importWorkspace = _this$state.importWorkspace,
          windowList = _this$state.windowList,
          toggleZoom = _this$state.toggleZoom,
          settings = _this$state.settings,
          exportWorkspace = _this$state.exportWorkspace,
          workspaceSelection = _this$state.workspaceSelection;
      var container = document.querySelector("#".concat(containerId, " .").concat((0, _cssNs.default)('viewer')));
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Menu.default, {
        id: "workspace-menu",
        container: container,
        anchorEl: anchorEl,
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        transformOrigin: {
          horizontal: 'left',
          vertical: 'top'
        },
        open: Boolean(anchorEl),
        onClose: handleClose
      }, _react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('windowList', e);

          handleClose(e);
        },
        "aria-owns": windowList.anchorEl ? 'window-list-menu' : undefined
      }, _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('listAllOpenWindows'))), _react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleZoomToggleClick(e);

          handleClose(e);
        },
        "aria-owns": toggleZoom.anchorEl ? 'toggle-zoom-menu' : undefined,
        divider: true
      }, _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, showZoomControls ? t('hideZoomControls') : t('showZoomControls'))), _react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('workspaceSelection', e);

          handleClose(e);
        },
        "aria-owns": workspaceSelection.anchorEl ? 'workspace-selection' : undefined
      }, _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('selectWorkspaceMenu'))), _react.default.createElement(_NestedMenu.NestedMenu, {
        label: t('language')
      }, _react.default.createElement(_LanguageSettings.default, {
        afterSelect: handleClose
      })), _react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('settings', e);

          handleClose(e);
        },
        "aria-owns": settings.AnchorEl ? 'workspace-settings' : undefined,
        divider: true
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_SettingsSharp.default, null)), _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('settings'))), _react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('exportWorkspace', e);

          handleClose(e);
        },
        "aria-owns": exportWorkspace.AnchorEl ? 'workspace-export' : undefined
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_SaveAltSharp.default, null)), _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('downloadExportWorkspace'))), _react.default.createElement(_MenuItem.default, {
        "aria-haspopup": "true",
        id: "workspace-menu-import",
        onClick: function onClick(e) {
          _this3.handleMenuItemClick('importWorkspace', e);

          handleClose(e);
        },
        "aria-owns": exportWorkspace.AnchorEl ? 'workspace-import' : undefined
      }, _react.default.createElement(_ListItemIcon.default, null, _react.default.createElement(_Input.default, null)), _react.default.createElement(_Typography.default, {
        variant: "body1"
      }, t('importWorkspace')))), Boolean(windowList.anchorEl) && _react.default.createElement(_WindowList.default, {
        anchorEl: windowList.anchorEl,
        open: Boolean(windowList.anchorEl),
        handleClose: this.handleMenuItemClose('windowList')
      }), Boolean(toggleZoom.open) && _react.default.createElement(_WorkspaceSettings.default, {
        open: Boolean(toggleZoom.open),
        handleClose: this.handleMenuItemClose('toggleZoom')
      }), Boolean(settings.open) && _react.default.createElement(_WorkspaceSettings.default, {
        open: Boolean(settings.open),
        container: container,
        handleClose: this.handleMenuItemClose('settings')
      }), Boolean(workspaceSelection.open) && _react.default.createElement(_WorkspaceSelectionDialog.default, {
        open: Boolean(workspaceSelection.open),
        container: container,
        handleClose: this.handleMenuItemClose('workspaceSelection')
      }), Boolean(exportWorkspace.open) && _react.default.createElement(_WorkspaceExport.default, {
        open: Boolean(exportWorkspace.open),
        container: container,
        handleClose: this.handleMenuItemClose('exportWorkspace')
      }), Boolean(importWorkspace.open) && _react.default.createElement(_WorkspaceImport.default, {
        open: Boolean(importWorkspace.open),
        container: container,
        handleClose: this.handleMenuItemClose('importWorkspace')
      }));
    }
  }]);
  return WorkspaceMenu;
}(_react.Component);

exports.WorkspaceMenu = WorkspaceMenu;
WorkspaceMenu.propTypes = {
  anchorEl: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  containerId: _propTypes.default.string.isRequired,
  handleClose: _propTypes.default.func.isRequired,
  showZoomControls: _propTypes.default.bool,
  t: _propTypes.default.func,
  toggleZoomControls: _propTypes.default.func
};
WorkspaceMenu.defaultProps = {
  anchorEl: null,
  showZoomControls: false,
  t: function t(key) {
    return key;
  },
  toggleZoomControls: function toggleZoomControls() {}
};