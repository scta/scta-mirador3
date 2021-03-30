"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindowAuthenticationControl = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Snackbar = _interopRequireDefault(require("@material-ui/core/Snackbar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogContentText = _interopRequireDefault(require("@material-ui/core/DialogContentText"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _SanitizedHtml = require("./SanitizedHtml");

/**
 */
var WindowAuthenticationControl =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(WindowAuthenticationControl, _Component);

  /** */
  function WindowAuthenticationControl(props) {
    var _this;

    (0, _classCallCheck2.default)(this, WindowAuthenticationControl);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WindowAuthenticationControl).call(this, props));
    _this.state = {
      failureOpen: true,
      open: false
    };
    _this.handleClickOpen = _this.handleClickOpen.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleClose = _this.handleClose.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleFailureClose = _this.handleFailureClose.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    _this.handleConfirm = _this.handleConfirm.bind((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }
  /** */


  (0, _createClass2.default)(WindowAuthenticationControl, [{
    key: "handleClickOpen",
    value: function handleClickOpen() {
      this.setState({
        open: true
      });
    }
    /** */

  }, {
    key: "handleClose",
    value: function handleClose() {
      this.setState({
        open: false
      });
    }
    /** */

  }, {
    key: "handleFailureClose",
    value: function handleFailureClose() {
      this.setState({
        failureOpen: false
      });
    }
    /** */

  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      var _this$props = this.props,
          handleAuthInteraction = _this$props.handleAuthInteraction,
          infoId = _this$props.infoId,
          serviceId = _this$props.serviceId,
          windowId = _this$props.windowId;
      handleAuthInteraction(windowId, infoId, serviceId);
      this.handleClose();
    }
    /** */

  }, {
    key: "renderInteractiveAuth",
    value: function renderInteractiveAuth() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          confirmLabel = _this$props2.confirmLabel,
          description = _this$props2.description,
          header = _this$props2.header,
          label = _this$props2.label,
          t = _this$props2.t;
      var open = this.state.open;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Snackbar.default, {
        classes: {
          root: classes.snackbar
        },
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        open: true,
        message: _react.default.createElement(_SanitizedHtml.SanitizedHtml, {
          htmlString: label || '',
          ruleSet: "iiif"
        }),
        action: _react.default.createElement(_Button.default, {
          onClick: this.handleClickOpen,
          color: "primary"
        }, t('login'))
      }), _react.default.createElement(_Dialog.default, {
        open: open,
        onClose: this.handleClose
      }, _react.default.createElement(_DialogTitle.default, null, header || ''), _react.default.createElement(_DialogContent.default, null, _react.default.createElement(_DialogContentText.default, null, _react.default.createElement(_SanitizedHtml.SanitizedHtml, {
        htmlString: description || '',
        ruleSet: "iiif"
      }))), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
        onClick: this.handleClose
      }, t('cancel')), _react.default.createElement(_Button.default, {
        onClick: this.handleConfirm,
        autoFocus: true
      }, confirmLabel || t('login')))));
    }
    /** */

  }, {
    key: "renderFailureMessages",
    value: function renderFailureMessages() {
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          failureHeader = _this$props3.failureHeader,
          failureDescription = _this$props3.failureDescription;
      var failureOpen = this.state.failureOpen;
      return _react.default.createElement(_Snackbar.default, {
        ContentProps: {
          className: classes.failure
        },
        classes: {
          root: classes.snackbar
        },
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'top'
        },
        open: failureOpen,
        message: _react.default.createElement(_SanitizedHtml.SanitizedHtml, {
          htmlString: "".concat(failureHeader, " ").concat(failureDescription) || '',
          ruleSet: "iiif"
        }),
        action: [_react.default.createElement(_IconButton.default, {
          key: "close",
          "aria-label": "Close",
          color: "inherit",
          className: classes.close,
          onClick: this.handleFailureClose
        }, _react.default.createElement(_Close.default, {
          className: classes.icon
        }))]
      });
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          degraded = _this$props4.degraded,
          status = _this$props4.status,
          profile = _this$props4.profile;
      var failureOpen = this.state.failureOpen;
      if (!degraded || !profile) return _react.default.createElement(_react.default.Fragment, null);
      var url = profile.value;
      /**
      Login: onclick, show modal dialog w/ header, description, confirmLabel
      Clickthrough: onclick show modal dialog w/ header, description, confirmLabel
      Kiosk/external: no-op
      */

      return _react.default.createElement(_react.default.Fragment, null, (status !== 'failed' || !failureOpen) && (url === 'http://iiif.io/api/auth/1/clickthrough' || url === 'http://iiif.io/api/auth/1/login') && this.renderInteractiveAuth(), status === 'failed' && this.renderFailureMessages());
    }
  }]);
  return WindowAuthenticationControl;
}(_react.Component);

exports.WindowAuthenticationControl = WindowAuthenticationControl;
WindowAuthenticationControl.propTypes = {
  classes: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  confirmLabel: _propTypes.default.string,
  degraded: _propTypes.default.bool,
  description: _propTypes.default.string,
  failureDescription: _propTypes.default.string,
  failureHeader: _propTypes.default.string,
  handleAuthInteraction: _propTypes.default.func.isRequired,
  header: _propTypes.default.string,
  infoId: _propTypes.default.string,
  label: _propTypes.default.string,
  profile: _propTypes.default.shape({
    value: _propTypes.default.string
  }),
  serviceId: _propTypes.default.string,
  status: _propTypes.default.oneOf(['ok', 'fetching', 'failed', null]),
  t: _propTypes.default.func,
  windowId: _propTypes.default.string.isRequired
};
WindowAuthenticationControl.defaultProps = {
  confirmLabel: undefined,
  degraded: false,
  description: undefined,
  failureDescription: undefined,
  failureHeader: undefined,
  header: undefined,
  infoId: undefined,
  label: undefined,
  profile: undefined,
  serviceId: undefined,
  status: null,
  t: function t() {}
};