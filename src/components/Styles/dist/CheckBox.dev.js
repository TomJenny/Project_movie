"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxStyled = void 0;

var _Checkbox = _interopRequireDefault(require("antd/lib/checkbox/Checkbox"));

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &&& .ant-checkbox-checked .ant-checkbox-inner {\n    background-color: ", ";\n    border-color: ", ";\n  }\n  &&& .ant-checkbox-checked::after {\n    border: 1px solid ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckboxStyled = (0, _macro["default"])(_Checkbox["default"])(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white1;
});
exports.CheckboxStyled = CheckboxStyled;