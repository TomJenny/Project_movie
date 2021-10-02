import Swal from "sweetalert2";
import { history } from "../../App";
import {
  SweetAlertFailure,
  SweetAlertSuccessful,
} from "../../components/_core/models/SweetAlert";
import { manageUserService } from "../../services/ManageUserService";
import {
  SET_ACCOUNT_INFO,
  SET_LIST_USERS,
  SET_LOGIN_ACTION,
  SET_REGISTER_ACTION,
} from "./types/UserType";

const alertUserSuccess = new SweetAlertSuccessful();
const alertUserFailure = new SweetAlertFailure();

export const getAPIUserInfoLogin = (userInfo) => {
  return async (dispatch) => {
    try {
      await manageUserService
        .getUserInfoLogin(userInfo)
        .then((response) => {
          const action = {
            type: SET_LOGIN_ACTION,
            userLogin: response.data,
          };
          dispatch(action);
          Swal.fire({
            ...alertUserSuccess,
            didDestroy: () => {
              history.push("/");
              window.location.reload();
            },
          });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      alertUserFailure.title = "Login Failed";
      alertUserFailure.text = "User Name or Your Password are not correct!";
      Swal.fire({ ...alertUserFailure });
    }
  };
};

export const postAPIUserInfoSignIn = (userInfo) => {
  return async (dispatch) => {
    try {
      await manageUserService
        .postUserInfoRegister(userInfo)
        .then((response) => {
          const action = {
            type: SET_REGISTER_ACTION,
            userRegister: response.data,
          };
          dispatch(action);
          alertUserSuccess.title = `${response.data.taiKhoan} " please login to enjoy the movie!"`;
          Swal.fire({
            ...alertUserSuccess,
            didDestroy: () => {
              history.push("/login");
            },
          });
        })
        .catch((error) => {
          throw error;
        });
    } catch (error) {
      alertUserFailure.title = "Register Failed";
      alertUserFailure.text = `${error.response?.data}`;
      Swal.fire({ ...alertUserFailure });
    }
  };
};

export const getAccountInfo = (accountName) => {
  return async (dispatch) => {
    try {
      let result = await manageUserService.getAccountInfo(accountName);
      const action = {
        type: SET_ACCOUNT_INFO,
        accountInfo: result.data,
      };
      dispatch(action);
    } catch (error) {}
  };
};

export const getListUsers = (accountName) => {
  return async (dispatch) => {
    try {
      let result = await manageUserService.getListUsers(accountName);
      const action = {
        type: SET_LIST_USERS,
        arrayUsers: result.data,
      };
      dispatch(action);
    } catch (error) {}
  };
};

export const postAPINewsUserAction = (NewUser) => {
  return async (dispatch) => {
    try {
      await manageUserService
        .postAddUser(NewUser)
        .then(() => {
          Swal.fire({
            ...alertUserSuccess,
            didDestroy: () => {
              history.push("/admin/users");
              dispatch(getListUsers());
            },
          });
        })
        .catch((error) => {
          throw error;
        });
    } catch (errors) {
      alertUserFailure.title = "Create Failed";
      alertUserFailure.text = `${errors.response?.data}`;
      Swal.fire({ ...alertUserFailure });
    }
  };
};

export const postAPIUpdateUserAction = (userUpdate, isAdmin) => {
  return async (dispatch) => {
    try {
      await manageUserService
        .putUpdateUser(userUpdate)
        .then(() => {
          Swal.fire({
            ...alertUserSuccess,
            didDestroy: () => {
              if (isAdmin) {
                history.push("/admin/users");
                dispatch(getListUsers());
              }
            },
          });
        })
        .catch((errors) => {
          throw errors;
        });
    } catch (errors) {
      alertUserFailure.title = "Update Failed";
      alertUserFailure.text = `${errors.response?.data}`;
      Swal.fire({ ...alertUserFailure });
    }
  };
};

export const deleteAPIUser = (account) => {
  return async (dispatch) => {
    try {
      await manageUserService
        .deleteUser(account)
        .then(() => {
          Swal.fire({
            ...alertUserSuccess,
            didDestroy: () => {
              dispatch(getListUsers());
            },
          });
        })
        .catch((error) => {
          throw error;
        });
    } catch (errors) {
      alertUserFailure.title = "Delete Failed";
      alertUserFailure.text = `${errors.response?.data}`;
      Swal.fire({ ...alertUserFailure });
    }
  };
};

export const getAPIFindUserById = (account) => {
  return async (dispatch) => {
    try {
      const result = await manageUserService.getFindUsers(account);
      const action = {
        type: SET_LIST_USERS,
        arrayUsers: result.data,
      };

      dispatch(action);
    } catch (errors) {}
  };
};
