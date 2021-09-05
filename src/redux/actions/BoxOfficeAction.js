import Swal from "sweetalert2";
import {
  SweetAlertFailure,
  SweetAlertSuccessful,
} from "../../components/_core/models/SweetAlert";
import { manageBoxOfficeService } from "../../services/ManagerBoxOfficeService";
import {
  CHANGE_TAB_ACTIVE,
  DELETE_LIST_SEAT_BOOKING,
  SET_LIST_BOX_OFFICE,
} from "./types/BoxOfficeType";
const alertSuccess = new SweetAlertSuccessful();
const alertFailure = new SweetAlertFailure();

export const getAPIListBoxOffice = (scheduleId) => {
  return async (dispatch) => {
    try {
      let result = await manageBoxOfficeService.getListBoxOffices(scheduleId);

      const action = {
        type: SET_LIST_BOX_OFFICE,
        arrListBoxOffices: result.data,
      };
      dispatch(action);
    } catch (error) {
      return console.log("error", error.response?.data);
    }
  };
};

export const bookTicketAction = (bookTicketInfo) => {
  return async (dispatch) => {
    try {
      await manageBoxOfficeService.postBookTicket(bookTicketInfo);

      await dispatch({ type: DELETE_LIST_SEAT_BOOKING });
      alertSuccess.title = "Successfully Booked";
      alertSuccess.text = "Enjoy your movie!";
      Swal.fire({
        ...alertSuccess,
        didDestroy: () => {
          dispatch({
            type: CHANGE_TAB_ACTIVE,
            tabActive: "2",
          });
        },
      });
    } catch (error) {
      alertFailure.title = "Book Failed";
      alertFailure.text = `${error.response?.data}`;
      Swal.fire({
        ...alertFailure,
      });
    }
  };
};

// export const bookSeatsAction = (seat, char, maLichChieu) => {
//   return async (dispatch, getState) => {
//     await dispatch({
//       type: GET_BOOKING_SEATS_USER,
//       seat: seat,
//     });

//     let danhSachGheDangDat = getState().BoxOfficeReducer.arrSeatIsBooking;
//     let taiKhoan = getState().UserReducer.userLogin.taiKhoan;
//     console.log(taiKhoan);
//     console.log(maLichChieu);

//     // danhSachGheDangDat = JSON.stringify(danhSachGheDangDat);
//     console.log(danhSachGheDangDat);

//     connection.invoke("datGhe", taiKhoan, danhSachGheDangDat, maLichChieu);
//   };
// };
