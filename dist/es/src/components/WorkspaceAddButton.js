"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkspaceAddButton = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _AddSharp = _interopRequireDefault(require("@material-ui/icons/AddSharp"));

var _CloseSharp = _interopRequireDefault(require("@material-ui/icons/CloseSharp"));

/**
 */
var WorkspaceAddButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WorkspaceAddButton, _Component);

  function WorkspaceAddButton() {
    (0, _classCallCheck2.default)(this, WorkspaceAddButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WorkspaceAddButton).apply(this, arguments));
  }

  (0, _createClass2.default)(WorkspaceAddButton, [{
    key: "render",

    /**
     * render
     * @return
     */
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          t = _this$props.t,
          setWorkspaceAddVisibility = _this$props.setWorkspaceAddVisibility,
          isWorkspaceAddVisible = _this$props.isWorkspaceAddVisible;
      return _react.default.createElement(_Tooltip.default, {
        title: isWorkspaceAddVisible ? t('closeAddResourceMenu') : t('addResource')
      }, _react.default.createElement(_Fab.default, {
        size: "medium",
        color: "secondary",
        id: "addBtn",
        "aria-label": isWorkspaceAddVisible ? t('closeAddResourceMenu') : t('addResource'),
        className: classes.fab,
        onClick: function onClick() {
          setWorkspaceAddVisibility(!isWorkspaceAddVisible);
        }
      }, isWorkspaceAddVisible ? _react.default.createElement(_CloseSharp.default, null) : _react.default.createElement(_AddSharp.default, null)));
    }
  }]);
  return WorkspaceAddButton;
}(_react.Component);

exports.WorkspaceAddButton = WorkspaceAddButton;
WorkspaceAddButton.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  isWorkspaceAddVisible: _propTypes.default.bool,
  setWorkspaceAddVisibility: _propTypes.default.func.isRequired,
  t: _propTypes.default.func
};
WorkspaceAddButton.defaultProps = {
  isWorkspaceAddVisible: false,
  t: function t(key) {
    return key;
  }
};