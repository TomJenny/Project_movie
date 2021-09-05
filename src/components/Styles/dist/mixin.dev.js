"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.font = exports.GlassEffect = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: rgba(", ", ", ");\n  box-shadow: ", ";\n  backdrop-filter: blur(", ");\n  -webkit-backdrop-filter: blur(", ");\n  border-radius: ", ";\n  border: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GlassEffect = function GlassEffect(_ref) {
  var color = _ref.color,
      trans = _ref.trans,
      blur = _ref.blur,
      border = _ref.border,
      radius = _ref.radius,
      boxshadow = _ref.boxshadow;
  return (0, _styledComponents.css)(_templateObject(), color || "255,255,255", trans || 0.2, boxshadow || "0 8px 32px 0 rgba(31, 38, 135, 0.37)", blur || "2px", blur || "2px", radius || "10px", border || "1px solid rgba(255, 255, 255, 0.18)");
};

exports.GlassEffect = GlassEffect;

var font = function font(_ref2) {
  var color = _ref2.color,
      size = _ref2.size;
  return "\n  color: ".concat(color || "black", ";\n  font-size: ").concat(size || "1rem", ";\n");
};

exports.font = font;