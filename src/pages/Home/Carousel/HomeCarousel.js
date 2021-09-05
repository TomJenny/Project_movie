import getVideoId from "get-video-id";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { SET_STATUS } from "../../../redux/actions/types/ModalVideo";
import * as S from "./CarouselElement";
import { settings } from "./CarouselSetting";

export default function HomeCarousel(props) {
  const dispatch = useDispatch();
  const { arrFilm } = useSelector((state) => state.CarouselReducer);

  const CarouselData = () => {
    return arrFilm.map((film, index) => {
      return (
        <S.CarouselContainer key={index} srcImg={film.hinhAnh}>
          <S.CarouselBackgroundOverlay />

          <S.CarouselPlayButton
            onClick={() => {
              const action = {
                type: SET_STATUS,
                status: { isOpen: true, videoId: getVideoId(film.trailer).id },
              };

              dispatch(action);
            }}
          />

          <Link
            to="MovieTicket"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <S.MouseScroll>
              <S.Mouse>
                <S.Wheel />
              </S.Mouse>
              <S.Arrow top />
              <S.Arrow center />
            </S.MouseScroll>
          </Link>
        </S.CarouselContainer>
      );
    });
  };
  return <S.CarouselSlider {...settings}>{CarouselData()}</S.CarouselSlider>;
}
