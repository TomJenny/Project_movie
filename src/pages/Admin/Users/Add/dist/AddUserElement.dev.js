"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminAddUserAvatar = exports.AdminAddUserInfo = exports.AdminAddUserForm = void 0;

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  margin: 70px 10px 0;\n\n  padding: 30px 10px 0;\n  border-radius: 5px;\n  height: 330px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 30px 10px 0;\n  border-radius: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AdminAddUserForm = _macro["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.black1;
});

exports.AdminAddUserForm = AdminAddUserForm;

var AdminAddUserInfo = _macro["default"].div(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.black1;
});

exports.AdminAddUserInfo = AdminAddUserInfo;

var AdminAddUserAvatar = _macro["default"].img(_templateObject3());

exports.AdminAddUserAvatar = AdminAddUserAvatar;