"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterContainerPartner = exports.FooterTitleCompany = exports.FooterContentCompany = exports.FooterImageSignature = exports.FooterImageLogo = exports.FooterLinkSocial = exports.FooterLinkApp = exports.FooterDivide = exports.FooterImagePartner = exports.FooterLinkMovie = exports.FooterTitle = exports.FooterContainer = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-weight: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n  font-size: 0.8rem;\n  ", " {\n    text-align: center;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: auto;\n  ", " {\n    width: 25%;\n    height: auto;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px 0;\n  width: 70px;\n  height: 70px;\n  ", " {\n    width: 90px;\n    height: 90px;\n    text-align: center;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  &:nth-child(1):hover {\n    color: #3b5998;\n    filter: drop-shadow(0 0 2px #3b5998);\n  }\n  &:nth-child(2):hover {\n    color: rgba(255, 0, 0, 0.8);\n    filter: drop-shadow(0 0 2px rgba(255, 0, 0, 0.8));\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  padding-right: 10px;\n  font-size: 30px;\n  color: rgba(255, 255, 255, 0.5);\n  &:nth-child(1):hover {\n    color: white;\n    filter: drop-shadow(0 0 3px white);\n  }\n  &:nth-child(2):hover {\n    color: #a4c639;\n    filter: drop-shadow(0 0 2px #a4c639);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background-color: #949494;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n  margin: 8px;\n\n  &:hover {\n    filter: brightness(1.2);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  text-align: left;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.5);\n  &:hover {\n    color: white;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  font-size: 0.9rem;\n  text-align: center;\n  text-transform: uppercase;\n  &: {\n    text-align: left;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.5);\n\n  padding: 20px !important;\n  color: #949494;\n  text-align: center;\n\n  &&& ul {\n    list-style-type: none;\n    padding: 0;\n    & li {\n      margin-bottom: 20px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterContainer = _styledComponents["default"].footer(_templateObject());

exports.FooterContainer = FooterContainer;

var FooterTitle = _styledComponents["default"].h5(_templateObject2());

exports.FooterTitle = FooterTitle;
var FooterLinkMovie = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3());
exports.FooterLinkMovie = FooterLinkMovie;

var FooterImagePartner = _styledComponents["default"].img(_templateObject4());

exports.FooterImagePartner = FooterImagePartner;

var FooterDivide = _styledComponents["default"].hr(_templateObject5());

exports.FooterDivide = FooterDivide;
var FooterLinkApp = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject6());
exports.FooterLinkApp = FooterLinkApp;
var FooterLinkSocial = (0, _styledComponents["default"])(FooterLinkApp)(_templateObject7());
exports.FooterLinkSocial = FooterLinkSocial;

var FooterImageLogo = _styledComponents["default"].img(_templateObject8(), (0, _styledBreakpoints.down)("md"));

exports.FooterImageLogo = FooterImageLogo;

var FooterImageSignature = _styledComponents["default"].img(_templateObject9(), (0, _styledBreakpoints.down)("sm"));

exports.FooterImageSignature = FooterImageSignature;

var FooterContentCompany = _styledComponents["default"].div(_templateObject10(), (0, _styledBreakpoints.down)("md"));

exports.FooterContentCompany = FooterContentCompany;

var FooterTitleCompany = _styledComponents["default"].h2(_templateObject11(), function (_ref) {
  var theme = _ref.theme;
  return theme.fontWeight.regular;
});

exports.FooterTitleCompany = FooterTitleCompany;

var FooterContainerPartner = _styledComponents["default"].div(_templateObject12(), (0, _styledBreakpoints.down)("sm"));

exports.FooterContainerPartner = FooterContainerPartner;