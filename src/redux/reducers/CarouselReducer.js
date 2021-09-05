import { PUBLIC_URL } from "../../utils/setting";
import { GET_CAROUSEL } from "../actions/types/CarouselType";

const initialState = {
  arrFilm: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: `${PUBLIC_URL}/img/Carousel/latmat48h.jpg`,
      trailer: "https://www.youtube.com/embed/U3LcgxAefhM",
    },
    {
      maBanner: 2,
      maPhim: 1283,
      hinhAnh: `${PUBLIC_URL}/img/Carousel/BanTayDietQuy.jpg`,
      trailer: "https://www.youtube.com/embed/9nyV-pgMX4I",
    },
    {
      maBanner: 3,
      maPhim: 1284,
      hinhAnh: `${PUBLIC_URL}/img/Carousel/Mortal-Kombat-Cover.jpg`,
      trailer: "https://www.youtube.com/embed/NnjJiwYsT9c",
    },
  ],
};

export const CarouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAROUSEL: {
      return { ...state };
    }
    default:
      return state;
  }
};
