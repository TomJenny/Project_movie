"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfileInfoTicket = exports.ProfileInfoName = exports.ProfileImg = exports.ProfileInfoUser = exports.ProfileForm = exports.ProfileTabPane = exports.ProfileTabs = exports.ProfileContainer = void 0;

var _antd = require("antd");

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mixin = require("../../components/Styles/mixin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.5rem;\n  & svg {\n    margin-right: 10px;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n  white-space: wrap;\n  word-break: break-all;\n  text-transform: uppercase;\n  font-size: 1.5rem;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  width: 150px;\n  height: 150px;\n  margin: 20px auto 10px;\n  filter: drop-shadow(0 0 1px white) contrast(1.2);\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 80px 0 0;\n  width: 100%;\n  height: 100%;\n  color: white;\n  text-align: center;\n  /* ", " */\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 80px 0 0;\n\n  /* ", " */\n  padding: 70px 20px 10px;\n  width: 100%;\n  height: 100%;\n\n  ", " {\n    margin: 0;\n    padding: 0 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100vw;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 60px;\n  width: 100vw;\n  height: auto;\n  overflow-x: hidden;\n  &&& .ant-tabs-ink-bar {\n    display: none;\n  }\n  &&& .ant-tabs-nav::before {\n    display: none;\n  }\n  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn a,\n  .ant-tabs-tab-btn:focus a,\n  .ant-tabs-tab-remove:focus a,\n  .ant-tabs-tab-btn:active a,\n  .ant-tabs-tab-remove:active a {\n    transform: scale(1.1);\n    color: white;\n    letter-spacing: 2px !important;\n\n    & span {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabPane = _antd.Tabs.TabPane;

var ProfileContainer = _styledComponents["default"].div(_templateObject());

exports.ProfileContainer = ProfileContainer;
var ProfileTabs = (0, _styledComponents["default"])(_antd.Tabs)(_templateObject2());
exports.ProfileTabs = ProfileTabs;
var ProfileTabPane = (0, _styledComponents["default"])(TabPane)(_templateObject3());
exports.ProfileTabPane = ProfileTabPane;

var ProfileForm = _styledComponents["default"].div(_templateObject4(), (0, _mixin.GlassEffect)({
  Transparency: 0.3,
  Blur: 4
}), (0, _styledBreakpoints.down)("sm"));

exports.ProfileForm = ProfileForm;

var ProfileInfoUser = _styledComponents["default"].div(_templateObject5(), (0, _mixin.GlassEffect)({
  color: "0,0,0",
  Transparency: 0.4,
  Blur: 2
}));

exports.ProfileInfoUser = ProfileInfoUser;

var ProfileImg = _styledComponents["default"].img(_templateObject6());

exports.ProfileImg = ProfileImg;

var ProfileInfoName = _styledComponents["default"].p(_templateObject7());

exports.ProfileInfoName = ProfileInfoName;

var ProfileInfoTicket = _styledComponents["default"].p(_templateObject8());

exports.ProfileInfoTicket = ProfileInfoTicket;