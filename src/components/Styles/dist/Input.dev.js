"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextAreaStyled = exports.SearchStyled = exports.InputPasswordStyled = exports.InputStyled = void 0;

var _antd = require("antd");

var _TextArea = _interopRequireDefault(require("antd/lib/input/TextArea"));

var _macro = _interopRequireWildcard(require("styled-components/macro"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      width: 100%;\n\n      &.ant-input {\n        color: ", ";\n      }\n\n      &.ant-input:focus {\n        border-color: ", ";\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  &.ant-input {\n    background: transparent !important;\n    color:  ", ";\n    border-left: none;\n    border-top: none;\n    border-right: none;\n    box-shadow: none!important;\n    border-bottom: 2px solid ", ";\n    width: 85%;\n  \n\n  &&& span.anticon.ant-input-clear-icon {\n    color: ", ";\n  }\n\n  &.ant-input:focus {\n    border-color: ", ";\n\n  }\n\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  position:relative;\n  &&& .ant-input-group-addon {\n    background-color: transparent !important;\n    color: white !important;\n    border: none !important;\n    margin-bottom: 0;\n  }\n  &&& .ant-btn-primary {\n    background-color: transparent !important;\n    color: white !important;\n    border: none !important;\n    position: absolute !important;\n    top: 0;\n    left: -30px;\n    &[ant-click-animating-without-extra-node]:after {\n      -webkit-animation: none !important;\n      -moz-animation: none !important;\n      -o-animation: none !important;\n      -ms-animation: none !important;\n      animation: none !important;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  & .ant-input-suffix {\n    & svg {\n      color: white !important;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  & .ant-input[disabled] {\n    color: white;\n  }\n  \n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 20px;\n\n  background-color: transparent !important;\n  color: white !important;\n\n  &&& input {\n    background-color: transparent !important;\n    color: white;\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    border-bottom: 2px solid rgba(255, 255, 255, 0.5) !important;\n\n    font-size: 16px;\n    box-shadow: none !important;\n\n    &:focus {\n      border-bottom: 2px solid white !important;\n    }\n  }\n\n  &.ant-input-affix-wrapper,\n  &.ant-form-item-has-error {\n    border: none;\n    box-shadow: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Password = _antd.Input.Password,
    Search = _antd.Input.Search;
var inputCss = (0, _macro.css)(_templateObject());
var InputStyled = (0, _macro["default"])(_antd.Input)(_templateObject2(), inputCss);
exports.InputStyled = InputStyled;
var InputPasswordStyled = (0, _macro["default"])(Password)(_templateObject3(), inputCss);
exports.InputPasswordStyled = InputPasswordStyled;
var SearchStyled = (0, _macro["default"])(Search)(_templateObject4(), inputCss);
exports.SearchStyled = SearchStyled;
var TextAreaStyled = (0, _macro["default"])(_TextArea["default"])(_templateObject5(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.white3;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white3;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white1;
}, function (props) {
  return props.iscomment && (0, _macro.css)(_templateObject6(), function (_ref5) {
    var theme = _ref5.theme;
    return theme.colors.secondary;
  }, function (_ref6) {
    var theme = _ref6.theme;
    return theme.colors.white5;
  });
});
exports.TextAreaStyled = TextAreaStyled;