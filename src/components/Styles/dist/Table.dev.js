"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableStyled = void 0;

var _antd = require("antd");

var _macro = _interopRequireDefault(require("styled-components/macro"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    padding-top:20px;\n  & .ant-table-content {\n    background: ", ";\n    color: white;\n  }\n\n  & .ant-table-thead > tr > th {\n    background: ", ";\n    color: ", ";\n    border: none;\n  }\n\n  & .ant-table-tbody > tr > td {\n    border-bottom: 1px solid ", ";\n  }\n  & .ant-table-thead th.ant-table-column-has-sorters:hover {\n    background: ", ";\n  }\n  & .ant-table-column-sorter {\n    color: white;\n  }\n  & .ant-table-column-sorter-up.active,\n  .ant-table-column-sorter-down.active {\n    color: white;\n  }\n  & .ant-table-filter-trigger {\n    color: white;\n  }\n\n  & .ant-table-tbody > tr.ant-table-row:hover > td {\n    background: ", ";\n  }\n  & td.ant-table-column-sort {\n    background: ", ";\n  }\n\n  //page\n  &&& .ant-pagination-item-link .ant-pagination-item-ellipsis {\n    color: white!important;\n  }\n\n  & .ant-pagination-item,\n  &&& .ant-pagination-item-link,\n  &&& ant-pagination-options {\n    background: ", ";\n    color: white;\n  }\n  &&& .ant-select:not(.ant-select-customize-input) .ant-select-selector,\n  .ant-select-arrow {\n    background: ", ";\n    color: white;\n  }\n  & .ant-pagination-item a {\n    color: white !important;\n  }\n  & .ant-pagination-item-active {\n    color: white;\n    background: ", ";\n    border: 1px solid ", ";\n  }\n  & .ant-pagination-item-active a {\n    color: ", ";\n  }\n  &&& .ant-pagination-item-link-icon {\n    color: ", ";\n  }\n  & .ant-pagination-item:focus-visible,\n  .ant-pagination-item:hover,\n  &&& .ant-pagination-item-link:hover,\n  .ant-select:not(.ant-select-disabled):hover .ant-select-selector,\n  .ant-select:not(.ant-select-disabled):active .ant-select-selector {\n   {\n    border: 1px solid ", ";\n    box-shadow: none;\n    background: ", ";\n\n  }\n\n\n \n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TableStyled = (0, _macro["default"])(_antd.Table)(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.black1;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.primary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.white1;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.black2;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.red1;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.colors.black2;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.black3;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.black2;
}, function (_ref9) {
  var theme = _ref9.theme;
  return theme.colors.black2;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.primary;
}, function (_ref11) {
  var theme = _ref11.theme;
  return theme.colors.primary;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.colors.primary;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.colors.primary;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.primary;
}, function (_ref15) {
  var theme = _ref15.theme;
  return theme.colors.primary;
});
exports.TableStyled = TableStyled;