"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _translation = _interopRequireDefault(require("./locales/de/translation.json"));

var _translation2 = _interopRequireDefault(require("./locales/en/translation.json"));

// Load translations for each language
var resources = {
  de: _translation.default,
  en: _translation2.default
};

_i18next.default.use(_reactI18next.initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false // react is already safe from xss

  },
  lng: 'en',
  resources: resources
});

var _default = _i18next.default;
exports.default = _default;