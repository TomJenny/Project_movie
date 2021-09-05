"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabMenuDetailContentRelateNews = exports.TabMenuDetailContentContent = exports.TabMenuDetailContentTitle = exports.TabMenuDetailContent = exports.TabMenuDetailContentContainer = exports.TabMenuDetailCinemaContainer = void 0;

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Title = require("../../../components/Styles/Title");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: 50px 0;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: ", ";\n\n  text-align: justify;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 35%;\n  ", " {\n    width: 40%;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  & p {\n    color: white !important;\n    font-size: 0.9rem;\n  }\n\n  ", " {\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-height: 870px;\n  max-width: 870px;\n  width: 100%;\n\n  padding-right: 15px;\n  padding-left: 15px;\n  margin: 0 auto;\n\n  transform: translateY(-70px);\n\n  &&& .ant-tabs-ink-bar {\n    display: none;\n  }\n  &&& .ant-tabs-nav::before {\n    display: none;\n  }\n\n  &&&\n    .ant-tabs-tab.ant-tabs-tab-active\n    .ant-tabs-tab-btn\n    ", ",\n    .ant-tabs-tab-btn:focus\n    ", ",\n    .ant-tabs-tab-remove:focus\n    ", ",\n    .ant-tabs-tab-btn:active\n    ", ",\n    .ant-tabs-tab-remove:active\n    ", " {\n    transform: scale(1.1);\n    color: white;\n    letter-spacing: 2px !important;\n    & span {\n      display: none;\n    }\n  }\n  ", " {\n    margin-top: 70px;\n  }\n\n  &&& .ant-tabs-tab + .ant-tabs-tab {\n    margin: 0;\n  }\n  ", " {\n    &&& .ant-tabs-nav-list {\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TabMenuDetailCinemaContainer = _styledComponents["default"].div(_templateObject(), _Title.TitleTabsStyled, _Title.TitleTabsStyled, _Title.TitleTabsStyled, _Title.TitleTabsStyled, _Title.TitleTabsStyled, (0, _styledBreakpoints.down)("md"), (0, _styledBreakpoints.down)("xs"));

exports.TabMenuDetailCinemaContainer = TabMenuDetailCinemaContainer;

var TabMenuDetailContentContainer = _styledComponents["default"].div(_templateObject2());

exports.TabMenuDetailContentContainer = TabMenuDetailContentContainer;

var TabMenuDetailContent = _styledComponents["default"].div(_templateObject3(), (0, _styledBreakpoints.down)("md"));

exports.TabMenuDetailContent = TabMenuDetailContent;

var TabMenuDetailContentTitle = _styledComponents["default"].p(_templateObject4(), (0, _styledBreakpoints.down)("md"));

exports.TabMenuDetailContentTitle = TabMenuDetailContentTitle;

var TabMenuDetailContentContent = _styledComponents["default"].p(_templateObject5(), function (props) {
  return props.maxWidth ? props.maxWidth : "40%";
});

exports.TabMenuDetailContentContent = TabMenuDetailContentContent;

var TabMenuDetailContentRelateNews = _styledComponents["default"].p(_templateObject6());

exports.TabMenuDetailContentRelateNews = TabMenuDetailContentRelateNews;