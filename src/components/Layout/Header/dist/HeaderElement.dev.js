"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutSteps = exports.DropdownHeader = exports.HeaderLoginButton = exports.ButtonToggle = exports.HeaderUserAvatar = exports.HeaderRegisterButton = exports.HeaderMainMenu = exports.HeaderMenuLink = exports.HeaderMenuItem = exports.HeaderMenu = exports.HeaderLogo = exports.HeaderContainer = void 0;

var _antd = require("antd");

var _layout = require("antd/lib/layout/layout");

var _MenuItem = _interopRequireDefault(require("antd/lib/menu/MenuItem"));

var _reactRouterDom = require("react-router-dom");

var LinkScroll = _interopRequireWildcard(require("react-scroll"));

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireWildcard(require("styled-components/macro"));

var _Button = require("../../Styles/Button");

var _mixin = require("../../Styles/mixin");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  max-width: 500px;\n  width: 300px;\n  z-index: 9;\n  height: auto;\n  ", " {\n    width: 250px;\n\n    display: none;\n  }\n\n  */ & .ant-steps {\n    margin: 5px auto;\n  }\n  &\n    .ant-steps-item-process\n    > .ant-steps-item-container\n    > .ant-steps-item-content\n    > .ant-steps-item-title {\n    color: ", ";\n  }\n  & .ant-steps-item-finish .ant-steps-item-icon {\n    border-color: ", ";\n    & svg {\n      color: ", ";\n    }\n  }\n  &\n    .ant-steps-item-finish\n    > .ant-steps-item-container\n    > .ant-steps-item-content\n    > .ant-steps-item-title::after {\n    background-color: ", ";\n  }\n  &\n    .ant-steps-item-wait\n    > .ant-steps-item-container\n    > .ant-steps-item-content\n    > .ant-steps-item-title {\n    color: ", ";\n  }\n  &&& .ant-steps-item-wait .ant-steps-item-icon {\n    background: transparent;\n    border-color: ", ";\n  }\n  & .ant-steps-item-wait .ant-steps-item-icon > .ant-steps-icon {\n    color: ", ";\n  }\n  & .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n    backdrop-filter: blur(8px);\n    -webkit-backdrop-filter: blur(8px);\n    background: linear-gradient(\n      45deg,\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(255, 255, 255, 0.3) 50%\n    );\n    border: 1px solid ", ";\n  }\n\n  & .ant-steps-item-finish .ant-steps-item-icon {\n    background: transparent;\n  }\n\n  &\n    .ant-steps-item-finish\n    > .ant-steps-item-container\n    > .ant-steps-item-content\n    > .ant-steps-item-title {\n    color: ", ";\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  &[ant-click-animating-without-extra-node]:after {\n    -webkit-animation: none !important;\n    -moz-animation: none !important;\n    -o-animation: none !important;\n    -ms-animation: none !important;\n    animation: none !important;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n        border: none;\n      "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n      padding-left: 40px;\n      border: none;\n    "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 20px;\n  position: relative;\n  background-color: transparent;\n  color: white;\n  border: 1px dashed ", ";\n  ", "\n  &:hover,\n  &:active,\n  &:focus {\n    background-color: transparent !important;\n    color: white;\n    border: 1px dashed ", ";\n    ", "\n    box-shadow: none !important;\n  }\n  ", " {\n    margin-right: 0;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  color: red;\n  width: 36px;\n  height: 36px;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  position: relative;\n  border: none;\n  background: none;\n  cursor: pointer;\n  -webkit-appearence: none;\n  -webkit-tap-highlight-color: transparent;\n  & svg {\n    width: 64px;\n    height: 48px;\n    top: -6px;\n    left: -14px;\n    stroke: red;\n    stroke-width: 4px;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    fill: none;\n    display: block;\n    position: absolute;\n    path {\n      transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease)\n          var(--delay, 0s),\n        stroke-dashoffset var(--duration, 0.85s) var(--easing, ease)\n          var(--delay, 0s);\n      stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);\n      stroke-dashoffset: var(--offset, 126px);\n      transform: translateZ(0);\n      &:nth-child(2) {\n        --duration: 0.7s;\n        --easing: ease-in;\n        --offset: 100px;\n        --array-2: 74px;\n      }\n      &:nth-child(3) {\n        --offset: 133px;\n        --array-2: 107px;\n      }\n    }\n  }\n  &.active {\n    svg {\n      path {\n        --offset: 57px;\n        &:nth-child(1),\n        &:nth-child(3) {\n          --delay: 0.15s;\n          --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);\n        }\n        &:nth-child(2) {\n          --duration: 0.4s;\n          --offset: 2px;\n          --array-1: 1px;\n        }\n        &:nth-child(3) {\n          --offset: 58px;\n        }\n      }\n    }\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 30px;\n  height: 30px;\n  margin-right: 5px;\n  margin-bottom: 2px;\n  filter: contrast(120%);\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 30px;\n  & svg {\n    font-size: 15px;\n  }\n  &&& span {\n    display: inline-block;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: white !important;\n  bottom: 10px !important;\n  font-weight: ", "!important; ;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: white !important;\n  bottom: 10px !important;\n  font-weight: ", " !important;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 70px !important;\n  &&&::after {\n    bottom: 10px;\n  }\n\n  &.ant-menu-item-selected::after,\n  &:hover::after,\n  &:active::after,\n  &:focus::after,\n  &:target::after {\n    border-bottom: 3px solid red !important;\n    border-right: none !important;\n    background: red !important;\n  }\n\n  ", " {\n    justify-content: center !important;\n\n    height: 50px !important;\n    &.ant-menu-item-selected {\n      background-color: rgba(255, 0, 0) !important;\n    }\n    &.ant-menu-item:hover,\n    &.ant-menu-item-active,\n    &.ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,\n    &.ant-menu-submenu-active,\n    &.ant-menu-submenu-title:hover {\n      background: red !important;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 15px !important;\n  background-color: transparent;\n  border: none;\n  width: 480px;\n\n  ", "\n\n  ", " {\n    display: block !important;\n\n    position: absolute;\n    z-index: 9;\n    top: 70px;\n    left: 0 !important;\n    width: 100vw;\n    height: 100vh;\n    transform: ", ";\n    transition: all 0.85s ease;\n    opacity: ", ";\n    background-color: ", ";\n  }\n\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  & img {\n    height: 40px;\n  }\n  ", " {\n    & img {\n      height: 35px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      transition: all 0.2s ease-in;\n      width: 100vw !important;\n      background: none !important;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      width: 70% !important;\n      background: none !important;\n      padding: 0 10px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  position: fixed;\n  width: 100vw;\n  z-index: 999999;\n  height: 70px !important;\n  transition: all 0.2s ease-in;\n\n  ", "\n  ", "\n  ", "\n \n  ", " {\n    width: 100vw !important;\n  }\n\n  ", " {\n    width: 100vw;\n    padding: 0 10px;\n\n    background-color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  box-shadow: none;\n  border: none;\n  background: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderBackgroundNone = (0, _macro.css)(_templateObject());
var HeaderContainer = (0, _macro["default"])(_layout.Header)(_templateObject2(), (0, _mixin.GlassEffect)({
  color: "0,0,0",
  trans: 0.4,
  blur: "0",
  border: "none",
  radius: "none",
  boxshadow: "none"
}), function (props) {
  return props.ischeckout && (0, _macro.css)(_templateObject3());
}, function (props) {
  return props.tabactive === "2" && (0, _macro.css)(_templateObject4());
}, function (props) {
  return props.isuserprofile && HeaderBackgroundNone;
}, (0, _styledBreakpoints.down)("sm"), (0, _styledBreakpoints.down)("md"), function (props) {
  return props.buttontogglestatus === "active" ? "black" : null;
});
exports.HeaderContainer = HeaderContainer;
var HeaderLogo = (0, _macro["default"])(_reactRouterDom.Link)(_templateObject5(), (0, _styledBreakpoints.down)("md"));
exports.HeaderLogo = HeaderLogo;
var HeaderMenu = (0, _macro["default"])(_antd.Menu)(_templateObject6(), function (props) {
  return props.ischeckout || props.isuserprofile ? {
    display: "none"
  } : null;
}, (0, _styledBreakpoints.down)("sm"), function (props) {
  return props.buttontogglestatus === "active" ? "translateX(0)" : "translateX(100%)";
}, function (props) {
  return props.buttontogglestatus === "active" ? "1" : "0";
}, function (props) {
  return props.buttontogglestatus === "active" ? "black" : null;
}, (0, _styledBreakpoints.down)("md"));
exports.HeaderMenu = HeaderMenu;
var HeaderMenuItem = (0, _macro["default"])(_MenuItem["default"])(_templateObject7(), (0, _styledBreakpoints.down)("md"));
exports.HeaderMenuItem = HeaderMenuItem;
var HeaderMenuLink = (0, _macro["default"])(_reactRouterDom.NavLink)(_templateObject8(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontWeight.regular;
});
exports.HeaderMenuLink = HeaderMenuLink;
var HeaderMainMenu = (0, _macro["default"])(LinkScroll.Link)(_templateObject9(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeight.regular;
}); // Button Register

exports.HeaderMainMenu = HeaderMainMenu;
var HeaderRegisterButton = (0, _macro["default"])(_Button.ButtonPrimaryStyled)(_templateObject10()); // Avatar user

exports.HeaderRegisterButton = HeaderRegisterButton;

var HeaderUserAvatar = _macro["default"].img(_templateObject11()); // Button Toggle Menu


exports.HeaderUserAvatar = HeaderUserAvatar;

var ButtonToggle = _macro["default"].button(_templateObject12()); //Button Login


exports.ButtonToggle = ButtonToggle;
var HeaderLoginButton = (0, _macro["default"])(_antd.Button)(_templateObject13(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white1;
}, function (props) {
  return props.islogin && (0, _macro.css)(_templateObject14());
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
}, function (props) {
  return props.islogin && (0, _macro.css)(_templateObject15());
}, (0, _styledBreakpoints.down)("md"));
exports.HeaderLoginButton = HeaderLoginButton;
var DropdownHeader = (0, _macro["default"])(_antd.Dropdown)(_templateObject16());
exports.DropdownHeader = DropdownHeader;

var CheckoutSteps = _macro["default"].div(_templateObject17(), (0, _styledBreakpoints.down)("xs"), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white1;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.white1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.white1;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.white1;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.white3;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.white3;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.white3;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.white1;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.white1;
});

exports.CheckoutSteps = CheckoutSteps;