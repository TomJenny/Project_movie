import { SET_STATUS } from "../actions/types/ModalVideo";

const initialState = {
  status: { isOpen: false, videoId: "" },
};

export const ModalVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATUS: {
      state.status = action.status;
      return { ...state };
    }

    default:
      return state;
  }
};
