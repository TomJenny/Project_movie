"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputNumberStyled = void 0;

var _antd = require("antd");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 35px;\n  background: transparent !important;\n  border-left: none;\n  border-top: none;\n  border-right: none;\n  box-shadow: none !important;\n  border-bottom: 2px solid ", ";\n  &.ant-input-number {\n    color: white;\n  }\n\n  &.ant-input-number:hover {\n    border-color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var InputNumberStyled = (0, _macro["default"])(_antd.InputNumber)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white3;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white1;
});
exports.InputNumberStyled = InputNumberStyled;