"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowThumbnailSettings = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _CropDinSharp = _interopRequireDefault(require("@material-ui/icons/CropDinSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ThumbnailNavigationBottomIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationBottomIcon"));

var _ThumbnailNavigationRightIcon = _interopRequireDefault(require("./icons/ThumbnailNavigationRightIcon"));

/**
 *
 */
var WindowThumbnailSettings =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowThumbnailSettings, _Component);

  /**
   * constructor -
   */
  function WindowThumbnailSettings(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WindowThumbnailSettings);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowThumbnailSettings).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * @private
   */


  (0, _createClass2.default)(WindowThumbnailSettings, [{
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
          windowId = _this$props.windowId,
          setWindowThumbnailPosition = _this$props.setWindowThumbnailPosition;
      setWindowThumbnailPosition(windowId, value);
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

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          handleClose = _this$props2.handleClose,
          t = _this$props2.t,
          thumbnailNavigationPosition = _this$props2.thumbnailNavigationPosition;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ListSubheader.default, {
        role: "presentation",
        tabIndex: "-1"
      }, t('thumbnails')), _react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('off');

          handleClose();
        }
      }, _react.default.createElement(_FormControlLabel.default, {
        value: "off",
        classes: {
          label: thumbnailNavigationPosition === 'off' ? classes.selectedLabel : undefined
        },
        control: _react.default.createElement(_CropDinSharp.default, {
          color: thumbnailNavigationPosition === 'off' ? 'secondary' : undefined
        }),
        label: t('off'),
        labelPlacement: "bottom"
      })), _react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('far-bottom');

          handleClose();
        }
      }, _react.default.createElement(_FormControlLabel.default, {
        value: "far-bottom",
        classes: {
          label: thumbnailNavigationPosition === 'far-bottom' ? classes.selectedLabel : undefined
        },
        control: _react.default.createElement(_ThumbnailNavigationBottomIcon.default, {
          color: thumbnailNavigationPosition === 'far-bottom' ? 'secondary' : undefined
        }),
        label: t('bottom'),
        labelPlacement: "bottom"
      })), _react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('far-right');

          handleClose();
        }
      }, _react.default.createElement(_FormControlLabel.default, {
        value: "far-right",
        classes: {
          label: thumbnailNavigationPosition === 'far-right' ? classes.selectedLabel : undefined
        },
        control: _react.default.createElement(_ThumbnailNavigationRightIcon.default, {
          color: thumbnailNavigationPosition === 'far-right' ? 'secondary' : undefined
        }),
        label: t('right'),
        labelPlacement: "bottom"
      })));
    }
  }]);
  return WindowThumbnailSettings;
}(_react.Component);

exports.WindowThumbnailSettings = WindowThumbnailSettings;
WindowThumbnailSettings.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  handleClose: _propTypes.default.func,
  setWindowThumbnailPosition: _propTypes.default.func.isRequired,
  t: _propTypes.default.func,
  thumbnailNavigationPosition: _propTypes.default.string.isRequired,
  windowId: _propTypes.default.string.isRequired
};
WindowThumbnailSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  }
};