"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeAppContentRight = exports.HomeAppSlider = exports.HomeAppSlickImg = exports.HomeAppSLickPhone = exports.HomeAppContentLeftButton = exports.HomeAppContentLeftText = exports.HomeAppContentLeftTitle = exports.HomeAppContentLeft = exports.HomeAppBackgroundOverlay = exports.HomeAppContainer = void 0;

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = require("../../../components/Styles/Button");

var _setting = require("../../../utils/setting");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 0 auto;\n  width: 190px !important;\n  height: 404px !important;\n  ", " {\n    margin: 50px auto 0;\n    height: 550px !important;\n    width: 252px !important;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  position: absolute;\n  top: 2%;\n  left: 50%;\n  transform: translateX(-50%);\n\n  width: 179px;\n  height: 100%;\n  & .slick-track {\n    display: flex;\n  }\n  & .slick-slide.slick-current {\n    position: relative;\n    z-index: 1;\n  }\n  & .slick-list {\n    border-radius: 20px;\n    padding: 0;\n  }\n  ", " {\n    height: 550px !important;\n    width: 237px !important;\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  ", " {\n    height: 538px !important;\n    width: 252px !important;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  max-width: 250px;\n  height: 50px;\n  font-size: 18px;\n  background: red !important;\n  ", " {\n    max-width: 200px;\n    font-size: 14px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: white !important;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n  color: white !important;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 60px 10px;\n  max-width: 400px;\n\n  text-transform: capitalize !important;\n  color: white !important;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: linear-gradient(\n    to top,\n    rgba(0, 0, 0, 0.5) 40%,\n    transparent 10%,\n    rgba(0, 0, 0, 0.5) 40%\n  );\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  background: url(", "\"/img/App/background.jpg\");\n  background-attachment: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n  padding: 120px 0 80px 0;\n  margin-top: 100px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HomeAppContainer = _styledComponents["default"].div(_templateObject(), _setting.PUBLIC_URL);

exports.HomeAppContainer = HomeAppContainer;

var HomeAppBackgroundOverlay = _styledComponents["default"].div(_templateObject2());

exports.HomeAppBackgroundOverlay = HomeAppBackgroundOverlay;

var HomeAppContentLeft = _styledComponents["default"].div(_templateObject3());

exports.HomeAppContentLeft = HomeAppContentLeft;

var HomeAppContentLeftTitle = _styledComponents["default"].h1(_templateObject4());

exports.HomeAppContentLeftTitle = HomeAppContentLeftTitle;

var HomeAppContentLeftText = _styledComponents["default"].h3(_templateObject5());

exports.HomeAppContentLeftText = HomeAppContentLeftText;
var HomeAppContentLeftButton = (0, _styledComponents["default"])(_Button.ButtonPrimaryStyled)(_templateObject6(), (0, _styledBreakpoints.down)("sm"));
exports.HomeAppContentLeftButton = HomeAppContentLeftButton;

var HomeAppSLickPhone = _styledComponents["default"].img(_templateObject7(), (0, _styledBreakpoints.down)("md"));

exports.HomeAppSLickPhone = HomeAppSLickPhone;

var HomeAppSlickImg = _styledComponents["default"].img(_templateObject8());

exports.HomeAppSlickImg = HomeAppSlickImg;

var HomeAppSlider = _styledComponents["default"].div(_templateObject9(), (0, _styledBreakpoints.down)("md"));

exports.HomeAppSlider = HomeAppSlider;

var HomeAppContentRight = _styledComponents["default"].div(_templateObject10(), (0, _styledBreakpoints.down)("md"));

exports.HomeAppContentRight = HomeAppContentRight;