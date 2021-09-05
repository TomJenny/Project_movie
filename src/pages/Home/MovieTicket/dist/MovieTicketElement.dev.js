"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieTicketYoutubePlayer = exports.CarouselArrowLeft = exports.CarouselArrowRight = exports.MovieTicketIconIoTime = exports.MovieTicketIconBsCalendarFill = exports.MovieTicketIconAiFillVideoCamera = exports.MovieTicketIconMdMovieFilter = exports.MovieTicketSelect = exports.MovieTicketFormItem = exports.MovieTicketQRCode = exports.MovieTicketLeft = exports.MovieTicketRight = exports.MovieTicketBody = exports.MovieTicketSlider = exports.MovieTicketContainer = void 0;

var _icons = require("@ant-design/icons");

var _antd = require("antd");

var _qrcode = _interopRequireDefault(require("qrcode.react"));

var _ai = require("react-icons/ai");

var _bs = require("react-icons/bs");

var _io = require("react-icons/io5");

var _md = require("react-icons/md");

var _reactPlayer = _interopRequireDefault(require("react-player"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _setting = require("../../../utils/setting");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject17() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  left: 20px;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  right: 20px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(255, 0, 0) !important;\n  font-size: 35px;\n  position: absolute;\n  z-index: 9999999999;\n  top: 60%;\n  opacity: 0;\n  ", ":hover & {\n    opacity: 1;\n    color: rgba(255, 0, 0) !important;\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  padding: 4px;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  padding: 6px;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  padding: 6px;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  padding: 5px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  font-size: 32px;\n  border-radius: 50%;\n  color: white;\n  background-color: rgba(255, 0, 0);\n  box-shadow: 0 0 10px black;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  & .ant-select-arrow {\n    color: white;\n  }\n  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input).ant-select-open\n    .ant-select-arrow {\n    transition: all 0.2s ease;\n    transform: rotate(180deg);\n  }\n  &:not(.ant-select-customize-input) .ant-select-selector {\n    background-color: rgba(0, 0, 0, 0.7);\n    backdrop-filter: blur(1px);\n    -webkit-backdrop-filter: blur(1px);\n    border-radius: 15px;\n    border: 2px solid white;\n\n    & .ant-select-selection-item {\n      color: white;\n    }\n  }\n  &.ant-select:not(.ant-select-disabled):hover .ant-select-selector,\n  .ant-select:not(.ant-select-disabled):focus .ant-select-selector {\n    border: 1px solid red;\n    box-shadow: 0 0 10px red;\n    color: black;\n  }\n  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)\n    .ant-select-selector {\n    border: 1px solid red;\n    box-shadow: 0 0 10px red;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 auto;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 180px;\n  height: 350px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 30px;\n  & .slick-track {\n    padding-top: 53px;\n    padding-bottom: 53px;\n    display: flex;\n    align-items: flex-end;\n  }\n\n  & .slick-slide.slick-current {\n    position: relative;\n    z-index: 1;\n    transform: scale(1.1) translateY(0px);\n    transition: all 0.5s ease-out !important;\n    ", " {\n      filter: contrast(130%) brightness(1.2) drop-shadow(0 0 1px white);\n    }\n  }\n  & .slick-slide:not(.slick-current) {\n    filter: brightness(0.3) !important;\n    transform: translateY(40px);\n  }\n  ", " {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 600px !important;\n  height: 345px;\n  background-image: url(", "\"/img/bookticket.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: left;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MovieTicketContainer = _styledComponents["default"].div(_templateObject(), _setting.PUBLIC_URL);

exports.MovieTicketContainer = MovieTicketContainer;
var MovieTicketSlider = (0, _styledComponents["default"])(_reactSlick["default"])(_templateObject2(), MovieTicketContainer, (0, _styledBreakpoints.down)("xs"));
exports.MovieTicketSlider = MovieTicketSlider;

var MovieTicketBody = _styledComponents["default"].div(_templateObject3());

exports.MovieTicketBody = MovieTicketBody;
var MovieTicketRight = (0, _styledComponents["default"])(_antd.Row)(_templateObject4());
exports.MovieTicketRight = MovieTicketRight;

var MovieTicketLeft = _styledComponents["default"].div(_templateObject5());

exports.MovieTicketLeft = MovieTicketLeft;
var MovieTicketQRCode = (0, _styledComponents["default"])(_qrcode["default"])(_templateObject6()); //Form

exports.MovieTicketQRCode = MovieTicketQRCode;
var MovieTicketFormItem = (0, _styledComponents["default"])(_antd.Form.Item)(_templateObject7());
exports.MovieTicketFormItem = MovieTicketFormItem;
var MovieTicketSelect = (0, _styledComponents["default"])(_antd.Select)(_templateObject8()); //Icon

exports.MovieTicketSelect = MovieTicketSelect;
var MovieTicketIcon = (0, _styledComponents.css)(_templateObject9());
var MovieTicketIconMdMovieFilter = (0, _styledComponents["default"])(_md.MdMovieFilter)(_templateObject10(), MovieTicketIcon);
exports.MovieTicketIconMdMovieFilter = MovieTicketIconMdMovieFilter;
var MovieTicketIconAiFillVideoCamera = (0, _styledComponents["default"])(_ai.AiFillVideoCamera)(_templateObject11(), MovieTicketIcon);
exports.MovieTicketIconAiFillVideoCamera = MovieTicketIconAiFillVideoCamera;
var MovieTicketIconBsCalendarFill = (0, _styledComponents["default"])(_bs.BsCalendarFill)(_templateObject12(), MovieTicketIcon);
exports.MovieTicketIconBsCalendarFill = MovieTicketIconBsCalendarFill;
var MovieTicketIconIoTime = (0, _styledComponents["default"])(_io.IoTime)(_templateObject13(), MovieTicketIcon); //Arrow slider style

exports.MovieTicketIconIoTime = MovieTicketIconIoTime;
var MovieTicketArrow = (0, _styledComponents.css)(_templateObject14(), MovieTicketSlider);
var CarouselArrowRight = (0, _styledComponents["default"])(_icons.RightOutlined)(_templateObject15(), MovieTicketArrow);
exports.CarouselArrowRight = CarouselArrowRight;
var CarouselArrowLeft = (0, _styledComponents["default"])(_icons.LeftOutlined)(_templateObject16(), MovieTicketArrow); //youtube player

exports.CarouselArrowLeft = CarouselArrowLeft;
var MovieTicketYoutubePlayer = (0, _styledComponents["default"])(_reactPlayer["default"]).attrs({
  playing: true,
  light: true,
  width: "600px",
  height: "300px"
})(_templateObject17());
exports.MovieTicketYoutubePlayer = MovieTicketYoutubePlayer;