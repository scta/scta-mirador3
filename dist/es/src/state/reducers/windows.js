"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.windowsReducer = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread21 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _immutable = require("immutable");

var _actionTypes = _interopRequireDefault(require("../actions/action-types"));

/**
 * windowsReducer
 */
var windowsReducer = function windowsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.default.ADD_WINDOW:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.window.id, action.window));

    case _actionTypes.default.MAXIMIZE_WINDOW:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        maximized: true
      })));

    case _actionTypes.default.MINIMIZE_WINDOW:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        maximized: false
      })));

    case _actionTypes.default.UPDATE_WINDOW:
      return (0, _immutable.updateIn)(state, [action.id], function (orig) {
        return (0, _immutable.merge)(orig, action.payload);
      });

    case _actionTypes.default.REMOVE_WINDOW:
      return Object.keys(state).reduce(function (object, key) {
        if (key !== action.windowId) {
          object[key] = state[key]; // eslint-disable-line no-param-reassign
        }

        return object;
      }, {});

    case _actionTypes.default.TOGGLE_WINDOW_SIDE_BAR:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        sideBarOpen: !state[action.windowId].sideBarOpen
      })));

    case _actionTypes.default.SET_WINDOW_VIEW_TYPE:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        view: action.viewType
      })));

    case _actionTypes.default.SET_WINDOW_SIDE_BAR_PANEL:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        sideBarPanel: action.panelType
      })));

    case _actionTypes.default.UPDATE_WINDOW_POSITION:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.payload.windowId, (0, _objectSpread21.default)({}, state[action.payload.windowId], {
        x: action.payload.position.x,
        y: action.payload.position.y
      })));

    case _actionTypes.default.SET_WINDOW_SIZE:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.payload.windowId, (0, _objectSpread21.default)({}, state[action.payload.windowId], {
        height: action.payload.size.height,
        width: action.payload.size.width,
        x: action.payload.size.x,
        y: action.payload.size.y
      })));

    case _actionTypes.default.SET_CANVAS:
      return setCanvasIndex(state, action.windowId, function (currentIndex) {
        return action.canvasIndex;
      });

    case _actionTypes.default.ADD_COMPANION_WINDOW:
      if (action.payload.position === 'left') {
        var companionWindowIds = state[action.windowId].companionWindowIds;
        var companionWindows = action.companionWindows;
        var newCompanionWindowIds = companionWindowIds.filter(function (id) {
          return companionWindows[id].position !== action.payload.position;
        });
        return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
          companionAreaOpen: true,
          companionWindowIds: newCompanionWindowIds.concat([action.id]),
          sideBarPanel: action.payload.content
        })));
      }

      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        companionWindowIds: state[action.windowId].companionWindowIds.concat([action.id])
      })));

    case _actionTypes.default.REMOVE_COMPANION_WINDOW:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        companionWindowIds: state[action.windowId].companionWindowIds.filter(function (id) {
          return id !== action.id;
        })
      })));

    case _actionTypes.default.SELECT_ANNOTATION:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        selectedAnnotations: (0, _objectSpread21.default)({}, state[action.windowId].selectedAnnotations, (0, _defineProperty2.default)({}, action.canvasId, [].concat((0, _toConsumableArray2.default)((state[action.windowId].selectedAnnotations || {})[action.canvasId] || []), [action.annotationId])))
      })));

    case _actionTypes.default.DESELECT_ANNOTATION:
      {
        var selectedAnnotations = updatedSelectedAnnotations(state, action);
        return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
          selectedAnnotations: selectedAnnotations
        })));
      }

    case _actionTypes.default.HIGHLIGHT_ANNOTATION:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        highlightedAnnotation: action.annotationId
      })));

    case _actionTypes.default.TOGGLE_ANNOTATION_DISPLAY:
      return (0, _objectSpread21.default)({}, state, (0, _defineProperty2.default)({}, action.windowId, (0, _objectSpread21.default)({}, state[action.windowId], {
        displayAllAnnotations: !state[action.windowId].displayAllAnnotations
      })));

    case _actionTypes.default.IMPORT_MIRADOR_STATE:
      return action.state.windows;

    default:
      return state;
  }
};
/**
 * Handle removing IDs from selectedAnnotations
 * where empty canvasIDs are removed from state as well
 */


exports.windowsReducer = windowsReducer;

function updatedSelectedAnnotations(state, action) {
  var filteredIds = state[action.windowId].selectedAnnotations[action.canvasId].filter(function (id) {
    return id !== action.annotationId;
  });

  if (filteredIds.length > 0) {
    return (0, _objectSpread21.default)({}, state[action.windowId].selectedAnnotations, (0, _defineProperty2.default)({}, action.canvasId, filteredIds));
  }

  return (0, _immutable.remove)(state[action.windowId].selectedAnnotations, action.canvasId);
}
/**
 * @param {Object} state
 * @param {String} windowId
 * @param {Function} getIndex - gets curent canvas index passed and should return new index
 */


function setCanvasIndex(state, windowId, getIndex) {
  return Object.values(state).reduce(function (object, window) {
    if (window.id === windowId) {
      return (0, _objectSpread21.default)({}, object, (0, _defineProperty2.default)({}, window.id, (0, _objectSpread21.default)({}, window, {
        canvasIndex: getIndex(window.canvasIndex)
      })));
    }

    return (0, _objectSpread21.default)({}, object, (0, _defineProperty2.default)({}, window.id, window));
  }, {});
}