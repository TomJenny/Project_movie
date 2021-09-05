"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegisterFooter = exports.RegisterNavLink = exports.RegisterForm = exports.RegisterTitle = exports.RegisterContainer = void 0;

var _Form = _interopRequireDefault(require("antd/lib/form/Form"));

var _reactRouterDom = require("react-router-dom");

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  margin-top: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  color: ", ";\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n\n  color: ", ";\n  text-align: center;\n  margin: 20px;\n  font-size: 2.8rem;\n  font-weight: ", ";\n  letter-spacing: 3px;\n  text-shadow: 0 0 10px black;\n  ", " {\n    margin-top: 120px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow-y: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 2;\n\n  width: 380px;\n  height: auto;\n  padding: 10px;\n  background: rgba(0, 0, 0, 0.6);\n  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\n  /* backdrop-filter: blur(5px);\n  -webkit-backdrop-filter: blur(5px); */\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  ", " {\n    animation: none;\n    top: 0;\n    left: 0;\n    transform: none;\n    padding-top: 50px 10px 0;\n    width: 100vw !important;\n    height: 100vh !important;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RegisterContainer = _styledComponents["default"].div(_templateObject(), (0, _styledBreakpoints.down)("sm"));

exports.RegisterContainer = RegisterContainer;

var RegisterTitle = _styledComponents["default"].h1(_templateObject2(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeight.bold;
}, (0, _styledBreakpoints.down)("sm"));

exports.RegisterTitle = RegisterTitle;
var RegisterForm = (0, _styledComponents["default"])(_Form["default"])(_templateObject3());
exports.RegisterForm = RegisterForm;
var RegisterNavLink = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject4(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.red1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.primary;
});
exports.RegisterNavLink = RegisterNavLink;

var RegisterFooter = _styledComponents["default"].div(_templateObject5());

exports.RegisterFooter = RegisterFooter;