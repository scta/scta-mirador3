"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceMenuButton = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _MenuSharp = _interopRequireDefault(require("@material-ui/icons/MenuSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _WorkspaceMenu = _interopRequireDefault(require("../containers/WorkspaceMenu"));

var _MiradorMenuButton = _interopRequireDefault(require("../containers/MiradorMenuButton"));

/**
 */
var WorkspaceMenuButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceMenuButton, _Component);

  /**
   * constructor -
   */
  function WorkspaceMenuButton(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WorkspaceMenuButton);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceMenuButton).call(this, props));
    _this.state = {
      anchorEl: null
    };
    _this.handleMenuClick = _this.handleMenuClick.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleMenuClose = _this.handleMenuClose.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(WorkspaceMenuButton, [{
    key: "handleMenuClick",
    value: function handleMenuClick(event) {
      this.setState({
        anchorEl: event.currentTarget
      });
    }
    /**
     * @private
     */

  }, {
    key: "handleMenuClose",
    value: function handleMenuClose() {
      this.setState({
        anchorEl: null
      });
    }
    /**
     * render
     * @return
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t;
      var anchorEl = this.state.anchorEl;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_MiradorMenuButton.default, {
        "aria-haspopup": "true",
        "aria-label": t('workspaceMenu'),
        "aria-owns": anchorEl ? 'workspace-menu' : undefined,
        className: (0, _classnames.default)(classes.ctrlBtn, anchorEl ? classes.ctrlBtnSelected : null),
        id: "menuBtn",
        onClick: this.handleMenuClick
      }, _react.default.createElement(_MenuSharp.default, null)), _react.default.createElement(_WorkspaceMenu.default, {
        anchorEl: anchorEl,
        handleClose: this.handleMenuClose
      }));
    }
  }]);
  return WorkspaceMenuButton;
}(_react.Component);

exports.WorkspaceMenuButton = WorkspaceMenuButton;
WorkspaceMenuButton.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func
};
WorkspaceMenuButton.defaultProps = {
  t: function t(key) {
    return key;
  }
};