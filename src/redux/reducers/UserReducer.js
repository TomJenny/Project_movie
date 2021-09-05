import { ACCESSTOKEN, USER_LOGIN } from "../../utils/setting";
import {
  SET_CLEAR_LOGIN_ERROR_MESSAGE,
  SET_ACCOUNT_INFO,
  SET_LOGIN_ACTION,
  SET_LIST_USERS,
  SET_TOTAL_CUSTOMER,
} from "../actions/types/UserType";

let user = {};

if (localStorage.hasOwnProperty(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
  userLogin: user,
  accountInfo: {},
  arrayUsers: [],
  totalCustomers: 0,
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_ACTION: {
      if (action.userLogin) {
        localStorage.setItem(USER_LOGIN, JSON.stringify(action.userLogin));
        localStorage.setItem(ACCESSTOKEN, action.userLogin.accessToken);
        state.userLogin = action.userLogin;
      }
      return { ...state };
    }
    case SET_CLEAR_LOGIN_ERROR_MESSAGE: {
      state.loginError = "";
      return { ...state };
    }
    case SET_ACCOUNT_INFO: {
      state.accountInfo = action.accountInfo;
      return { ...state };
    }
    case SET_LIST_USERS: {
      state.arrayUsers = action.arrayUsers;
      return { ...state };
    }
    case SET_TOTAL_CUSTOMER: {
      state.totalCustomers = state.arrayUsers.filter(
        (user) => user.maLoaiNguoiDung === "KhachHang"
      ).length;
      return { ...state };
    }

    default:
      return state;
  }
};
