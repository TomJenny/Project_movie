"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommingSoonAlert = exports.TabDetailCinemaBranches = exports.TabDetailAddress = exports.TabDetailNameCinema = exports.TabDetailImgCinema = exports.TabDetailImg = exports.TabDetail = exports.TabDetailLogo = exports.TabCinemaImg = exports.TabCinemaCinemaBranches = exports.TabCinemaDayOfWeekTitle = exports.TabCinemaDayOfWeekTabPane = exports.TabCinemaDayOfWeek = exports.TabCinemaDayOfWeekText = exports.TabMenuTicketLink = exports.CollapseHeader = exports.TabMenuCollapse = exports.TabMenuHomeFilmType = exports.TabMenuHomeTime = exports.TabMenuHomeAgeType = exports.TabMenuHomeFilmSTTitle = exports.TabMenuHomeFilmSTImg = exports.TabMenuHomeFilmST = exports.CinemaBranchNamePrefix = exports.TabsCinemaContentInfo = exports.TabMenuHomeCinemaBranches = exports.TabsImgCinema = exports.TabsCinema = exports.TabPanelMenuCinema = exports.TabPanelMenuLogo = exports.TabsMenu = exports.TabsLogo = exports.TabMenuContainer = exports.scrollBarStyled = void 0;

var _antd = require("antd");

var _reactRouterDom = require("react-router-dom");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireWildcard(require("styled-components/macro"));

