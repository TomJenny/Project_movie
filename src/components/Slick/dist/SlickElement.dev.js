"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlickButtonBookTicket = exports.SlickFilmShowTime = exports.SlickFilmTitle = exports.SlickAgeType = exports.SlickFooter = exports.SlickImg = exports.PlayButton = exports.SlickDay = exports.SlickMonthYear = exports.SlickOverLayDate = exports.SlickOverLayIMDB = exports.SlickButtonOverlay = exports.SlickIMDB = exports.SlickOverLay = exports.SlickContainer = exports.SlickHeader = exports.HomeSlickTabs = exports.HomeSlickContainer = void 0;

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _PlayButton = require("../Styles/PlayButton");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 999999;\n  bottom: -15px;\n  width: 100%;\n  background-image: linear-gradient(\n    to right,\n    rgba(255, 255, 255, 0.4) 40%,\n    rgba(255, 255, 255, 1) 20%,\n    rgba(255, 255, 255, 0.4) 40%\n  );\n  box-shadow: 0 0 15px white;\n  border: none;\n\n  color: black;\n  line-height: 1;\n  font-size: 16px;\n  font-weight: 500;\n  letter-spacing: 10px;\n\n  opacity: 0;\n  ", ":hover & {\n    opacity: 1;\n    transition: all o.5 ease-in-out;\n  }\n\n  &:hover,\n  &:active,\n  &:focus {\n    color: black;\n    background: red;\n    box-shadow: 0 0 5px red;\n    border: none;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 5px;\n  font-size: 14px;\n  color: #a3a3a3;\n  & span:nth-child(2) {\n    display: inline-block;\n    margin-left: 20px;\n  }\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 5px;\n  margin-top: 10px;\n  margin-bottom: 0px;\n  white-space: nowrap;\n  text-transform: uppercase;\n  color: white;\n  font-size: 16px;\n  font-weight: 400;\n  overflow: hidden;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: absolute;\n  z-index: 99999;\n  bottom: 10px;\n  left: 10px;\n  width: 35px;\n  margin-right: 5px;\n  background-color: rgba(255, 0, 0, 1);\n  border-radius: 5px;\n\n  font-size: 0.9rem;\n  color: white;\n  text-align: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px);\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  ", ":hover & {\n    filter: brightness(1.2);\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.5);\n\n  position: absolute;\n  z-index: 9999999;\n  top: 50%;\n  left: 50%;\n\n  font-size: 30px;\n  color: rgba(255, 255, 255, 0.8);\n\n  padding: 10px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: all 0.5 ease-in-out;\n\n  ", ":hover & {\n    opacity: 1;\n    transition: all 0.5 ease-in-out;\n  }\n  &:hover {\n    transform: translate(-50%, -50%) scale(1.1);\n    transition: all 0.5 ease-in-out;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 60%;\n  line-height: 1.5;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: black !important;\n  font-weight: bold;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 40%;\n  background-color: rgba(255, 0, 0, 0.8);\n  font-size: 13px;\n  line-height: 2;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  background-color: unset !important;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  overflow: hidden;\n  width: 50px;\n  height: 60px;\n  border-radius: 0 0 5px 5px;\n  background-color: rgb(0, 0, 0, 0.6);\n\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);\n  /* 0 6px 20px 0 rgba(255, 255, 255, 0.3); */\n\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px);\n\n  position: absolute;\n  right: 8px;\n  top: 0;\n  z-index: 9999999999;\n\n  text-align: center;\n  color: white;\n  font-size: 25px;\n  line-height: 30px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0;\n  ", ":hover & {\n    opacity: 1;\n    transition: all 0.5 ease-in-out;\n  }\n  &:hover {\n    transform: translate(-50%, -50%) scale(1.1);\n    transition: all 0.5 ease-in-out;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 40px;\n  margin: 0 auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 420px;\n  padding: 10px !important;\n  position: relative !important;\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative !important;\n\n  height: 318px;\n  ", " {\n    height: 330px;\n  }\n  max-width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &&& .ant-tabs-tab + .ant-tabs-tab {\n    margin: 0;\n  }\n  ", " {\n    &&& .ant-tabs-nav-list {\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 100px;\n  &&& .ant-tabs-ink-bar {\n    display: none;\n  }\n  &&& .ant-tabs-nav::before {\n    display: none;\n  }\n  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn a,\n  .ant-tabs-tab-btn:focus a,\n  .ant-tabs-tab-remove:focus a,\n  .ant-tabs-tab-btn:active a,\n  .ant-tabs-tab-remove:active a {\n    transform: scale(1.1);\n    color: white;\n    letter-spacing: 2px !important;\n    & span {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeSlickContainer = _macro["default"].div(_templateObject());

exports.HomeSlickContainer = HomeSlickContainer;
var HomeSlickTabs = (0, _macro["default"])(_antd.Tabs)(_templateObject2(), (0, _styledBreakpoints.down)("xs")); //Slick Header

exports.HomeSlickTabs = HomeSlickTabs;

var SlickHeader = _macro["default"].div(_templateObject3(), (0, _styledBreakpoints.down)("xs")); //Slick Comming Soon Container


exports.SlickHeader = SlickHeader;

var SlickContainer = _macro["default"].div(_templateObject4()); //Slick  overlay


exports.SlickContainer = SlickContainer;
var SlickOverLay = (0, _macro["default"])(_reactRouterDom.NavLink)(_templateObject5()); //SLick IMDb

exports.SlickOverLay = SlickOverLay;

var SlickIMDB = _macro["default"].img(_templateObject6()); //slick overlay button


exports.SlickIMDB = SlickIMDB;
var SlickButtonOverlay = (0, _macro["default"])(_PlayButton.PlayButtonStyled)(_templateObject7(), SlickContainer); //Slick overlay information (Date, IMDb)

exports.SlickButtonOverlay = SlickButtonOverlay;

var SlickOverLayIMDB = _macro["default"].div(_templateObject8()); //Slick date overlay


exports.SlickOverLayIMDB = SlickOverLayIMDB;
var SlickOverLayDate = (0, _macro["default"])(SlickOverLayIMDB)(_templateObject9()); //Slick month, year overlay

exports.SlickOverLayDate = SlickOverLayDate;

var SlickMonthYear = _macro["default"].div(_templateObject10()); //Slick day overlay


exports.SlickMonthYear = SlickMonthYear;

var SlickDay = _macro["default"].div(_templateObject11()); //Play button overlay


exports.SlickDay = SlickDay;
var PlayButton = (0, _macro["default"])(_icons.CaretRightOutlined)(_templateObject12(), SlickContainer); //Slick image hover effect

exports.PlayButton = PlayButton;

var SlickImg = _macro["default"].img(_templateObject13(), SlickContainer); //Slick Footer


exports.SlickImg = SlickImg;

var SlickFooter = _macro["default"].div(_templateObject14()); //Slick Age Type


exports.SlickFooter = SlickFooter;

var SlickAgeType = _macro["default"].span(_templateObject15()); // Slick Film Name


exports.SlickAgeType = SlickAgeType;

var SlickFilmTitle = _macro["default"].h5(_templateObject16()); //Slick show time


exports.SlickFilmTitle = SlickFilmTitle;

var SlickFilmShowTime = _macro["default"].p(_templateObject17()); //Slick Button book tickets


exports.SlickFilmShowTime = SlickFilmShowTime;
var SlickButtonBookTicket = (0, _macro["default"])(_antd.Button)(_templateObject18(), SlickContainer);
exports.SlickButtonBookTicket = SlickButtonBookTicket;