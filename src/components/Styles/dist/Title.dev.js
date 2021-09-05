"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleSection = exports.TitleTabsStyled = void 0;

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  padding: 15px 10px;\n  letter-spacing: 2px !important;\n\n  color: ", ";\n  font-size: 1.5rem;\n  text-align: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 0 20px;\n\n  font-size: 1.1rem;\n  color: ", ";\n  font-weight: ", ";\n  letter-spacing: 1px !important;\n  text-transform: uppercase !important;\n  transition: all 0.3s linear;\n\n  &:hover {\n    letter-spacing: 2px !important;\n    transform: scale(1.1);\n    color: ", ";\n    filter: drop-shadow(0 2px 4px ", ");\n  }\n\n  ", " {\n    font-size: 1rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TitleTabsStyled = _macro["default"].a(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white3;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeight.medium;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white3;
}, (0, _styledBreakpoints.down)("sm"));

exports.TitleTabsStyled = TitleTabsStyled;

var TitleSection = _macro["default"].h1(_templateObject2(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white1;
});

exports.TitleSection = TitleSection;