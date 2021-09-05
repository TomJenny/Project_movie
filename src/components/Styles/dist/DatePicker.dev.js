"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePickerStyled = void 0;

var _antd = require("antd");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 35px;\n  background: transparent;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n  box-shadow: none !important;\n  border-bottom: 2px solid ", ";\n  &&&.ant-picker:hover,\n  .ant-picker-focused {\n    border-color: ", "!important;\n  }\n  & input {\n    color: white;\n    box-shadow: none !important;\n  }\n  &&& .ant-picker-suffix {\n    color: white;\n  }\n  &&&.ant-picker {\n    background-color: transparent !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DatePickerStyled = (0, _macro["default"])(_antd.DatePicker)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white3;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white1;
});
exports.DatePickerStyled = DatePickerStyled;