"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminTemplateSidebar = exports.AdminTemplateWelcome = exports.AdminTemplateButtonUser = exports.AdminTemplateLogo = exports.AdminTemplateContainer = void 0;

var _antd = require("antd");

var _Sider = _interopRequireDefault(require("antd/lib/layout/Sider"));

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  text-transform: uppercase;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 50;\n  height: 50;\n  margin-left: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  max-width: 220px;\n  height: 65px;\n  margin: auto;\n  padding: 0 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", "!important;\n  &&& .ant-layout-sider,\n  &&& .ant-layout-header {\n    background: ", ";\n  }\n\n  &&& .ant-menu-dark .ant-menu-inline.ant-menu-sub {\n    background: ", ";\n  }\n\n  & .ant-menu.ant-menu-dark,\n  .ant-menu-dark .ant-menu-sub,\n  & .ant-menu.ant-menu-dark .ant-menu-sub,\n  &&& .ant-layout-sider-trigger {\n    background: ", ";\n  }\n  &&&\n    .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal)\n    .ant-menu-item-selected {\n    background: ", ";\n  }\n\n  &&& .ant-layout .site-layout,\n  &&& .ant-layout-footer {\n    background: ", ";\n  }\n\n  &&& .ant-layout-sider-children {\n    overflow-x: hidden;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AdminTemplateContainer = _macro["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.black1;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.black1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.black3;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.secondary;
});

exports.AdminTemplateContainer = AdminTemplateContainer;

var AdminTemplateLogo = _macro["default"].img(_templateObject2());

exports.AdminTemplateLogo = AdminTemplateLogo;
var AdminTemplateButtonUser = (0, _macro["default"])(_antd.Button)(_templateObject3());
exports.AdminTemplateButtonUser = AdminTemplateButtonUser;

var AdminTemplateWelcome = _macro["default"].h1(_templateObject4());

exports.AdminTemplateWelcome = AdminTemplateWelcome;
var AdminTemplateSidebar = (0, _macro["default"])(_Sider["default"])(_templateObject5());
exports.AdminTemplateSidebar = AdminTemplateSidebar;