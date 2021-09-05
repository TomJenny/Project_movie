import {
  SET_COMMENT_BY_ID,
  SET_LIST_COMMENTS,
  SET_MODAL_INVISIBLE,
  SET_MODAL_VISIBLE,
} from "../actions/types/CommentType";

const initialState = {
  arrayComment: [],
  arrayCommentById: [],
  isModalVisible: false,
};

export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_COMMENTS: {
      state.arrayComment = action.arrayComment;
      return { ...state };
    }
    case SET_COMMENT_BY_ID: {
      state.arrayCommentById = action.arrayCommentById;

      return { ...state };
    }
    case SET_MODAL_VISIBLE: {
      state.isModalVisible = true;
      return { ...state };
    }
    case SET_MODAL_INVISIBLE: {
      state.isModalVisible = false;
      return { ...state };
    }
    default:
      return state;
  }
};
