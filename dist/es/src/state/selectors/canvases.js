"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedCanvas = getSelectedCanvas;
exports.selectNextAuthService = selectNextAuthService;
exports.selectFailedAuthService = selectFailedAuthService;
exports.selectAuthStatus = selectAuthStatus;
exports.selectCanvasAuthService = exports.selectInfoResponse = exports.selectInfoResponses = exports.getCanvasDescription = exports.getCanvasLabel = exports.getSelectedCanvases = exports.getCanvas = exports.getCanvases = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _reselect = require("reselect");

var _manifesto = require("manifesto.js");

var _CanvasGroupings = _interopRequireDefault(require("../../lib/CanvasGroupings"));

var _manifests = require("./manifests");

var getCanvases = (0, _reselect.createSelector)([_manifests.getManifestoInstance], function (manifest) {
  return manifest && manifest.getSequences()[0].getCanvases();
});
/**
* Return the canvas selected by an index
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {Object}
*/

exports.getCanvases = getCanvases;
var getCanvas = (0, _reselect.createSelector)([_manifests.getManifestoInstance, function (state, _ref) {
  var windowId = _ref.windowId,
      canvasIndex = _ref.canvasIndex;
  return canvasIndex === 'selected' ? state.windows[windowId].canvasIndex : canvasIndex;
}], function (manifest, canvasIndex) {
  return manifest && manifest.getSequences()[0].getCanvasByIndex(canvasIndex);
});
/**
* Return the current canvas selected in a window
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {Object}
*/

exports.getCanvas = getCanvas;

function getSelectedCanvas(state, props) {
  return getCanvas(state, (0, _objectSpread2.default)({}, props, {
    canvasIndex: 'selected'
  }));
}
/**
* Return the current canvases selected in a window
* For book view returns 2, for single returns 1
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {Array}
*/


var getSelectedCanvases = (0, _reselect.createSelector)([getCanvases, function (state, _ref2) {
  var windowId = _ref2.windowId;
  return state.windows[windowId];
}], function (canvases, _ref3) {
  var canvasIndex = _ref3.canvasIndex,
      view = _ref3.view;
  return canvases && new _CanvasGroupings.default(canvases, view).getCanvases(canvasIndex);
});
/**
* Return canvas label, or alternatively return the given index + 1 to be displayed
* @param {object} canvas
* @return {String|Integer}
*/

exports.getSelectedCanvases = getSelectedCanvases;
var getCanvasLabel = (0, _reselect.createSelector)([getCanvas], function (canvas) {
  return canvas && (canvas.getLabel().length > 0 ? canvas.getLabel().map(function (label) {
    return label.value;
  })[0] : String(canvas.index + 1));
});
/**
* Return canvas description
* @param {object} canvas
* @param {String}
*/

exports.getCanvasLabel = getCanvasLabel;
var getCanvasDescription = (0, _reselect.createSelector)([getCanvas], function (canvas) {
  return canvas && canvas.getProperty('description');
});
/** */

exports.getCanvasDescription = getCanvasDescription;

var selectInfoResponses = function selectInfoResponses(state) {
  return state.infoResponses;
};

exports.selectInfoResponses = selectInfoResponses;
var selectInfoResponse = (0, _reselect.createSelector)([getCanvas, selectInfoResponses], function (canvas, infoResponses) {
  return canvas && infoResponses[canvas.getImages()[0].getResource().getServices()[0].id] && !infoResponses[canvas.getImages()[0].getResource().getServices()[0].id].isFetching && infoResponses[canvas.getImages()[0].getResource().getServices()[0].id];
});
exports.selectInfoResponse = selectInfoResponse;
var authServiceProfiles = {
  clickthrough: true,
  external: true,
  kiosk: true,
  login: true
};
/**
 *
 */

function selectNextAuthService(_ref4, resource) {
  var auth = _ref4.auth;
  var filter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : authServiceProfiles;

  var externalService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/external');

  if (externalService) {
    if (!auth[externalService.id]) {
      return filter.external && externalService;
    }

    if (auth[externalService.id].isFetching || auth[externalService.id].ok) return null;
  }

  var kioskService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/kiosk');

  if (kioskService) {
    if (!auth[kioskService.id]) {
      return filter.kiosk && kioskService;
    }

    if (auth[kioskService.id].isFetching || auth[kioskService.id].ok) return null;
  }

  var clickthroughService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/clickthrough');

  if (clickthroughService) {
    if (!auth[clickthroughService.id]) {
      return filter.clickthrough && clickthroughService;
    }

    if (auth[clickthroughService.id].isFetching || auth[clickthroughService.id].ok) return null;
  }

  var loginService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/login');

  if (loginService) {
    if (!auth[loginService.id]) {
      return filter.login && loginService;
    }
  }

  return null;
}
/** */


function selectFailedAuthService(state, resource) {
  var loginService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/login');

  if (selectAuthStatus(state, loginService) === 'failed') return loginService;

  var clickthroughService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/clickthrough');

  if (selectAuthStatus(state, clickthroughService) === 'failed') return clickthroughService;

  var kioskService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/kiosk');

  if (selectAuthStatus(state, kioskService) === 'failed') return kioskService;

  var externalService = _manifesto.Utils.getService((0, _objectSpread2.default)({}, resource, {
    options: {}
  }), 'http://iiif.io/api/auth/1/external');

  if (selectAuthStatus(state, externalService) === 'failed') return externalService;
  return null;
}

var selectCanvasAuthService = (0, _reselect.createSelector)([selectInfoResponse, function (state) {
  return state;
}], function (infoResponse, state) {
  var resource = infoResponse && infoResponse.json;
  if (!resource) return undefined;
  return selectNextAuthService(state, resource) || selectFailedAuthService(state, resource);
});
/** */

exports.selectCanvasAuthService = selectCanvasAuthService;

function selectAuthStatus(_ref5, service) {
  var auth = _ref5.auth;
  if (!service) return null;
  if (!auth[service.id]) return null;
  if (auth[service.id].isFetching) return 'fetching';
  if (auth[service.id].ok) return 'ok';
  return 'failed';
}