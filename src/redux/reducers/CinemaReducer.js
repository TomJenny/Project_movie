import {
  GET_CINEMA_BRANCH,
  GET_CINEMA_BRANCH_BY_FILM,
  GET_DATE_BY_CINEMA_BRANCH,
  GET_FILM_SHOW_TIMES,
  GET_LIST_CINEMA_SHOW_TIMES,
  GET_TIME_BY_DATE,
} from "../actions/types/CinemaType";
import moment from "moment";
import _ from "lodash";

const initialState = {
  arrayCinemaShowTimes: [],
  filmShowTimes: {},
  cinemaBranch: {},
  listCinemaBranch: [],
  dateShowTimes: [],
  showTimes: [],
};

export const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_CINEMA_SHOW_TIMES: {
      state.arrayCinemaShowTimes = action.arrayCinemaShowTimes;

      return { ...state };
    }
    case GET_FILM_SHOW_TIMES: {
      state.filmShowTimes = action.filmShowTimes;
      return { ...state };
    }
    case GET_CINEMA_BRANCH: {
      state.cinemaBranch = state.arrayCinemaShowTimes[0].lstCumRap.filter(
        (cinemaBranch, index) => {
          return cinemaBranch.maCumRap === action.cinemaBranchID;
        }
      )[0];
      return { ...state };
    }
    case GET_CINEMA_BRANCH_BY_FILM: {
      state.listCinemaBranch = [];
      state.filmShowTimes.heThongRapChieu.forEach((cinema, index) =>
        cinema.cumRapChieu.forEach((cinemaBranch) =>
          state.listCinemaBranch.push(cinemaBranch)
        )
      );

      return { ...state };
    }
    case GET_DATE_BY_CINEMA_BRANCH: {
      state.dateShowTimes = state.listCinemaBranch.filter(
        (filmShowTimes, index) => {
          return filmShowTimes.maCumRap === action.cinemaBranch;
        }
      )[0].lichChieuPhim;

      state.dateShowTimes = state.dateShowTimes.map((dateShowTime, index) => {
        let date = moment(dateShowTime.ngayChieuGioChieu).format("YYYY-MM-DD");
        let time = dateShowTime.ngayChieuGioChieu;
        dateShowTime.ngayChieuGioChieu = date.toString();
        return {
          ...dateShowTime,
          time: time,
        };
      });

      state.dateShowTimes = _.chain(state.dateShowTimes)
        .groupBy(function (x) {
          return x.ngayChieuGioChieu;
        })
        .map((value, key) => ({ date: key, showTime: value }))
        .value();

      return { ...state };
    }
    case GET_TIME_BY_DATE: {
      state.showTimes = state.dateShowTimes.filter((showTimes, index) => {
        return showTimes.date === action.date;
      });
      state.showTimes = state.showTimes[0].showTime;
      return { ...state };
    }

    default:
      return state;
  }
};
