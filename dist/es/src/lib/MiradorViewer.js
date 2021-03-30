"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _reactRedux = require("react-redux");

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _App = _interopRequireDefault(require("../containers/App"));

var _extend = require("../extend");

var _createStore = _interopRequireDefault(require("../state/createStore"));

var actions = _interopRequireWildcard(require("../state/actions"));

var _settings = _interopRequireDefault(require("../config/settings"));

/**
 * Default Mirador instantiation
 */
var MiradorViewer =
/*#__PURE__*/
function () {
  /**
   */
  function MiradorViewer(config, plugins) {
    (0, _classCallCheck2.default)(this, MiradorViewer);

    _extend.pluginStore.storePlugins(plugins);

    var pluginReducers = getReducersFromPlugins(plugins);
    this.store = (0, _createStore.default)(pluginReducers);
    this.config = config;
    this.processConfig();
    var viewer = {
      actions: actions,
      store: this.store
    };

    _reactDom.default.render(_react.default.createElement(_reactRedux.Provider, {
      store: this.store
    }, _react.default.createElement(_App.default, null)), document.getElementById(config.id));

    return viewer;
  }
  /**
   * Process config into actions
   */


  (0, _createClass2.default)(MiradorViewer, [{
    key: "processConfig",
    value: function processConfig() {
      var _this = this;

      var mergedConfig = (0, _deepmerge.default)(_settings.default, this.config);
      var action = actions.setConfig(mergedConfig);
      this.store.dispatch(action);
      mergedConfig.windows.forEach(function (miradorWindow) {
        var thumbnailNavigationPosition;
        var view;

        if (miradorWindow.thumbnailNavigationPosition !== undefined) {
          thumbnailNavigationPosition = miradorWindow.thumbnailNavigationPosition;
        } else {
          thumbnailNavigationPosition = mergedConfig.thumbnailNavigation.defaultPosition;
        }

        if (miradorWindow.view !== undefined) {
          view = miradorWindow.view;
        } else {
          view = mergedConfig.window.defaultView;
        }

        _this.store.dispatch(actions.fetchManifest(miradorWindow.loadedManifest));

        _this.store.dispatch(actions.addWindow({
          canvasIndex: miradorWindow.canvasIndex || 0,
          manifestId: miradorWindow.loadedManifest,
          thumbnailNavigationPosition: thumbnailNavigationPosition,
          view: view
        }));
      });
      Object.keys(mergedConfig.manifests || {}).forEach(function (manifestId) {
        _this.store.dispatch(actions.requestManifest(manifestId, mergedConfig.manifests[manifestId]));
      });
    }
  }]);
  return MiradorViewer;
}();
/** Return reducers from plugins */


function getReducersFromPlugins(plugins) {
  return plugins && plugins.reduce(function (acc, plugin) {
    return (0, _objectSpread2.default)({}, acc, plugin.reducers);
  }, {});
}

var _default = MiradorViewer;
exports.default = _default;