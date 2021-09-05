"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackTopStyled = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(255, 0, 0, 0.7);\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n\n  text-align: center;\n  line-height: 50px;\n\n  &:hover {\n    background-color: ", ";\n  }\n  & svg {\n    color: white;\n    font-size: 1.4rem;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackTopStyled = _macro["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});

exports.BackTopStyled = BackTopStyled;