var _Theme = require("../Styles/Theme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  width: 870px;\n  height: 700px;\n  border-radius: 50px;\n  filter: contrast(1.5);\n"]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  display: block;\n  font-size: 1rem;\n  margin: 0;\n  text-transform: uppercase;\n"]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 70px;\n  margin-right: 10px;\n"]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n  ", " {\n    margin-right: 0;\n  }\n"]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  &&& .ant-tabs-tabpane {\n    padding: 0;\n  }\n"]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  width: 250px;\n  height: 60px;\n  opacity: 0.6;\n  text-align: left;\n  &:after {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    content: \"\";\n\n    display: inline-block;\n    height: 0.5px;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.1);\n\n    transform: translateX(-50%);\n  }\n\n  ", " {\n    width: 60px;\n    opacity: 1;\n    text-align: center;\n  }\n"]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 70px;\n  margin-right: 10px;\n  border-radius: 5px;\n"]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  &&& .ant-tabs-tabpane {\n    padding: 0;\n  }\n"]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n  overflow-x: auto;\n  & p {\n    color: black;\n    display: block;\n    text-align: center;\n  }\n"]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n\n  overflow-y: auto;\n  ", "\n"]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  z-index: 9999;\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p:nth-child(1) {\n    color: black;\n  }\n  & .ant-tabs-tab:hover,\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:hover {\n    color: black !important;\n  }\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p:nth-child(1),\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:focus {\n    color: black !important;\n  }\n  &&&\n    .ant-tabs-tab.ant-tabs-tab-active\n    .ant-tabs-tab-btn\n    ", ",\n    &&&\n    .ant-tabs-tab:hover\n    ", ",\n    &&&\n    .ant-tabs-tab.ant-tabs-tab-active\n    .ant-tabs-tab-btn:hover\n    ", " {\n    & p {\n      background-color: red;\n      box-shadow: 0 0 2px red;\n      color: white !important;\n    }\n  }\n  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {\n    text-shadow: none;\n    color: none;\n  }\n  &&& .ant-tabs-tabpane {\n    padding: 0;\n  }\n"]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  width: 35px;\n  height: 40px;\n  margin: 0 auto;\n\n  & p {\n    border-radius: 50%;\n    padding: 5px 1px;\n    text-align: center;\n    display: inline-block;\n    font-size: 1rem;\n    margin: 0;\n  }\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 5px;\n  width: 90px;\n  height: 30px;\n\n  text-align: center;\n  line-height: 30px;\n  color: white;\n  font-size: bold;\n\n  background: rgb(60, 60, 60, 0.7);\n  box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);\n\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 5px;\n\n  &:hover {\n    color: white;\n    background: rgb(60, 60, 60);\n  }\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  min-width: 100%;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  &&& .ant-collapse-header {\n    min-width: 100%;\n    padding: 0;\n    margin-left: 5px;\n  }\n\n  &&& .ant-collapse-content-box {\n    min-width: 473px;\n    padding: 0;\n\n    ", " {\n      min-width: 350px !important;\n    }\n    ", " {\n      min-width: 200px !important;\n    }\n    /* ", " {\n      width: 350px !important;\n    } */\n  }\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  color: #a3a3a3;\n  display: inline-block;\n  padding: 2px 4px;\n  font-size: 1.2rem;\n  font-weight: bold;\n  margin: 0;\n  & span {\n    font-weight: normal;\n  }\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  color: #a3a3a3;\n  font-size: 0.8rem;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 30px;\n  height: 20px;\n  margin-right: 5px;\n  background-color: orange;\n  border-radius: 5px;\n\n  font-size: 0.8rem;\n  color: white;\n  text-align: center;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  text-transform: uppercase;\n  margin: 0;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  height: 70px;\n  margin-right: 10px;\n  border-radius: 5px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  display: block;\n  width: 100%;\n  position: relative;\n\n  &::after {\n    position: absolute;\n    bottom: 0;\n    display: block;\n    content: \"\";\n    width: 90%;\n    height: 1px;\n    background-color: rgba(0, 0, 0, 0.2);\n  }\n\n  ", " {\n    width: 100%;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  width: 170px;\n  text-align: left;\n  & p {\n    margin: 0;\n    text-align: left;\n    font-size: 0.875rem;\n    white-space: normal;\n    & span {\n      display: block !important;\n    }\n    & span:nth-child(2) {\n      color: black;\n      display: block !important;\n    }\n  }\n  & p:nth-child(2) {\n    color: rgba(0, 0, 0, 0.5);\n    font-size: 0.75rem;\n    white-space: nowrap;\n  }\n  & a {\n    display: inline-block;\n    width: 45px;\n    margin: 0;\n    padding: 1px 6px;\n\n    background: rgba(255, 0, 0, 0.8);\n    box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);\n    border-radius: 5px;\n\n    font-size: 0.8rem;\n    color: white;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  ", "\n  &&& .ant-tabs-tab {\n    padding: 20px 15px;\n  }\n  &&& .ant-tabs-tabpane {\n    padding: 0;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  margin: 5px;\n  border-radius: 5px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 240px;\n  height: 80px;\n  opacity: 0.6;\n  ", " {\n    opacity: 1;\n  }\n  &:after {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    content: \"\";\n\n    display: inline-block;\n    height: 0.5px;\n    width: 80%;\n    background-color: rgba(0, 0, 0, 0.1);\n\n    transform: translateX(-50%);\n  }\n  ", " {\n    height: 70px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  max-height:100%;\n  /* max-height: 690px; */\n  overflow-y: auto;\n  /* overflow-x: hidden; */\n  ", " {\n    /* max-height: 460px; */\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 705px;\n  padding: 5px 0;\n  background: ", ";\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n\n  ", "\n  &&& .ant-tabs-tab {\n    padding: 20px;\n    margin: 0;\n  }\n  ", " {\n    height: 500px;\n  }\n  &&& .ant-tabs-content-left {\n    height: 100%;\n  }\n  &&& .ant-tabs-content-top {\n    height: 100%;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 50px;\n  width: 50px;\n\n  & img {\n    position: absolute;\n    z-index: 9999;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 50px;\n    height: 50px;\n    filter: contrast(1.1);\n    &:hover {\n      filter: brightness(1.1);\n    }\n  }\n  opacity: 0.6;\n  ", " {\n    opacity: 1;\n  }\n  &:after {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    content: \"\";\n\n    display: inline-block;\n    height: 0.5px;\n    width: 60%;\n    background-color: rgba(0, 0, 0, 0.1);\n\n    transform: translateX(-50%);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 100px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  &::-webkit-scrollbar-track {\n    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */\n    background-color: transparent;\n    border-radius: 5px;\n  }\n\n  &::-webkit-scrollbar {\n    width: 6px;\n    background-color: transparent;\n    border-radius: 5px;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 0.5);\n    border-radius: 5px;\n  }\n  &:hover &::-webkit-scrollbar-thumb {\n    background-color: rgba(0, 0, 0, 1);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &&& .ant-tabs-ink-bar {\n    display: none;\n  }\n\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p {\n    color: black !important;\n  }\n  & .ant-tabs-tab:hover,\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:hover {\n    color: black !important;\n  }\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p:nth-child(2),\n  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:focus {\n    color: rgba(0, 0, 0, 0.5) !important;\n  }\n  &&&\n    .ant-tabs-tab-btn:focus\n    ", ",\n    &&&\n    .ant-tabs-tab-btn:active\n    ", ",\n    .ant-tabs-tab-btn:hover\n    ", ",\n    &&&\n    .ant-tabs-tab.ant-tabs-tab-active\n    ", " {\n    opacity: 1;\n\n    &::after {\n      background-color: red;\n      box-shadow: 0 0 5px red;\n    }\n  }\n\n  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn ", " {\n    text-shadow: none;\n    color: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabPane = _antd.Tabs.TabPane;
var Panel = _antd.Collapse.Panel; //GLOBAL

