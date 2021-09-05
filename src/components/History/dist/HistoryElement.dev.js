"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HistoryLoadingTitle = exports.HistoryImage = exports.HistoryTitle = exports.HistoryHeader = exports.HistoryCardBody = exports.HistoryCard = exports.HistoryContainer = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _mixin = require("../Styles/mixin");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n\n  color: white;\n  text-align: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background-image: url(", ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  width: 90%;\n  height: 90%;\n  margin-top: 5px;\n  border-radius: 5px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  color: white;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 190px;\n  overflow-y: auto;\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 200px;\n  padding: 5px;\n\n  ", "\n  color: white;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  overflow-x: hidden;\n  max-height: 80vh;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &::-webkit-scrollbar-track {\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar {\n    width: 8px;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar-thumb {\n    border-radius: 10px;\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);\n    background-color: rgba(255, 255, 255, 0.5);\n    backdrop-filter: blur(4px);\n    -webkit-backdrop-filter: blur(4px);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var scrollBar = (0, _styledComponents.css)(_templateObject());

var HistoryContainer = _styledComponents["default"].div(_templateObject2(), scrollBar);

exports.HistoryContainer = HistoryContainer;

var HistoryCard = _styledComponents["default"].div(_templateObject3(), (0, _mixin.GlassEffect)({
  trans: "0.3",
  blur: "4px"
}));

exports.HistoryCard = HistoryCard;

var HistoryCardBody = _styledComponents["default"].div(_templateObject4(), scrollBar);

exports.HistoryCardBody = HistoryCardBody;

var HistoryHeader = _styledComponents["default"].h2(_templateObject5());

exports.HistoryHeader = HistoryHeader;

var HistoryTitle = _styledComponents["default"].span(_templateObject6());

exports.HistoryTitle = HistoryTitle;

var HistoryImage = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.src;
});

exports.HistoryImage = HistoryImage;

var HistoryLoadingTitle = _styledComponents["default"].h1(_templateObject8());

exports.HistoryLoadingTitle = HistoryLoadingTitle;