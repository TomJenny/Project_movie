import {
  CHANGE_TAB_ACTIVE,
  DELETE_LIST_SEAT_BOOKING,
  DISPLAY_SIDEBAR,
  SET_BOOKING_SEATS_USER,
  SET_LIST_BOX_OFFICE,
} from "../actions/types/BoxOfficeType";

const initialState = {
  arrListBoxOffices: [],
  arrSeatIsBooking: [],
  tabActive: "1",
  displaySidebar: false,
};

export const BoxOfficeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_BOX_OFFICE: {
      state.arrListBoxOffices = action.arrListBoxOffices;

      return { ...state };
    }
    case SET_BOOKING_SEATS_USER: {
      const arrSeatIsBookingUpdate = [...state.arrSeatIsBooking];

      let index = arrSeatIsBookingUpdate.findIndex(
        (seat, index) => action.seat.maGhe === seat.maGhe
      );
      if (index !== -1) {
        arrSeatIsBookingUpdate.splice(index, 1);
      } else {
        arrSeatIsBookingUpdate.push(action.seat);
      }

      state.arrSeatIsBooking = arrSeatIsBookingUpdate;
      return { ...state };
    }
    case DELETE_LIST_SEAT_BOOKING: {
      state.arrSeatIsBooking = [];
      return { ...state };
    }
    case CHANGE_TAB_ACTIVE: {
      state.tabActive = action.tabActive;
      return { ...state };
    }
    case DISPLAY_SIDEBAR: {
      state.displaySidebar = action.displaySidebar;
      return { ...state };
    }

    default:
      return state;
  }
};
