"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHighlightedAnnotationsOnCanvases = exports.getSelectedAnnotationsOnCanvases = exports.getSelectedAnnotationIds = exports.getAnnotationResourcesByMotivation = void 0;

var _reselect = require("reselect");

var _filter = _interopRequireDefault(require("lodash/filter"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _Annotation = _interopRequireDefault(require("../../lib/Annotation"));

var _canvases = require("./canvases");

var getAnnotationsOnSelectedCanvases = (0, _reselect.createSelector)([_canvases.getSelectedCanvases, function (state) {
  return state.annotations;
}], function (canvases, annotations) {
  if (!annotations || !canvases) return [];
  return (0, _flatten.default)(canvases.map(function (c) {
    return c.id;
  }).map(function (targetId) {
    return annotations[targetId] && Object.values(annotations[targetId]);
  }));
});
var getPresentAnnotationsOnSelectedCanvases = (0, _reselect.createSelector)([getAnnotationsOnSelectedCanvases], function (annotations) {
  return (0, _filter.default)(Object.values(annotations).map(function (annotation) {
    return annotation && new _Annotation.default(annotation.json);
  }), function (annotation) {
    return annotation && annotation.present();
  });
});
/**
* Return an array of annotation resources filtered by the given motivation
* @param {Array} annotations
* @param {Array} motivations
* @return {Array}
*/

var getAnnotationResourcesByMotivation = (0, _reselect.createSelector)([getPresentAnnotationsOnSelectedCanvases, function (state, _ref) {
  var motivations = _ref.motivations;
  return motivations;
}], function (annotations, motivations) {
  return (0, _filter.default)((0, _flatten.default)(annotations.map(function (annotation) {
    return annotation.resources;
  })), function (resource) {
    return resource.motivations.some(function (motivation) {
      return motivations.includes(motivation);
    });
  });
});
/**
 * Return the selected annotations IDs of a given CanvasId
 * @param {Object} state
 * @param {String} windowId
 * @param {Array} targetIds
 * @return {Array}
 */

exports.getAnnotationResourcesByMotivation = getAnnotationResourcesByMotivation;
var getSelectedAnnotationIds = (0, _reselect.createSelector)([function (state, _ref2) {
  var windowId = _ref2.windowId;
  return state.windows[windowId].selectedAnnotations;
}, _canvases.getSelectedCanvases], function (selectedAnnotations, canvases) {
  return (0, _flatten.default)(canvases.map(function (c) {
    return c.id;
  }).map(function (targetId) {
    return selectedAnnotations && selectedAnnotations[targetId];
  }));
});
exports.getSelectedAnnotationIds = getSelectedAnnotationIds;
var getSelectedAnnotationsOnCanvases = (0, _reselect.createSelector)([getPresentAnnotationsOnSelectedCanvases, getSelectedAnnotationIds], function (canvasAnnotations, selectedAnnotationIds) {
  return canvasAnnotations.map(function (annotation) {
    return {
      id: annotation['@id'] || annotation.id,
      resources: annotation.resources.filter(function (r) {
        return selectedAnnotationIds && selectedAnnotationIds.includes(r.id);
      })
    };
  });
});
exports.getSelectedAnnotationsOnCanvases = getSelectedAnnotationsOnCanvases;
var getHighlightedAnnotationsOnCanvases = (0, _reselect.createSelector)([getPresentAnnotationsOnSelectedCanvases, function (state, _ref3) {
  var windowId = _ref3.windowId;
  return state.windows[windowId].highlightedAnnotation;
}, function (state, _ref4) {
  var windowId = _ref4.windowId;
  return state.windows[windowId].displayAllAnnotations;
}], function (canvasAnnotations, highlightedAnnotation, displayAllAnnotations) {
  if (displayAllAnnotations) return canvasAnnotations;

  if (highlightedAnnotation) {
    return canvasAnnotations.map(function (annotation) {
      return {
        id: annotation['@id'] || annotation.id,
        resources: annotation.resources.filter(function (r) {
          return highlightedAnnotation && highlightedAnnotation === r.id;
        })
      };
    });
  }

  return [];
});
exports.getHighlightedAnnotationsOnCanvases = getHighlightedAnnotationsOnCanvases;