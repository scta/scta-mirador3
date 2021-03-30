"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withPlugins = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _curry = _interopRequireDefault(require("lodash/curry"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _reactRedux = require("react-redux");

var _ = require(".");

/** withPlugins should be the innermost HOC */
function _withPlugins(targetName, TargetComponent) {
  // eslint-disable-line no-underscore-dangle

  /** plugin wrapper hoc */
  var PluginHoc =
  /*#__PURE__*/
  function (_Component) {
    (0, _inherits2.default)(PluginHoc, _Component);

    function PluginHoc() {
      (0, _classCallCheck2.default)(this, PluginHoc);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PluginHoc).apply(this, arguments));
    }

    (0, _createClass2.default)(PluginHoc, [{
      key: "render",

      /** render */
      value: function render() {
        // eslint-disable-line consistent-return
        var plugins = _.pluginStore.getPlugins(targetName);

        if ((0, _isEmpty.default)(plugins)) {
          return _react.default.createElement(TargetComponent, this.props);
        }

        if (!(0, _isEmpty.default)(plugins.wrap)) {
          var WrapPluginComponent = connectPluginComponent(plugins.wrap[0]);
          return _react.default.createElement(WrapPluginComponent, {
            targetProps: this.props,
            TargetComponent: TargetComponent
          });
        }

        if (!(0, _isEmpty.default)(plugins.add)) {
          var AddPluginComponents = plugins.add.map(function (plugin) {
            return connectPluginComponent(plugin);
          });
          return _react.default.createElement(TargetComponent, (0, _extends2.default)({}, this.props, {
            PluginComponents: AddPluginComponents
          }));
        }
      }
    }]);
    return PluginHoc;
  }(_react.Component);

  PluginHoc.displayName = "WithPlugins(".concat(targetName, ")");
  return PluginHoc;
}
/** Connect plugin component to state */


function connectPluginComponent(plugin) {
  return (0, _reactRedux.connect)(plugin.mapStateToProps, plugin.mapDispatchToProps)(plugin.component);
}
/** withPlugins('MyComponent')(MyComponent) */


var withPlugins = (0, _curry.default)(_withPlugins);
exports.withPlugins = withPlugins;