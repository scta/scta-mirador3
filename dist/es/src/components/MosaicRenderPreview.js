"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MosaicRenderPreview = MosaicRenderPreview;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

/**
 * MosaicRenderPreview is used to for the preview when dragging a mosaic window/tile
*/
function MosaicRenderPreview(props) {
  var classes = props.classes,
      t = props.t,
      title = props.title;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)('mosaic-window-body', classes.preview)
  }, t('previewWindowTitle', {
    title: title
  }));
}

MosaicRenderPreview.propTypes = {
  classes: _propTypes.default.object,
  // eslint-disable-line react/forbid-prop-types
  t: _propTypes.default.func,
  title: _propTypes.default.string,
  windowId: _propTypes.default.string.isRequired // eslint-disable-line react/no-unused-prop-types

};
MosaicRenderPreview.defaultProps = {
  classes: {},
  t: function t(k) {
    return k;
  },
  title: ''
};