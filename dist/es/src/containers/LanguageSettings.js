"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _extend = require("../extend");

var actions = _interopRequireWildcard(require("../state/actions"));

var _selectors = require("../state/selectors");

var _LanguageSettings = require("../components/LanguageSettings");

/**
 * Map state to props for connect
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    languages: (0, _selectors.getLanguagesFromConfigWithCurrent)(state)
  };
};
/**
 * Map action dispatches to props for connect
 */


var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var afterSelect = _ref.afterSelect;
  return {
    handleClick: function handleClick(language) {
      dispatch(actions.updateConfig({
        language: language
      }));
      afterSelect && afterSelect();
    }
  };
};

var _default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _extend.withPlugins)('LanguageSettings'))(_LanguageSettings.LanguageSettings);

exports.default = _default;