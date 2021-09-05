"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageNotFoundContainer = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  .ant-result-title,\n  .ant-result-subtitle {\n    color: ", "!important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var PageNotFoundContainer = _macro["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white1;
});

exports.PageNotFoundContainer = PageNotFoundContainer;