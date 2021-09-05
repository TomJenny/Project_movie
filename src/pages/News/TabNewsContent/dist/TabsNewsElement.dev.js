"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsNewsButton = exports.NewsItemChat = exports.NewsItemLike = exports.NewsItemSocial = exports.NewsItemContent = exports.NewsItemTitle = exports.NewsItemImage = exports.NewsItemBackgroundImg = exports.NewsItemContainer = exports.TabsNewsContainer = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireWildcard(require("styled-components/macro"));

var _Button = require("../../../components/Styles/Button");

var _GlobalStyles = require("../../../components/Styles/GlobalStyles");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 35px 10px;\n  width: 100px;\n  height: 35px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 20px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1.2rem;\n  line-height: 1.2rem;\n  display: flex;\n  align-items: end;\n  transition: all 0.2s;\n  &:hover {\n    color: white;\n  }\n  & svg:hover {\n    transform: scale(1.1);\n  }\n  & span {\n    margin-left: 5px;\n    font-size: 0.8rem;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 25px;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  height: 55px;\n  margin-bottom: 15px;\n  padding: 0 5px 0 0;\n\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 13px;\n  text-align: justify;\n  line-height: 19px;\n  letter-spacing: 0.17;\n  text-overflow: hidden;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      display: inline-block;\n      width: calc(100% - 70px);\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  height: 39px;\n\n  color: white;\n  font-size: 16px;\n  text-overflow: ellipsis;\n  line-height: 20px;\n  transition: color 0.2s;\n  margin-bottom: 5px;\n\n  &:hover {\n    color: red;\n  }\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  display: block;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      width: 50px;\n      height: 50px;\n      display: inline-block;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  overflow: hidden;\n\n  border-radius: 4px;\n  width: 100%;\n  height: 55%;\n\n  background-color: rgba(255, 255, 255, 0.5);\n  margin-bottom: 10px;\n\n  &:hover {\n    filter: brightness(1.2);\n  }\n\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      margin: 0;\n      display: flex;\n      align-items: start;\n      justify-content: space-between;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 7.5px;\n  margin: 0 0 20px;\n  width: 100%;\n  height: auto;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 100px;\n\n  &&& .ant-tabs-ink-bar {\n    display: none;\n  }\n  &&& .ant-tabs-nav::before {\n    display: none;\n  }\n  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn a,\n  .ant-tabs-tab-btn:focus a,\n  .ant-tabs-tab-remove:focus a,\n  .ant-tabs-tab-btn:active a,\n  .ant-tabs-tab-remove:active a {\n    transform: scale(1.1);\n    color: white;\n    letter-spacing: 2px !important;\n  }\n  &&& .ant-tabs-tab + .ant-tabs-tab {\n    margin: 0;\n  }\n  ", " {\n    &&& .ant-tabs-nav-list {\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabsNewsContainer = (0, _macro["default"])(_GlobalStyles.Container)(_templateObject(), (0, _styledBreakpoints.down)("xs"));
exports.TabsNewsContainer = TabsNewsContainer;

var NewsItemContainer = _macro["default"].div(_templateObject2(), function (props) {
  return props.small === "true" && (0, _macro.css)(_templateObject3());
});

exports.NewsItemContainer = NewsItemContainer;
var NewsItemBackgroundImg = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject4(), function (props) {
  return props.small === "true" && (0, _macro.css)(_templateObject5());
});
exports.NewsItemBackgroundImg = NewsItemBackgroundImg;

var NewsItemImage = _macro["default"].img(_templateObject6());

exports.NewsItemImage = NewsItemImage;

var NewsItemTitle = _macro["default"].p(_templateObject7(), function (props) {
  return props.small === "true" && (0, _macro.css)(_templateObject8());
});

exports.NewsItemTitle = NewsItemTitle;

var NewsItemContent = _macro["default"].p(_templateObject9());

exports.NewsItemContent = NewsItemContent;

var NewsItemSocial = _macro["default"].div(_templateObject10());

exports.NewsItemSocial = NewsItemSocial;
var NewsItemLike = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject11());
exports.NewsItemLike = NewsItemLike;
var NewsItemChat = (0, _macro["default"])(NewsItemLike)(_templateObject12());
exports.NewsItemChat = NewsItemChat;
var TabsNewsButton = (0, _macro["default"])(_Button.ButtonPrimaryStyled)(_templateObject13());
exports.TabsNewsButton = TabsNewsButton;