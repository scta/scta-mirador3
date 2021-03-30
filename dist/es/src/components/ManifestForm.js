"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestForm = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

/**
 * Provides a form for user input of a manifest url
 * @prop {Function} fetchManifest
 */
var ManifestForm =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ManifestForm, _Component);

  /**
   * constructor -
   */
  function ManifestForm(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ManifestForm);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ManifestForm).call(this, props));
    _this.state = {
      formValue: ''
    };
    _this.formSubmit = _this.formSubmit.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleCancel = _this.handleCancel.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleInputChange = _this.handleInputChange.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.setInputRef = _this.setInputRef.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /**
   *
   * @param {*} prevProps
   * @param {*} prevState
   */


  (0, _createClass2.default)(ManifestForm, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var addResourcesOpen = this.props.addResourcesOpen;

      if (this.input && addResourcesOpen) {
        _reactDom.default.findDOMNode(this.input).querySelector('#manifestURL').focus(); // eslint-disable-line react/no-find-dom-node

      }
    }
    /**
     * Set the ref to the manifest input
     * @param {*} input
     */

  }, {
    key: "setInputRef",
    value: function setInputRef(input) {
      if (this.input) return;
      this.input = input;
    }
    /**
     * formSubmit - triggers manifest update and sets lastRequested
     * @param  {Event} event
     * @private
     */

  }, {
    key: "formSubmit",
    value: function formSubmit(event) {
      var _this$props = this.props,
          fetchManifest = _this$props.fetchManifest,
          onSubmit = _this$props.onSubmit;
      var formValue = this.state.formValue;
      event.preventDefault();
      onSubmit();
      fetchManifest(formValue);
      this.setState({
        formValue: ''
      });
    }
    /**
     * Reset the form state
     */

  }, {
    key: "handleCancel",
    value: function handleCancel() {
      var onCancel = this.props.onCancel;
      onCancel();
      this.setState({
        formValue: ''
      });
    }
    /**
     * handleInputChange - sets state based on input change.
     * @param  {Event} event
     * @private
     */

  }, {
    key: "handleInputChange",
    value: function handleInputChange(event) {
      var that = this;
      event.preventDefault();
      that.setState({
        formValue: event.target.value
      });
    }
    /**
     * render
     * @return {String} - HTML markup for the component
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var formValue = this.state.formValue;
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          onCancel = _this$props2.onCancel,
          t = _this$props2.t;
      return _react.default.createElement("form", {
        onSubmit: this.formSubmit
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 24
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 8,
        md: 9
      }, _react.default.createElement(_TextField.default, {
        ref: function ref(_ref) {
          return _this2.setInputRef(_ref);
        },
        fullWidth: true,
        value: formValue,
        id: "manifestURL",
        type: "text",
        onChange: this.handleInputChange,
        variant: "filled",
        label: t('addManifestUrl'),
        helperText: t('addManifestUrlHelp'),
        InputLabelProps: {
          shrink: true
        },
        InputProps: {
          className: classes.input
        }
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 4,
        md: 3,
        className: classes.buttons
      }, onCancel && _react.default.createElement(_Button.default, {
        onClick: this.handleCancel
      }, t('cancel')), _react.default.createElement(_Button.default, {
        id: "fetchBtn",
        type: "submit",
        variant: "contained",
        color: "secondary"
      }, t('fetchManifest')))));
    }
  }]);
  return ManifestForm;
}(_react.Component);

exports.ManifestForm = ManifestForm;
ManifestForm.propTypes = {
  addResourcesOpen: _propTypes.default.bool.isRequired,
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  fetchManifest: _propTypes.default.func.isRequired,
  onCancel: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  t: _propTypes.default.func
};
ManifestForm.defaultProps = {
  classes: {},
  onCancel: null,
  onSubmit: function onSubmit() {},
  t: function t(key) {
    return key;
  }
};