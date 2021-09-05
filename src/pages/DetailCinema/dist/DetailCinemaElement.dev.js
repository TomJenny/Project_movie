"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailCinemaStar = exports.DetailCinemaCirclePercent = exports.DetailCinemaRate = exports.DetailCinemaAddress = exports.DetailCinemaContentTitle = exports.DetailCinemaContentInfo = exports.ButtonBuyTicket = exports.DetailCinemaContentImg = exports.DetailCinemaContent = exports.DetailCinemaBackgroundImg = exports.DetailCinemaBackground = exports.DetailCinemaContainer = void 0;

var _antd = require("antd");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _Button = require("../../components/Styles/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  display: block;\n  filter: contrast(110%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));\n  font-size: 18px;\n  text-align: center;\n  color: red;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  filter: contrast(110%);\n  background: rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n\n  &&& .ant-progress-text {\n    font-size: 60px;\n    color: white;\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 9999;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 1rem;\n  margin: 0;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  color: white !important;\n  margin-bottom: 0;\n  text-transform: uppercase;\n  font-size: 1.3rem;\n  font-weight: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  max-width: 330px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center, 0 0;\n  background-repeat: no-repeat;\n  width: 200px;\n  height: 300px;\n\n  position: relative;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(31, 38, 135, 0.37);\n  margin-right: 10px;\n\n  &::after {\n    display: block;\n    content: \"\";\n    position: absolute;\n    z-index: 99999999;\n    pointer-events: none;\n    top: -110%;\n    left: -210%;\n    /* top:0;\n  left:0; */\n    width: 200%;\n    height: 200%;\n    opacity: 0;\n    background: linear-gradient(\n      to right,\n      rgba(255, 255, 255, 0.13) 0%,\n      rgba(255, 255, 255, 0.13) 77%,\n      rgba(255, 255, 255, 0.5) 92%,\n      rgba(255, 255, 255, 0) 100%\n    );\n  }\n  &:hover {\n    &::after {\n      opacity: 1;\n      top: -30%;\n      left: -30%;\n      transition-property: left, top, opacity;\n      transition-duration: 1s, 1s, 0.15s;\n      transition-timing-function: ease;\n    }\n  }\n\n  ", " {\n    background-image: none;\n    box-shadow: none;\n    width: 100%;\n    &::after {\n      display: none;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 9999;\n  top: 200px;\n  left: 50%;\n  transform: translate(-50%);\n  overflow: hidden;\n\n  width: 870px;\n  min-height: 420px;\n\n  ", " {\n    width: 100%;\n    padding: 20px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: url(", ");\n  background-size: cover;\n  background-position: center, 0 0;\n  background-repeat: no-repeat;\n  filter: blur(20px);\n  width: 100%;\n  height: 600px;\n  ", " {\n    filter: none;\n  } ;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  z-index: 0;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 70px;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DetailCinemaContainer = _macro["default"].div(_templateObject());

exports.DetailCinemaContainer = DetailCinemaContainer;

var DetailCinemaBackground = _macro["default"].div(_templateObject2());

exports.DetailCinemaBackground = DetailCinemaBackground;

var DetailCinemaBackgroundImg = _macro["default"].div(_templateObject3(), function (props) {
  return props.src;
}, (0, _styledBreakpoints.down)("sm"));

exports.DetailCinemaBackgroundImg = DetailCinemaBackgroundImg;

var DetailCinemaContent = _macro["default"].div(_templateObject4(), (0, _styledBreakpoints.down)("md"));

exports.DetailCinemaContent = DetailCinemaContent;

var DetailCinemaContentImg = _macro["default"].div(_templateObject5(), function (props) {
  return props.src;
}, (0, _styledBreakpoints.down)("sm"));

exports.DetailCinemaContentImg = DetailCinemaContentImg;
var ButtonBuyTicket = (0, _macro["default"])(_Button.ButtonPrimaryStyled)(_templateObject6(), (0, _styledBreakpoints.down)("sm"));
exports.ButtonBuyTicket = ButtonBuyTicket;

var DetailCinemaContentInfo = _macro["default"].div(_templateObject7());

exports.DetailCinemaContentInfo = DetailCinemaContentInfo;

var DetailCinemaContentTitle = _macro["default"].h2(_templateObject8(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontWeight.medium;
});

exports.DetailCinemaContentTitle = DetailCinemaContentTitle;

var DetailCinemaAddress = _macro["default"].span(_templateObject9());

exports.DetailCinemaAddress = DetailCinemaAddress;

var DetailCinemaRate = _macro["default"].div(_templateObject10(), (0, _styledBreakpoints.down)("sm"));

exports.DetailCinemaRate = DetailCinemaRate;
var DetailCinemaCirclePercent = (0, _macro["default"])(_antd.Progress)(_templateObject11());
exports.DetailCinemaCirclePercent = DetailCinemaCirclePercent;
var DetailCinemaStar = (0, _macro["default"])(_antd.Rate)(_templateObject12());
exports.DetailCinemaStar = DetailCinemaStar;