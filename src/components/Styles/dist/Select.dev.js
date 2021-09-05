"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectStyled = void 0;

var _antd = require("antd");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0;\n  font-size: 16px;\n  color: white;\n  width: 90% !important;\n\n  margin-left: 35px !important;\n\n  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {\n    padding: 0;\n  }\n\n  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {\n    background: transparent !important;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 2px solid ", ";\n  }\n  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)\n    .ant-select-selector {\n    border-color: ", " !important;\n    box-shadow: none;\n  }\n  & .ant-select-arrow {\n    color: white;\n  }\n  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input).ant-select-open\n    .ant-select-arrow {\n    transition: all 0.2s ease;\n    transform: rotate(180deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SelectStyled = (0, _macro["default"])(_antd.Select)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white3;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white1;
});
exports.SelectStyled = SelectStyled;