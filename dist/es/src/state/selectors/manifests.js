"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getManifest = getManifest;
exports.getManifestThumbnail = getManifestThumbnail;
exports.getDestructuredMetadata = getDestructuredMetadata;
exports.getMetadataLocales = exports.getDefaultManifestLocale = exports.getManifestMetadata = exports.getManifestUrl = exports.getManifestDescription = exports.getManifestTitle = exports.getManifestCanvases = exports.getManifestProvider = exports.getManifestLogo = exports.getManifestoInstance = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _reselect = require("reselect");

var _manifesto = _interopRequireWildcard(require("manifesto.js"));

var _ManifestoCanvas = _interopRequireDefault(require("../../lib/ManifestoCanvas"));

/** Get the relevant manifest information */
function getManifest(state, _ref) {
  var manifestId = _ref.manifestId,
      windowId = _ref.windowId;
  return state.manifests[manifestId || windowId && state.windows && state.windows[windowId] && state.windows[windowId].manifestId];
}
/** */


function getLocale(state, _ref2) {
  var companionWindowId = _ref2.companionWindowId;
  return companionWindowId && state.companionWindows[companionWindowId] && state.companionWindows[companionWindowId].locale || state.config && state.config.language;
}
/** Instantiate a manifesto instance */


var getManifestoInstance = (0, _reselect.createSelector)([getManifest, getLocale], function (manifest, locale) {
  return manifest && manifest.json && _manifesto.default.create(manifest.json, locale ? {
    locale: locale
  } : undefined);
});
/**
 * Get the logo for a manifest
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @return {String|null}
 */

exports.getManifestoInstance = getManifestoInstance;
var getManifestLogo = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return manifest && manifest.getLogo();
});
/**
* Return the IIIF v3 provider of a manifest or null
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {String|null}
*/

exports.getManifestLogo = getManifestLogo;
var getManifestProvider = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return manifest && manifest.getProperty('provider') && manifest.getProperty('provider')[0].label && _manifesto.LanguageMap.parse(manifest.getProperty('provider')[0].label, manifest.options.locale).map(function (label) {
    return label.value;
  })[0];
});
/**
* Return the supplied thumbnail for a manifest or null
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {String|null}
*/

exports.getManifestProvider = getManifestProvider;

function getManifestThumbnail(state, props) {
  /** */
  function getTopLevelManifestThumbnail() {
    var manifest = getManifestoInstance(state, props);
    return manifest && manifest.getThumbnail() && manifest.getThumbnail().id;
  }
  /** */


  function getFirstCanvasThumbnail() {
    var canvases = getManifestCanvases(state, props);
    return canvases.length > 0 && canvases[0].getThumbnail() && canvases[0].getThumbnail().id;
  }
  /** */


  function generateThumbnailFromFirstCanvas() {
    var canvases = getManifestCanvases(state, props);
    if (canvases.length === 0) return null;
    var manifestoCanvas = new _ManifestoCanvas.default(canvases[0]);
    return manifestoCanvas.thumbnail(null, 80);
  }

  return getTopLevelManifestThumbnail() || getFirstCanvasThumbnail() || generateThumbnailFromFirstCanvas();
}
/**
* Return the logo of a manifest or null
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {String|null}
*/


var getManifestCanvases = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  if (!manifest) {
    return [];
  }

  if (!manifest.getSequences || !manifest.getSequences()[0]) {
    return [];
  }

  return manifest.getSequences()[0].getCanvases();
});
/**
* Return manifest title
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {String}
*/

exports.getManifestCanvases = getManifestCanvases;
var getManifestTitle = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return manifest && manifest.getLabel().map(function (label) {
    return label.value;
  })[0];
});
/**
* Return manifest description
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {String}
*/

exports.getManifestTitle = getManifestTitle;
var getManifestDescription = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return manifest && manifest.getDescription().map(function (label) {
    return label.value;
  })[0];
});
/**
* Return manifest title
* @param {object} state
* @param {object} props
* @param {string} props.manifestId
* @param {string} props.windowId
* @return {String}
*/

exports.getManifestDescription = getManifestDescription;
var getManifestUrl = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return manifest && manifest.id;
});
/**
* Return metadata in a label / value structure
* This is a potential seam for pulling the i18n locale from
* state and plucking out the appropriate language.
* For now we're just getting the first.
* @param {object} Manifesto IIIF Resource (e.g. canvas, manifest)
* @return {Array[Object]}
*/

exports.getManifestUrl = getManifestUrl;

function getDestructuredMetadata(iiifResource) {
  return iiifResource && iiifResource.getMetadata().map(function (labelValuePair) {
    return {
      label: labelValuePair.getLabel(),
      value: labelValuePair.getValue()
    };
  });
}
/**
 * Return manifest metadata in a label / value structure
 * @param {object} state
 * @param {object} props
 * @param {string} props.manifestId
 * @param {string} props.windowId
 * @return {Array[Object]}
 */


var getManifestMetadata = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return manifest && getDestructuredMetadata(manifest);
});
/** */

exports.getManifestMetadata = getManifestMetadata;

function getLocalesForStructure(item) {
  var languages = [];

  if (Array.isArray(item)) {
    languages.push.apply(languages, (0, _toConsumableArray2.default)(item.filter(function (i) {
      return (0, _typeof2.default)(i) === 'object' && i['@language'];
    }).map(function (i) {
      return i['@language'];
    })));
  } else if ((0, _typeof2.default)(item) === 'object') {
    if (item['@language']) languages.push(item['@language']);
  }

  return languages;
}
/** */


function getLocales(resource) {
  if (!resource) return [];
  var metadata = resource.getProperty('metadata') || [];
  var languages = {};

  for (var i = 0; i < metadata.length; i += 1) {
    var item = metadata[i];
    getLocalesForStructure(item.label).forEach(function (l) {
      languages[l] = true;
    });
    getLocalesForStructure(item.value).forEach(function (l) {
      languages[l] = true;
    });
  }

  return Object.keys(languages);
}

var getDefaultManifestLocale = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return manifest && manifest.options && manifest.options.locale && manifest.options.locale.replace(/-.*$/, '');
});
exports.getDefaultManifestLocale = getDefaultManifestLocale;
var getMetadataLocales = (0, _reselect.createSelector)([getManifestoInstance], function (manifest) {
  return getLocales(manifest);
});
exports.getMetadataLocales = getMetadataLocales;