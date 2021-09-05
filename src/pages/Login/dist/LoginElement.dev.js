"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginIconSocial = exports.LoginDivider = exports.LoginFooter = exports.LoginFormItemButton = exports.LoginFormItemCheckbox = exports.LoginInputPassword = exports.LoginInput = exports.LoginFormItemInput = exports.LoginForm = exports.LoginTitle = exports.LoginContainer = exports.LoginLogo = exports.LoginLogoContent = void 0;

var _antd = require("antd");

var _Form = _interopRequireDefault(require("antd/lib/form/Form"));

var _FormItem = _interopRequireDefault(require("antd/lib/form/FormItem"));

var _Password = _interopRequireDefault(require("antd/lib/input/Password"));

var _reactRouterDom = require("react-router-dom");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireWildcard(require("styled-components/macro"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  & svg {\n    font-size: 2.2rem;\n    border-radius: 50%;\n    border: 0.5px solid ", ";\n    padding: 8px;\n    margin: 0 10px;\n    &:hover {\n      border: none;\n      filter: drop-shadow(0 0 4px ", ");\n      background-color: ", ";\n    }\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  &&&.ant-divider-horizontal.ant-divider-with-text {\n    border-top-color: white !important;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  & a {\n    color: ", ";\n    &:hover {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  margin: 5px 0;\n  padding: 10px 0;\n\n  text-align: center;\n\n  & button {\n    width: 120px;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  padding-left: 11px;\n  margin: 0;\n  & .ant-checkbox + span {\n    color: white !important;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  ", "\n\n  & .ant-input-suffix  svg {\n    color: white;\n    margin-right: 12px;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background-color: transparent !important;\n  color: white;\n  border: none;\n\n  & input {\n    background-color: transparent !important;\n    color: white;\n  }\n\n  &.ant-input-affix-wrapper,\n  &.ant-form-item-has-error {\n    border: none;\n    box-shadow: none;\n  }\n  &::after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    z-index: 9999;\n    bottom: -3px;\n    left: 10px;\n\n    height: 1.5px;\n    width: 93%;\n    background-color: ", ";\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  margin-bottom: 15px;\n  height: 65px;\n\n  & .ant-form-item-label {\n    position: absolute;\n    z-index: 99999;\n\n    left: ", ";\n    top: ", ";\n    transition: all 0.5s ease;\n\n    pointer-events: none !important;\n    & label {\n      pointer-events: none !important;\n\n      color: white;\n      font-size: ", ";\n      &::after,\n      &::before {\n        display: none !important;\n      }\n    }\n  }\n\n  & .ant-form-item-explain,\n  & .ant-form-item-extra {\n    padding-left: 15px;\n    line-height: 2.5;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n\n  color: ", ";\n  text-align: center;\n  margin: 20px;\n  font-size: 2.8rem;\n  font-weight: ", ";\n  letter-spacing: 3px;\n  text-shadow: 0 0 10px black;\n  ", " {\n    margin-top: 120px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  /* animation: ", " 1s ease 1; */\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n\n  width: 380px;\n  height: auto;\n  padding: 15px;\n  background: rgba(0, 0, 0, 0.6);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  ", " {\n    animation: none;\n    top: 0;\n    left: 0;\n    transform: none;\n    padding-top: 50px 10px 0;\n    width: 100vw !important;\n    height: 100vh !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n0% {\n    opacity: 0;\n    transform: translateY(30px);\n}\n100%{\n    opacity: 1;\n    transform: translateY(0);\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n\n  & img {\n    width: 110px;\n    transition: all 0.5s ease;\n\n    &:hover {\n      transform: translateY(-5px);\n      filter: drop-shadow(0 0 10px black) brightness(1.2);\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  margin: 30px auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginLogoContent = _macro["default"].div(_templateObject());

exports.LoginLogoContent = LoginLogoContent;
var LoginLogo = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject2());
exports.LoginLogo = LoginLogo;
var AnimateForm = (0, _macro.keyframes)(_templateObject3());

var LoginContainer = _macro["default"].div(_templateObject4(), AnimateForm, (0, _styledBreakpoints.down)("sm"));

exports.LoginContainer = LoginContainer;

var LoginTitle = _macro["default"].h1(_templateObject5(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeight.bold;
}, (0, _styledBreakpoints.down)("sm"));

exports.LoginTitle = LoginTitle;
var LoginForm = (0, _macro["default"])(_Form["default"])(_templateObject6());
exports.LoginForm = LoginForm;
var LoginFormItemInput = (0, _macro["default"])(_FormItem["default"])(_templateObject7(), function (props) {
  return props.focus === "true" ? "30px" : "38px";
}, function (props) {
  return props.focus === "true" ? "-22px" : "5px";
}, function (props) {
  return props.focus === "true" ? "0.8rem" : "1rem";
});
exports.LoginFormItemInput = LoginFormItemInput;
var LoginInputCss = (0, _macro.css)(_templateObject8(), function (props) {
  return props.focus === "true" ? "white" : "rgba(255, 255, 255, 0.6)";
});
var LoginInput = (0, _macro["default"])(_antd.Input)(_templateObject9(), LoginInputCss);
exports.LoginInput = LoginInput;
var LoginInputPassword = (0, _macro["default"])(_Password["default"])(_templateObject10(), LoginInputCss);
exports.LoginInputPassword = LoginInputPassword;
var LoginFormItemCheckbox = (0, _macro["default"])(_FormItem["default"])(_templateObject11());
exports.LoginFormItemCheckbox = LoginFormItemCheckbox;
var LoginFormItemButton = (0, _macro["default"])(_FormItem["default"])(_templateObject12());
exports.LoginFormItemButton = LoginFormItemButton;

var LoginFooter = _macro["default"].div(_templateObject13(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.red1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
});

exports.LoginFooter = LoginFooter;
var LoginDivider = (0, _macro["default"])(_antd.Divider)(_templateObject14());
exports.LoginDivider = LoginDivider;

var LoginIconSocial = _macro["default"].div(_templateObject15(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.black3;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.black1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.primary;
});

exports.LoginIconSocial = LoginIconSocial;