"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserReducer = void 0;

var _setting = require("../../utils/setting");

var _UserType = require("../actions/types/UserType");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = {};

if (localStorage.hasOwnProperty(_setting.USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(_setting.USER_LOGIN));
}

var initialState = {
  userLogin: user,
  accountInfo: {},
  arrayUsers: [],
  totalCustomers: 0
};

var UserReducer = function UserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _UserType.SET_LOGIN_ACTION:
      {
        if (action.userLogin) {
          localStorage.setItem(_setting.USER_LOGIN, JSON.stringify(action.userLogin));
          localStorage.setItem(_setting.ACCESSTOKEN, action.userLogin.accessToken);
          state.userLogin = action.userLogin;
        }

        return _objectSpread({}, state);
      }

    case _UserType.SET_CLEAR_LOGIN_ERROR_MESSAGE:
      {
        state.loginError = "";
        return _objectSpread({}, state);
      }

    case _UserType.SET_ACCOUNT_INFO:
      {
        state.accountInfo = action.accountInfo;
        return _objectSpread({}, state);
      }

    case _UserType.SET_LIST_USERS:
      {
        state.arrayUsers = action.arrayUsers;
        return _objectSpread({}, state);
      }

    case _UserType.SET_TOTAL_CUSTOMER:
      {
        state.totalCustomers = state.arrayUsers.filter(function (user) {
          return user.maLoaiNguoiDung === "KhachHang";
        }).length;
        return _objectSpread({}, state);
      }

    default:
      return state;
  }
};

exports.UserReducer = UserReducer;