var overideTabs = function overideTabs(TabsActive) {
  return (0, _macro.css)(_templateObject(), TabsActive, TabsActive, TabsActive, TabsActive, TabsActive);
}; //Scroll Bar Styled


var scrollBarStyled = (0, _macro.css)(_templateObject2());
exports.scrollBarStyled = scrollBarStyled;

var TabMenuContainer = _macro["default"].div(_templateObject3());

exports.TabMenuContainer = TabMenuContainer;

var TabsLogo = _macro["default"].div(_templateObject4(), (0, _styledBreakpoints.down)("md"));

exports.TabsLogo = TabsLogo;
var TabsMenu = (0, _macro["default"])(_antd.Tabs)(_templateObject5(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white1;
}, overideTabs(TabsLogo), (0, _styledBreakpoints.down)("xs"));
exports.TabsMenu = TabsMenu;
var TabPanelMenuLogo = (0, _macro["default"])(TabPane)(_templateObject6());
exports.TabPanelMenuLogo = TabPanelMenuLogo;
var TabPanelMenuCinema = (0, _macro["default"])(TabPanelMenuLogo)(_templateObject7(), scrollBarStyled, (0, _styledBreakpoints.down)("sm"));
exports.TabPanelMenuCinema = TabPanelMenuCinema;

var TabsCinema = _macro["default"].div(_templateObject8(), (0, _styledBreakpoints.down)("md"), (0, _styledBreakpoints.down)("sm"));

exports.TabsCinema = TabsCinema;

var TabsImgCinema = _macro["default"].img(_templateObject9());

exports.TabsImgCinema = TabsImgCinema;
var TabMenuHomeCinemaBranches = (0, _macro["default"])(_antd.Tabs)(_templateObject10(), overideTabs(TabsCinema));
exports.TabMenuHomeCinemaBranches = TabMenuHomeCinemaBranches;

var TabsCinemaContentInfo = _macro["default"].div(_templateObject11());

exports.TabsCinemaContentInfo = TabsCinemaContentInfo;

var CinemaBranchNamePrefix = _macro["default"].span(_templateObject12(), function (props) {
  if (props.branchName === "BHD Star Cineplex") {
    return _Theme.CHART_COLORS[0];
  }

  if (props.branchName === "CGV") {
    return _Theme.CHART_COLORS[1];
  }

  if (props.branchName === "CNS") {
    return _Theme.CHART_COLORS[2];
  }

  if (props.branchName === "GLX") {
    return _Theme.CHART_COLORS[3];
  }

  if (props.branchName === "Lotte") {
    return _Theme.CHART_COLORS[4];
  }

  if (props.branchName === "MegaGS") {
    return _Theme.CHART_COLORS[5];
  }
});

exports.CinemaBranchNamePrefix = CinemaBranchNamePrefix;
var TabMenuHomeFilmST = (0, _macro["default"])(Panel)(_templateObject13(), (0, _styledBreakpoints.down)("xs"));
exports.TabMenuHomeFilmST = TabMenuHomeFilmST;

