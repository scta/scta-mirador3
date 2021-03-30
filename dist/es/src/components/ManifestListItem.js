"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ManifestListItem = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ButtonBase = _interopRequireDefault(require("@material-ui/core/ButtonBase"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactPlaceholder = _interopRequireDefault(require("react-placeholder"));

var _placeholders = require("react-placeholder/lib/placeholders");

var _reactImage = _interopRequireDefault(require("react-image"));

var _ManifestListItemError = _interopRequireDefault(require("../containers/ManifestListItemError"));

var _cssNs = _interopRequireDefault(require("../config/css-ns"));

require("react-placeholder/lib/reactPlaceholder.css");

/**
 * Handling open button click
 */
var handleOpenButtonClick = function handleOpenButtonClick(event, manifest, addWindow) {
  addWindow({
    manifestId: manifest
  });
};
/**
 * Represents an item in a list of currently-loaded or loading manifests
 * @param {object} props
 * @param {object} [props.manifest = string]
 */

/** */


var ManifestListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ManifestListItem, _React$Component);

  function ManifestListItem() {
    (0, _classCallCheck2.default)(this, ManifestListItem);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ManifestListItem).apply(this, arguments));
  }

  (0, _createClass2.default)(ManifestListItem, [{
    key: "componentDidMount",

    /** */
    value: function componentDidMount() {
      var _this$props = this.props,
          fetchManifest = _this$props.fetchManifest,
          manifestId = _this$props.manifestId,
          ready = _this$props.ready,
          isFetching = _this$props.isFetching,
          error = _this$props.error;
      if (!ready && !error && !isFetching) fetchManifest(manifestId);
    }
    /** */

  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          manifestId = _this$props2.manifestId,
          ready = _this$props2.ready,
          title = _this$props2.title,
          thumbnail = _this$props2.thumbnail,
          manifestLogo = _this$props2.manifestLogo,
          addWindow = _this$props2.addWindow,
          handleClose = _this$props2.handleClose,
          size = _this$props2.size,
          classes = _this$props2.classes,
          provider = _this$props2.provider,
          t = _this$props2.t,
          error = _this$props2.error;

      var placeholder = _react.default.createElement(_Grid.default, {
        container: true,
        className: (0, _cssNs.default)('manifest-list-item'),
        spacing: 24
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 3,
        sm: 2
      }, _react.default.createElement(_placeholders.RectShape, {
        color: "gray",
        style: {
          height: 80,
          width: 120
        }
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 9,
        sm: 6
      }, _react.default.createElement(_placeholders.TextRow, {
        color: "gray"
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 2
      }, _react.default.createElement(_placeholders.TextBlock, {
        rows: 2,
        color: "gray"
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 2
      }, _react.default.createElement(_placeholders.RectShape, {
        color: "gray",
        style: {
          height: 60,
          width: 60
        }
      })));

      if (error) {
        return _react.default.createElement(_ListItem.default, {
          divider: true,
          elevation: 1,
          className: classes.root,
          "data-manifestid": manifestId
        }, _react.default.createElement(_ManifestListItemError.default, {
          manifestId: manifestId
        }));
      }

      return _react.default.createElement(_ListItem.default, {
        divider: true,
        elevation: 1,
        className: classes.root,
        "data-manifestid": manifestId
      }, _react.default.createElement(_reactPlaceholder.default, {
        showLoadingAnimation: true,
        delay: 500,
        ready: ready,
        customPlaceholder: placeholder
      }, _react.default.createElement(_Grid.default, {
        container: true,
        className: (0, _cssNs.default)('manifest-list-item'),
        spacing: 24
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 12,
        sm: 6
      }, _react.default.createElement(_ButtonBase.default, {
        className: (0, _cssNs.default)('manifest-list-item-title'),
        style: {
          width: '100%'
        },
        onClick: function onClick(event) {
          handleOpenButtonClick(event, manifestId, addWindow);
          handleClose();
        }
      }, _react.default.createElement(_Grid.default, {
        container: true,
        spacing: 24,
        className: classes.label
      }, _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 3
      }, _react.default.createElement(_reactImage.default, {
        className: (0, _cssNs.default)('manifest-list-item-thumb'),
        src: [thumbnail],
        alt: "",
        height: "80",
        unloader: _react.default.createElement(_placeholders.RectShape, {
          className: classes.placeholder,
          style: {
            height: 80,
            width: 120
          }
        })
      })), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 9
      }, _react.default.createElement(_Typography.default, {
        component: "span",
        variant: "h6"
      }, title || manifestId))))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 8,
        sm: 4
      }, _react.default.createElement(_Typography.default, {
        className: (0, _cssNs.default)('manifest-list-item-provider')
      }, provider || t('addedFromUrl')), _react.default.createElement(_Typography.default, null, t('numItems', {
        number: size
      }))), _react.default.createElement(_Grid.default, {
        item: true,
        xs: 4,
        sm: 2
      }, _react.default.createElement(_reactImage.default, {
        src: [manifestLogo],
        alt: "",
        role: "presentation",
        className: classes.logo,
        unloader: _react.default.createElement(_placeholders.RectShape, {
          className: classes.placeholder,
          style: {
            height: 60,
            width: 60
          }
        })
      })))));
    }
  }]);
  return ManifestListItem;
}(_react.default.Component);

exports.ManifestListItem = ManifestListItem;
ManifestListItem.propTypes = {
  addWindow: _propTypes.default.func.isRequired,
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  error: _propTypes.default.string,
  fetchManifest: _propTypes.default.func.isRequired,
  handleClose: _propTypes.default.func,
  isFetching: _propTypes.default.bool,
  manifestId: _propTypes.default.string.isRequired,
  manifestLogo: _propTypes.default.string,
  provider: _propTypes.default.string,
  ready: _propTypes.default.bool,
  size: _propTypes.default.number,
  t: _propTypes.default.func,
  thumbnail: _propTypes.default.string,
  title: _propTypes.default.string
};
ManifestListItem.defaultProps = {
  classes: {},
  error: null,
  handleClose: function handleClose() {},
  isFetching: false,
  manifestLogo: null,
  provider: null,
  ready: false,
  size: 0,
  t: function t(key) {
    return key;
  },
  thumbnail: null,
  title: null
};