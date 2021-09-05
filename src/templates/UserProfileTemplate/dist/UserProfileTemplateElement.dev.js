"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileBackgroundOverlay = exports.UserProfileContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _setting = require("../../utils/setting");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n\n  width: 100%;\n  height: 100%;\n\n  background: linear-gradient(\n    to bottom,\n    rgba(0, 0, 0, 0.7) 40%,\n    transparent,\n    rgba(0, 0, 0, 0.7) 40%\n  );\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  background: url(", "\"/img/App/background.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 100%;\n  min-height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserProfileContainer = _styledComponents["default"].div(_templateObject(), _setting.PUBLIC_URL);

exports.UserProfileContainer = UserProfileContainer;

var UserProfileBackgroundOverlay = _styledComponents["default"].div(_templateObject2());

exports.UserProfileBackgroundOverlay = UserProfileBackgroundOverlay;