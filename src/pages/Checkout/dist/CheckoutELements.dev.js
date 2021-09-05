"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckoutTabs = exports.CheckOutBackground = exports.CheckOutBackgroundOverlay = exports.CheckOutContainer = void 0;

var _antd = require("antd");

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      display: none;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  padding-top: 60px;\n  overflow-y: auto;\n\n  ", " {\n    margin-bottom: 60px;\n  }\n  ", "\n  color: White;\n\n  &&& .ant-tabs-nav .ant-tabs-nav-wrap,\n  &&& div > .ant-tabs-nav .ant-tabs-nav-wrap {\n    width: 68vw;\n    flex: none;\n    justify-content: center;\n  }\n\n  &&& .ant-tabs-nav::before {\n    border-bottom: none !important;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 1;\n  filter: blur(20px);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 2;\n  background: rgba(0, 0, 0, 0.4);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckOutContainer = _styledComponents["default"].div(_templateObject());

exports.CheckOutContainer = CheckOutContainer;

var CheckOutBackgroundOverlay = _styledComponents["default"].div(_templateObject2());

exports.CheckOutBackgroundOverlay = CheckOutBackgroundOverlay;

var CheckOutBackground = _styledComponents["default"].img(_templateObject3());

exports.CheckOutBackground = CheckOutBackground;
var CheckoutTabs = (0, _styledComponents["default"])(_antd.Tabs)(_templateObject4(), (0, _styledBreakpoints.down)("sm"), function (props) {
  return props.displaysidebar === "true" && (0, _styledComponents.css)(_templateObject5());
});
exports.CheckoutTabs = CheckoutTabs;