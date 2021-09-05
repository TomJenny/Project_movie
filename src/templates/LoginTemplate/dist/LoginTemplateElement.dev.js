"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginTemplateBackgroundOverlay = exports.LoginTemplateContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _setting = require("../../utils/setting");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  z-index: 1;\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.7),\n    rgba(0, 0, 0, 0.3),\n    rgba(0, 0, 0, 0.7)\n  );\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100vh;\n  overflow-y: auto;\n\n  background-image: url(", "", ");\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoginTemplateContainer = _styledComponents["default"].div(_templateObject(), _setting.PUBLIC_URL, function (props) {
  return props.isRegister ? "/img/BackgroundRegister.jpg" : "/img/BackgroundLogin.png";
});

exports.LoginTemplateContainer = LoginTemplateContainer;

var LoginTemplateBackgroundOverlay = _styledComponents["default"].div(_templateObject2());

exports.LoginTemplateBackgroundOverlay = LoginTemplateBackgroundOverlay;