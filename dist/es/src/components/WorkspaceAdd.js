"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceAdd = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AddSharp = _interopRequireDefault(require("@material-ui/icons/AddSharp"));

var _ExpandMoreSharp = _interopRequireDefault(require("@material-ui/icons/ExpandMoreSharp"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

var _ManifestForm = _interopRequireDefault(require("../containers/ManifestForm"));

var _ManifestListItem = _interopRequireDefault(require("../containers/ManifestListItem"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

/**
 * An area for managing manifests and adding them to workspace
 * @memberof Workspace
 * @private
 */
var WorkspaceAdd =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(WorkspaceAdd, _React$Component);

  /** */
  function WorkspaceAdd(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WorkspaceAdd);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceAdd).call(this, props));
    _this.state = {
      addResourcesOpen: false
    };
    _this.setAddResourcesVisibility = _this.setAddResourcesVisibility.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(WorkspaceAdd, [{
    key: "setAddResourcesVisibility",
    value: function setAddResourcesVisibility(bool) {
      this.setState({
        addResourcesOpen: bool
      });
    }
    /**
     * render
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          manifests = _this$props.manifests,
          setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility,
          t = _this$props.t,
          classes = _this$props.classes;
      var addResourcesOpen = this.state.addResourcesOpen;
      var manifestList = Object.keys(manifests).map(function (manifest) {
        return _react.default.createElement(_ManifestListItem.default, {
          key: manifest,
          manifestId: manifest,
          handleClose: function handleClose() {
            return setWorkspaceAddVisibility(false);
          }
        });
      });
      return _react.default.createElement("div", {
        className: (0, _cssNs.default)('workspace-add')
      }, _react.default.createElement(_Paper.default, {
        className: classes.list
      }, _react.default.createElement(_Typography.default, {
        variant: "srOnly",
        component: "h1"
      }, t('miradorResources')), _react.default.createElement(_List.default, null, manifestList)), _react.default.createElement(_Fab.default, {
        variant: "extended",
        disabled: addResourcesOpen,
        className: (0, _classnames.default)(classes.fab, (0, _cssNs.default)('add-resource-button')),
        color: "secondary",
        onClick: function onClick() {
          return _this2.setAddResourcesVisibility(true);
        }
      }, _react.default.createElement(_AddSharp.default, null), t('addResource')), _react.default.createElement(_Drawer.default, {
        className: (0, _classnames.default)((0, _defineProperty2.default)({}, classes.displayNone, !addResourcesOpen)),
        classes: {
          paper: classes.paper
        },
        variant: "persistent",
        anchor: "bottom",
        open: addResourcesOpen,
        ModalProps: {
          disablePortal: true,
          hideBackdrop: true,
          style: {
            position: 'absolute'
          }
        }
      }, _react.default.createElement(_Paper.default, {
        className: classes.form
      }, _react.default.createElement(_AppBar.default, {
        position: "absolute",
        color: "secondary",
        onClick: function onClick() {
          return _this2.setAddResourcesVisibility(false);
        }
      }, _react.default.createElement(_Toolbar.default, {
        variant: "dense"
      }, _react.default.createElement(_MiradorMenuButton.default, {
        "aria-label": t('closeAddResourceForm'),
        className: classes.menuButton
      }, _react.default.createElement(_ExpandMoreSharp.default, null)), _react.default.createElement(_Typography.default, {
        variant: "h2",
        noWrap: true,
        color: "inherit",
        className: classes.typographyBody
      }, t('addResource')))), _react.default.createElement(_ManifestForm.default, {
        addResourcesOpen: addResourcesOpen,
        onSubmit: function onSubmit() {
          return _this2.setAddResourcesVisibility(false);
        },
        onCancel: function onCancel() {
          return _this2.setAddResourcesVisibility(false);
        }
      }))));
    }
  }]);
  return WorkspaceAdd;
}(_react.default.Component);

exports.WorkspaceAdd = WorkspaceAdd;
WorkspaceAdd.propTypes = {
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  manifests: _propTypes.default.instanceOf(Object).isRequired,
  setWorkspaceAddVisibility: _propTypes.default.func.isRequired,
  t: _propTypes.default.func
};
WorkspaceAdd.defaultProps = {
  classes: {},
  t: function t(key) {
    return key;
  }
};