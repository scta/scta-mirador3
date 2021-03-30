"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowViewSettings = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _CropOriginalSharp = _interopRequireDefault(require("@material-ui/icons/CropOriginalSharp"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BookViewIcon = _interopRequireDefault(require("./icons/BookViewIcon"));

var _GalleryViewIcon = _interopRequireDefault(require("./icons/GalleryViewIcon"));

/**
 *
 */
var WindowViewSettings =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowViewSettings, _Component);

  /**
   * constructor -
   */
  function WindowViewSettings(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WindowViewSettings);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowViewSettings).call(this, props));
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   * Take action when the component mounts for the first time
   */


  (0, _createClass2.default)(WindowViewSettings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.selectedRef) {
        // MUI uses ReactDOM.findDOMNode and refs for handling focus
        _reactDom.default.findDOMNode(this.selectedRef).focus(); // eslint-disable-line react/no-find-dom-node

      }
    }
    /**
     * @private
     */

  }, {
    key: "handleSelectedRef",
    value: function handleSelectedRef(ref) {
      if (this.selectedRef) return;
      this.selectedRef = ref;
    }
    /**
     * @private
     */

  }, {
    key: "handleChange",
    value: function handleChange(value) {
      var _this$props = this.props,
          windowId = _this$props.windowId,
          setWindowViewType = _this$props.setWindowViewType;
      setWindowViewType(windowId, value);
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
          windowViewType = _this$props2.windowViewType;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ListSubheader.default, {
        role: "presentation",
        tabIndex: "-1"
      }, t('view')), _react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        ref: function ref(_ref) {
          return _this2.handleSelectedRef(_ref);
        },
        onClick: function onClick() {
          _this2.handleChange('single');

          handleClose();
        }
      }, _react.default.createElement(_FormControlLabel.default, {
        value: "single",
        classes: {
          label: windowViewType === 'single' ? classes.selectedLabel : undefined
        },
        control: _react.default.createElement(_CropOriginalSharp.default, {
          color: windowViewType === 'single' ? 'secondary' : undefined
        }),
        label: t('single'),
        labelPlacement: "bottom"
      })), _react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('book');

          handleClose();
        }
      }, _react.default.createElement(_FormControlLabel.default, {
        value: "book",
        classes: {
          label: windowViewType === 'book' ? classes.selectedLabel : undefined
        },
        control: _react.default.createElement(_BookViewIcon.default, {
          color: windowViewType === 'book' ? 'secondary' : undefined
        }),
        label: t('book'),
        labelPlacement: "bottom"
      })), _react.default.createElement(_MenuItem.default, {
        className: classes.MenuItem,
        onClick: function onClick() {
          _this2.handleChange('gallery');

          handleClose();
        }
      }, _react.default.createElement(_FormControlLabel.default, {
        value: "gallery",
        classes: {
          label: windowViewType === 'gallery' ? classes.selectedLabel : undefined
        },
        control: _react.default.createElement(_GalleryViewIcon.default, {
          color: windowViewType === 'gallery' ? 'secondary' : undefined
        }),
        label: t('gallery'),
        labelPlacement: "bottom"
      })));
    }
  }]);
  return WindowViewSettings;
}(_react.Component);

exports.WindowViewSettings = WindowViewSettings;
WindowViewSettings.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  handleClose: _propTypes.default.func,
  setWindowViewType: _propTypes.default.func.isRequired,
  t: _propTypes.default.func,
  windowId: _propTypes.default.string.isRequired,
  windowViewType: _propTypes.default.string.isRequired
};
WindowViewSettings.defaultProps = {
  handleClose: function handleClose() {},
  t: function t(key) {
    return key;
  }
};