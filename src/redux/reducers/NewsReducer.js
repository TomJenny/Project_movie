import { SET_LIST_NEWS } from "../actions/types/NewsType";

const initialState = {
  arrayNews: [],
  arrayReviews: [],
  arrayPromotions: [],
};

export const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST_NEWS: {
      state.arrayNews = action.arrayInfo.filter(
        (item) => item.typenews === "news"
      );
      state.arrayReviews = action.arrayInfo.filter(
        (item) => item.typenews === "reviews"
      );
      state.arrayPromotions = action.arrayInfo.filter(
        (item) => item.typenews === "promotion"
      );
      return { ...state };
    }

    default:
      return state;
  }
};
