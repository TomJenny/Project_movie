"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FooterCheckoutButton = exports.FooterCheckoutTotal = exports.FooterCheckoutSeats = exports.CheckoutFooterContainer = void 0;

var _styledBreakpoints = require("styled-breakpoints");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _mixin = require("../../../components/Styles/mixin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  width: 100%;\n  height: 60px;\n  background: red;\n\n  color: white;\n  text-align: center;\n  line-height: 60px;\n\n  &:active,\n  &:focus {\n    color: white;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 20px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  color: white !important;\n  font-size: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  z-index: 99999;\n  width: 100%;\n  height: 60px;\n  background: white;\n  display: none;\n\n  ", "\n\n  ", " {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CheckoutFooterContainer = _styledComponents["default"].div(_templateObject(), (0, _mixin.GlassEffect)({
  trans: "0.2",
  blur: "2.5px",
  radius: "none"
}), (0, _styledBreakpoints.down)("sm"));

exports.CheckoutFooterContainer = CheckoutFooterContainer;

var FooterCheckoutSeats = _styledComponents["default"].div(_templateObject2());

exports.FooterCheckoutSeats = FooterCheckoutSeats;

var FooterCheckoutTotal = _styledComponents["default"].span(_templateObject3());

exports.FooterCheckoutTotal = FooterCheckoutTotal;

var FooterCheckoutButton = _styledComponents["default"].a(_templateObject4());

exports.FooterCheckoutButton = FooterCheckoutButton;