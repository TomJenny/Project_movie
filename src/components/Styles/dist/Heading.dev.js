"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingH1Styled = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 30px;\n  position: relative;\n  padding-left: 10px;\n  &::after {\n    content: \"\";\n    display: block;\n\n    position: absolute;\n    left: 0;\n\n    bottom: 50%;\n    transform: translateY(50%);\n\n    width: 4px;\n    height: 65%;\n\n    background: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeadingH1Styled = _macro["default"].h1(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white2;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
});

exports.HeadingH1Styled = HeadingH1Styled;