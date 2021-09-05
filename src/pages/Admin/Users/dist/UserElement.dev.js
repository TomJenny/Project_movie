"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminUserAvatar2 = exports.AdminUserAvatar = exports.AdminUserInfo = exports.AdminUserForm = exports.UserAvatar = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 20px;\n  left: 50%;\n  transform: translate(-50%);\n  overflow: hidden;\n\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  padding: 10px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  & svg {\n    display: block;\n    font-size: 5.5rem;\n  }\n  background-color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  position: absolute;\n\n  top: 20px;\n  left: 50%;\n  transform: translate(-50%);\n  width: 150px;\n  height: 150px;\n  filter: drop-shadow(0 0 1px white) contrast(1.2);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background: ", ";\n\n  padding: 100px 20px 0;\n  border-radius: 5px 0 0 0;\n  height: 380px;\n\n  & h1 {\n    text-align: center;\n    margin-top: 100px;\n    color: white !important;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background: ", ";\n  padding: 30px 10px 0;\n  border-radius: 5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 50px;\n  height: 50px;\n  filter: drop-shadow(0 0 2px ", ");\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var UserAvatar = _macro["default"].img(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.secondary;
});

exports.UserAvatar = UserAvatar;

var AdminUserForm = _macro["default"].div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.black1;
});

exports.AdminUserForm = AdminUserForm;

var AdminUserInfo = _macro["default"].div(_templateObject3(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.black1;
});

exports.AdminUserInfo = AdminUserInfo;

var AdminUserAvatar = _macro["default"].img(_templateObject4());

exports.AdminUserAvatar = AdminUserAvatar;

var AdminUserAvatar2 = _macro["default"].div(_templateObject5(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.white4;
});

exports.AdminUserAvatar2 = AdminUserAvatar2;