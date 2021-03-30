"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluginStore = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _update = _interopRequireDefault(require("lodash/update"));

var _ = require(".");

var pluginStore = {
  /**
  * Get plugins for target
  *
  * @param {String} targetName
  * @return {Object | undefined } - looks like:
  *
  *  {
  *    wrap:     [plugin1, ...],
  *    add:      [plugin2, ...],
  *  }
  */
  getPlugins: function getPlugins(target) {
    return this.pluginMap[target];
  },

  /**
   * Store Plugins
   *
   * @param {Array} plugins
   */
  storePlugins: function storePlugins() {
    var plugins = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var _filterPlugins = filterPlugins(plugins),
        validPlugins = _filterPlugins.validPlugins,
        invalidPlugins = _filterPlugins.invalidPlugins;

    logInvalidPlugins(invalidPlugins);
    this.pluginMap = mapPlugins(validPlugins);
  }
};
/**
 * Returns a mapping from plugins to targets and modes
 *
 * @param {Array} plugins
 * @return {Object} - looks like:
 *
 *
 *  {
 *    'WorkspacePanel': {
 *      wrap:     [plugin3, ...],
 *      add:      [plugin4, ...],
 *    },
 *    'Window': {
 *      wrap:     [plugin3, ...],
 *      add:      [plugin4, ...],
 *    }
 *  }
 */

exports.pluginStore = pluginStore;

function mapPlugins(plugins) {
  return plugins.reduce(function (map, plugin) {
    return (0, _update.default)(map, [plugin.target, plugin.mode], function (x) {
      return [].concat((0, _toConsumableArray2.default)(x || []), [plugin]);
    });
  }, {});
}
/** */


function filterPlugins(plugins) {
  var filteredPlugins = {
    invalidPlugins: [],
    validPlugins: []
  };
  plugins.forEach(function (plugin) {
    return (0, _.validatePlugin)(plugin) ? filteredPlugins.validPlugins.push(plugin) : filteredPlugins.invalidPlugins.push(plugin);
  });
  return filteredPlugins;
}
/** */


function logInvalidPlugins(plugins) {
  plugins.forEach(function (plugin) {
    return console.log("Mirador: Plugin ".concat(plugin.name, " is not valid and was rejected."));
  });
}