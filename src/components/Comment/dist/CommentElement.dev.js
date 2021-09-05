"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentButton = exports.CommentRateNumber = exports.ButtonComment = exports.FormComment = exports.CommentRegisterContainer = exports.FooterCommentContainer = exports.CommentRate = exports.CommentHeaderTime = exports.CommentHeaderUserName = exports.CommentHeaderContainer = exports.CommentItemContainer = exports.CommentContainer = void 0;

var _antd = require("antd");

var _styledBreakpoints = require("styled-breakpoints");

var _macro = _interopRequireDefault(require("styled-components/macro"));

var _Button = require("../Styles/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin: 35px 10px;\n  width: 100px;\n  height: 35px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 1.25rem;\n  margin-left: 10px;\n  line-height: 1.7;\n  color: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  min-width: 100%;\n  height: 40px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between !important;\n  align-items: center;\n\n  min-height: 60px;\n  width: 100%;\n  background: ", ";\n  margin-bottom: 10px;\n  border-radius: 5px;\n  padding: 10px 20px 12px;\n  cursor: pointer;\n\n  &&& .ant-rate {\n    /* font-size: 0.625rem; */\n    color: ", "!important;\n  }\n  & .ant-row > span {\n    line-height: 36px;\n    color: ", ";\n  }\n\n  ", " {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  & span {\n    margin-right: 5px;\n    color: ", "!important;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  color: ", ";\n  font-weight: ", ";\n  font-size: 1rem;\n  line-height: 1;\n  text-align: center;\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.75rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: ", ";\n  text-transform: capitalize;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  & span {\n    margin-left: 5px;\n  }\n  &&& .ant-rate {\n    font-size: 0.625rem;\n    color: ", "!important;\n\n    & .ant-rate-star:not(:last-child) {\n      margin: 0;\n    }\n\n  }\n  ", " {\n    flex-direction: column;\n    align-items: start;\n &&& .ant-rate {\n      margin-left:38px;\n  \n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding: 20px 20px 12px;\n  height: auto;\n  margin-bottom: 20px;\n  border-radius: 5px !important;\n  background: white;\n\n  &&& .ant-collapse-header {\n    padding: 0;\n  }\n\n  &&& .ant-divider {\n    margin: 10px 0 5px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  max-width: 580px;\n  margin: 0 auto;\n  height: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Panel = _antd.Collapse.Panel;

var CommentContainer = _macro["default"].div(_templateObject());

exports.CommentContainer = CommentContainer;
var CommentItemContainer = (0, _macro["default"])(Panel)(_templateObject2());
exports.CommentItemContainer = CommentItemContainer;

var CommentHeaderContainer = _macro["default"].div(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.red1;
}, (0, _styledBreakpoints.down)("xs"));

exports.CommentHeaderContainer = CommentHeaderContainer;

var CommentHeaderUserName = _macro["default"].span(_templateObject4(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.fontWeight.medium;
});

exports.CommentHeaderUserName = CommentHeaderUserName;

var CommentHeaderTime = _macro["default"].span(_templateObject5());

exports.CommentHeaderTime = CommentHeaderTime;

var CommentRate = _macro["default"].p(_templateObject6(), function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.red1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.fontWeight.regular;
}, (0, _styledBreakpoints.down)("xs"));

exports.CommentRate = CommentRate;

var FooterCommentContainer = _macro["default"].div(_templateObject7(), function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.white4;
}); //comment header


exports.FooterCommentContainer = FooterCommentContainer;

var CommentRegisterContainer = _macro["default"].div(_templateObject8(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.white1;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.red1;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.white3;
}, (0, _styledBreakpoints.down)("xs"));

exports.CommentRegisterContainer = CommentRegisterContainer;
var FormComment = (0, _macro["default"])(_antd.Form)(_templateObject9());
exports.FormComment = FormComment;
var ButtonComment = (0, _macro["default"])(_Button.ButtonPrimaryStyled)(_templateObject10());
exports.ButtonComment = ButtonComment;

var CommentRateNumber = _macro["default"].span(_templateObject11(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.white5;
});

exports.CommentRateNumber = CommentRateNumber;
var CommentButton = (0, _macro["default"])(_Button.ButtonPrimaryStyled)(_templateObject12());
exports.CommentButton = CommentButton;