import { Col } from "antd";
import moment from "moment";
import React from "react";
import GetDayOfWeek from "../../../utils/helpers/dayofweek";
import FilmShowTimes from "../FilmShowTimes/FilmShowTimes";
import * as S from "../TabMenuElement";
import CinemaShowTimes from "../TabsCinemaShowTimes/CinemaShowTimes";

export default function TabsDayOfWeek(props) {
  const { cinemaBranches, cinema } = props;

  //display the day of weeks on tabs
  let arrDayOfWeek = [];
  arrDayOfWeek = GetDayOfWeek();

  //Filter films are equal the day

  return (
    <S.TabCinemaDayOfWeek tabPosition={"top"}>
      {arrDayOfWeek.map((day, index) => {
        return (
          <S.TabCinemaDayOfWeekTabPane
            tab={
              <S.TabCinemaDayOfWeekTitle>
                <Col>
                  <p>{moment(day).format("dddd")}</p>
                  <S.TabCinemaDayOfWeekText>
                    <p>{moment(day).format("DD")}</p>
                  </S.TabCinemaDayOfWeekText>
                </Col>
              </S.TabCinemaDayOfWeekTitle>
            }
            key={index}
          >
            {!cinemaBranches ? null : (
              <FilmShowTimes arrFilms={cinemaBranches.danhSachPhim} day={day} />
            )}
            {!cinema ? null : <CinemaShowTimes arrCinema={cinema} />}
          </S.TabCinemaDayOfWeekTabPane>
        );
      })}
    </S.TabCinemaDayOfWeek>
  );
}
