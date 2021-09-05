"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabTitle = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n  padding: 0 30px;\n  font-size: 1.3rem;\n  letter-spacing: 2px;\n  color: ", ";\n  transition: all 0.3s linear;\n  font-weight: ", ";\n  &:hover,\n  &:active {\n    transform: scale(1.1);\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabTitle = _macro["default"].a(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeight.bold;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white1;
});

exports.TabTitle = TabTitle;