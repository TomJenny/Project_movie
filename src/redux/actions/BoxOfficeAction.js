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
    } catch (error) {}
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
