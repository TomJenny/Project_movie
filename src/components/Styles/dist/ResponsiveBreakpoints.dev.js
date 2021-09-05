"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBreakpoints = void 0;

var _styledBreakpoints = require("styled-breakpoints");

var _reactStyled = require("styled-breakpoints/react-styled");

var useBreakpoints = function useBreakpoints() {
  var isXs = (0, _reactStyled.useBreakpoint)((0, _styledBreakpoints.down)("xs")); // down => '@media (max-width: 991.98px) { ... }'

  var isSm = (0, _reactStyled.useBreakpoint)((0, _styledBreakpoints.down)("sm"));
  var isMd = (0, _reactStyled.useBreakpoint)((0, _styledBreakpoints.down)("md"));
  var isLg = (0, _reactStyled.useBreakpoint)((0, _styledBreakpoints.down)("lg"));
  var isXl = (0, _reactStyled.useBreakpoint)((0, _styledBreakpoints.up)("xl"));
  return {
    isXs: isXs,
    isSm: isSm,
    isMd: isMd,
    isLg: isLg,
    isXl: isXl
  };
};

exports.useBreakpoints = useBreakpoints;