var TabMenuHomeFilmSTImg = _macro["default"].img(_templateObject14());

exports.TabMenuHomeFilmSTImg = TabMenuHomeFilmSTImg;

var TabMenuHomeFilmSTTitle = _macro["default"].h4(_templateObject15());

exports.TabMenuHomeFilmSTTitle = TabMenuHomeFilmSTTitle;

var TabMenuHomeAgeType = _macro["default"].span(_templateObject16());

exports.TabMenuHomeAgeType = TabMenuHomeAgeType;

var TabMenuHomeTime = _macro["default"].span(_templateObject17());

exports.TabMenuHomeTime = TabMenuHomeTime;

var TabMenuHomeFilmType = _macro["default"].p(_templateObject18()); //Collapse show times


exports.TabMenuHomeFilmType = TabMenuHomeFilmType;
var TabMenuCollapse = (0, _macro["default"])(_antd.Collapse)(_templateObject19(), (0, _styledBreakpoints.down)("md"), (0, _styledBreakpoints.down)("xs"), (0, _styledBreakpoints.down)("sm"));
exports.TabMenuCollapse = TabMenuCollapse;

var CollapseHeader = _macro["default"].div(_templateObject20());

exports.CollapseHeader = CollapseHeader;
var TabMenuTicketLink = (0, _macro["default"])(_reactRouterDom.NavLink)(_templateObject21()); //Tabs Cinema Show Times

exports.TabMenuTicketLink = TabMenuTicketLink;

var TabCinemaDayOfWeekText = _macro["default"].div(_templateObject22());

exports.TabCinemaDayOfWeekText = TabCinemaDayOfWeekText;
var TabCinemaDayOfWeek = (0, _macro["default"])(_antd.Tabs)(_templateObject23(), TabCinemaDayOfWeekText, TabCinemaDayOfWeekText, TabCinemaDayOfWeekText);
exports.TabCinemaDayOfWeek = TabCinemaDayOfWeek;
var TabCinemaDayOfWeekTabPane = (0, _macro["default"])(TabPane)(_templateObject24(), scrollBarStyled);
exports.TabCinemaDayOfWeekTabPane = TabCinemaDayOfWeekTabPane;

var TabCinemaDayOfWeekTitle = _macro["default"].div(_templateObject25());

exports.TabCinemaDayOfWeekTitle = TabCinemaDayOfWeekTitle;
var TabCinemaCinemaBranches = (0, _macro["default"])(TabsMenu)(_templateObject26(), overideTabs(TabsCinema));
exports.TabCinemaCinemaBranches = TabCinemaCinemaBranches;

var TabCinemaImg = _macro["default"].img(_templateObject27()); // Tabs Detail show times


exports.TabCinemaImg = TabCinemaImg;

var TabDetailLogo = _macro["default"].div(_templateObject28(), (0, _styledBreakpoints.down)("sm"));

exports.TabDetailLogo = TabDetailLogo;
var TabDetail = (0, _macro["default"])(TabsMenu)(_templateObject29(), overideTabs(TabDetailLogo));
exports.TabDetail = TabDetail;

var TabDetailImg = _macro["default"].img(_templateObject30(), (0, _styledBreakpoints.down)("sm"));

exports.TabDetailImg = TabDetailImg;

var TabDetailImgCinema = _macro["default"].img(_templateObject31());

exports.TabDetailImgCinema = TabDetailImgCinema;

var TabDetailNameCinema = _macro["default"].p(_templateObject32());

exports.TabDetailNameCinema = TabDetailNameCinema;

var TabDetailAddress = _macro["default"].p(_templateObject33());

exports.TabDetailAddress = TabDetailAddress;

var TabDetailCinemaBranches = _macro["default"].div(_templateObject34()); //comming soon alert


exports.TabDetailCinemaBranches = TabDetailCinemaBranches;

var CommingSoonAlert = _macro["default"].div(_templateObject35(), function (props) {
  return props.src;
});

exports.CommingSoonAlert = CommingSoonAlert;