"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItemStyled = void 0;

var _antd = require("antd");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  color: white !important;\n\n  &&& .ant-input-affix-wrapper {\n    border: none;\n    box-shadow: none;\n    background: transparent !important;\n    & .anticon.ant-input-clear-icon {\n      color: white;\n      top: 5px;\n      right: 15%;\n    }\n  }\n  &&& .ant-form-item-explain.ant-form-item-explain-error {\n    color: ", ";\n    font-weight: ", ";\n    margin-left: 32px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Item = _antd.Form.Item;
var FormItemStyled = (0, _macro["default"])(Item)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.medium;
});
exports.FormItemStyled = FormItemStyled;