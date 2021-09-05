"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailCinemaPlayButton = exports.DetailFilmStar = exports.DetailFilmCirclePercent = exports.DetailFilmRate = exports.DetailFilmTextInfo = exports.DetailFilmTextShowTimes = exports.DetailCinemaTextAgeType = exports.ButtonBuyTicket = exports.DetailFilmContentTitle = exports.DetailContainerTitle = exports.DetailFilmContentImg = exports.DetailFilmContent = exports.DetailFilmBackgroundImg = exports.DetailFilmBackground = exports.DetailFilmContainer = void 0;

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _Button = require("../../components/Styles/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.5);\n\n  position: absolute;\n  z-index: 999999999;\n  top: 50%;\n  left: 50%;\n\n  font-size: 30px;\n  color: rgba(255, 255, 255, 0.8);\n\n  padding: 10px;\n  border-radius: 50%;\n  border: 2px solid rgba(255, 255, 255, 0.8);\n\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: all 0.5 ease-in-out;\n\n  ", ":hover & {\n    opacity: 1;\n    transition: all 0.5 ease-in-out;\n  }\n  &:hover {\n    transform: translate(-50%, -50%) scale(1.1);\n    transition: all 0.5 ease-in-out;\n  }\n  ", " {\n    opacity: 1;\n    transform: translate(-50%, -50%) scale(1.5);\n  }\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  display: block;\n  filter: contrast(110%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));\n  font-size: 18px;\n  text-align: center;\n  color: red;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  filter: contrast(110%);\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n\n  &&& .ant-progress-text {\n    font-size: 60px;\n    color: white;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 9999;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  & span {\n    color: rgba(255, 255, 255, 0.8);\n    margin-right: 10px;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1rem;\n  margin: 0;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  background-color: red;\n\n  width: 45px;\n  height: 28px;\n  border-radius: 5px;\n  margin-right: 5px;\n\n  font-size: 1rem;\n  color: white;\n  text-align: center;\n  line-height: 26px;\n\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  backdrop-filter: blur(1px);\n  -webkit-backdrop-filter: blur(1px);\n\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: white !important;\n  margin-bottom: 0;\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  font-weight: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  max-width: 330px;\n  white-space: normal;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: url(", "), url(", ");\n\n  background-size: cover;\n  background-position: center, 0 0;\n  background-repeat: no-repeat;\n  width: 200px;\n  height: 300px;\n\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(31, 38, 135, 0.37);\n  margin-right: 10px;\n\n  &::after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    z-index: 99999999;\n    pointer-events: none;\n    top: -110%;\n    left: -210%;\n    /* top:0;\n  left:0; */\n    width: 200%;\n    height: 200%;\n    opacity: 0;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0.13) 0%,\n      rgba(255, 255, 255, 0.13) 77%,\n      rgba(255, 255, 255, 0.5) 92%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  &:hover {\n    &::after {\n      opacity: 1;\n      top: -30%;\n      left: -30%;\n      transition-property: left, top, opacity;\n      transition-duration: 1s, 1s, 0.15s;\n      transition-timing-function: ease;\n    }\n  }\n\n  ", " {\n    background-image: none;\n    box-shadow: none;\n    width: 100%;\n    &::after {\n      display: none;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 9999;\n  top: 200px;\n  left: 50%;\n  transform: translate(-50%);\n\n  overflow: hidden;\n  width: 870px;\n  min-height: 400px;\n  ", " {\n    width: 100%;\n    padding: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background: url(", "), url(", ");\n\n  background-size: cover;\n  background-position: center, 0 0;\n  background-repeat: no-repeat;\n  filter: blur(20px);\n  width: 100%;\n  height: 600px;\n  ", " {\n    filter: none;\n  } ;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent 100%);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 70px;\n  position: relative;\n  height: auto;\n  &&& .ant-tabs-ink-bar {\n    display: none;\n  }\n  &&& .ant-tabs-nav::before {\n    display: none;\n  }\n  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn a,\n  .ant-tabs-tab-btn:focus a,\n  .ant-tabs-tab-remove:focus a,\n  .ant-tabs-tab-btn:active a,\n  .ant-tabs-tab-remove:active a {\n    transform: scale(1.1);\n    color: white;\n    letter-spacing: 2px !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DetailFilmContainer = _macro["default"].div(_templateObject());

exports.DetailFilmContainer = DetailFilmContainer;

var DetailFilmBackground = _macro["default"].div(_templateObject2());

exports.DetailFilmBackground = DetailFilmBackground;

var DetailFilmBackgroundImg = _macro["default"].div(_templateObject3(), function (props) {
  return props.src;
}, function (props) {
  return props.error;
}, (0, _styledBreakpoints.down)("sm"));

exports.DetailFilmBackgroundImg = DetailFilmBackgroundImg;

var DetailFilmContent = _macro["default"].div(_templateObject4(), (0, _styledBreakpoints.down)("md"));

exports.DetailFilmContent = DetailFilmContent;

var DetailFilmContentImg = _macro["default"].div(_templateObject5(), function (props) {
  return props.src;
}, function (props) {
  return props.error;
}, (0, _styledBreakpoints.down)("sm"));

exports.DetailFilmContentImg = DetailFilmContentImg;

var DetailContainerTitle = _macro["default"].div(_templateObject6());

exports.DetailContainerTitle = DetailContainerTitle;

var DetailFilmContentTitle = _macro["default"].h2(_templateObject7(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontWeight.medium;
});

exports.DetailFilmContentTitle = DetailFilmContentTitle;
var ButtonBuyTicket = (0, _macro["default"])(_Button.ButtonPrimaryStyled)(_templateObject8(), (0, _styledBreakpoints.down)("sm"));
exports.ButtonBuyTicket = ButtonBuyTicket;

var DetailCinemaTextAgeType = _macro["default"].span(_templateObject9(), (0, _styledBreakpoints.down)("sm"));

exports.DetailCinemaTextAgeType = DetailCinemaTextAgeType;

var DetailFilmTextShowTimes = _macro["default"].span(_templateObject10());

exports.DetailFilmTextShowTimes = DetailFilmTextShowTimes;

var DetailFilmTextInfo = _macro["default"].div(_templateObject11());

exports.DetailFilmTextInfo = DetailFilmTextInfo;

var DetailFilmRate = _macro["default"].div(_templateObject12(), (0, _styledBreakpoints.down)("sm"));

exports.DetailFilmRate = DetailFilmRate;
var DetailFilmCirclePercent = (0, _macro["default"])(_antd.Progress)(_templateObject13());
exports.DetailFilmCirclePercent = DetailFilmCirclePercent;
var DetailFilmStar = (0, _macro["default"])(_antd.Rate)(_templateObject14());
exports.DetailFilmStar = DetailFilmStar;
var DetailCinemaPlayButton = (0, _macro["default"])(_icons.CaretRightOutlined)(_templateObject15(), DetailFilmContentImg, (0, _styledBreakpoints.down)("sm"));
exports.DetailCinemaPlayButton = DetailCinemaPlayButton;