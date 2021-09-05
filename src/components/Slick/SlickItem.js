import { Row } from "antd";
import getVideoId from "get-video-id";
import moment from "moment";
import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { SET_STATUS } from "../../redux/actions/types/ModalVideo";
import { PUBLIC_URL } from "../../utils/setting";
import * as S from "./SlickElement";
export default function SlickItem(props) {
  const { film, activeTab } = props;
  const dispatch = useDispatch();

  return (
    <Fragment>
      <S.SlickHeader>
        <S.SlickOverLay to={`/detailfilm/${film.maPhim}`} />
        {activeTab === "1" ? (
          <S.SlickOverLayIMDB>
            {film.danhGia}
            <S.SlickIMDB src={PUBLIC_URL + "/img/imdb.svg"} />
          </S.SlickOverLayIMDB>
        ) : (
          <S.SlickOverLayDate>
            <S.SlickMonthYear>
              {moment(film.ngayKhoiChieu)
                .local("en-in")
                .format("MMM-YY")
                .toLocaleUpperCase()}
            </S.SlickMonthYear>
            <S.SlickDay>
              {moment(film.ngayKhoiChieu).format("DD").toLocaleUpperCase()}
            </S.SlickDay>
          </S.SlickOverLayDate>
        )}
        <S.SlickButtonOverlay
          onClick={() => {
            const action = {
              type: SET_STATUS,
              status: { isOpen: true, videoId: getVideoId(film.trailer).id },
            };

            dispatch(action);
          }}
        />
        <S.SlickImg
          src={film.hinhAnh}
          alt={film.tenPhim}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://picsum.photos/300/300";
          }}
        />
        <S.SlickAgeType>C18</S.SlickAgeType>
      </S.SlickHeader>
      <S.SlickFooter>
        <Row>
          <S.SlickFilmTitle>
            {film.tenPhim.length > 22
              ? film.tenPhim.slice(0, 22) + "..."
              : film.tenPhim}
          </S.SlickFilmTitle>
        </Row>
        {activeTab === "1" ? (
          <>
            <S.SlickFilmShowTime>
              <span>{moment(film.ngayKhoiChieu).format("DD-MM-YYYY")}</span>
              <span>120min</span>
            </S.SlickFilmShowTime>
            <S.SlickButtonBookTicket href={`/detailfilm/${film.maPhim}`}>
              BOOK NOW
            </S.SlickButtonBookTicket>
          </>
        ) : (
          ""
        )}
      </S.SlickFooter>
    </Fragment>
  );
}
