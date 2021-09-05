import { UpOutlined } from "@ant-design/icons";
import { BackTop } from "antd";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MultiSlickHome from "../../components/Slick/MultiSlickHome";
import { BackTopStyled } from "../../components/Styles/BackTop";
import { useBreakpoints } from "../../components/Styles/ResponsiveBreakpoints";
import TabsHomeCineplex from "../../components/TabMenu/TabsHomeCineplex";
import { getAPIListCinemaShowTimeAction } from "../../redux/actions/CinemaAction";
import { getAPIFilmAction } from "../../redux/actions/FilmAction";
import {
  displayLoadingAction,
  hideLoadingAction,
} from "../../redux/actions/LoadingAction";
import { GET_CAROUSEL } from "../../redux/actions/types/CarouselType";
import TabNews from "../News/TabsNews";
import HomeApp from "./App/HomeApp";
import HomeCarousel from "./Carousel/HomeCarousel";
import MovieTicket from "./MovieTicket/MovieTicket";

export default function Home(props) {
  const responsive = useBreakpoints();
  const dispatch = useDispatch();
  const { arrayFilm } = useSelector((state) => state.FilmReducer);
  useEffect(() => {
    (async () => {
      await dispatch(displayLoadingAction);
      const actionCarousel = {
        type: GET_CAROUSEL,
      };
      await dispatch(getAPIFilmAction());

      await dispatch(actionCarousel);

      await dispatch(getAPIListCinemaShowTimeAction());
      await dispatch(hideLoadingAction);
    })();
  }, []);

  return (
    <Fragment>
      <HomeCarousel />
      <div id="MovieTicket">
        <MovieTicket />
      </div>
      <div id="ShowTimes">
        <MultiSlickHome arrayFilm={arrayFilm} />
      </div>
      <div id="Cineplex">
        <TabsHomeCineplex />
      </div>
      <div id="News">
        <TabNews />
      </div>
      <div id="Apps">
        <HomeApp />
      </div>
      {responsive.isMd ? null : (
        <BackTop>
          <BackTopStyled visibilityHeight={800}>
            <UpOutlined />
          </BackTopStyled>
        </BackTop>
      )}
    </Fragment>
  );
}
