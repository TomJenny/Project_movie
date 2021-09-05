import { Col, Row } from "antd";
import getVideoId from "get-video-id";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIFilmShowTimesAction } from "../../redux/actions/CinemaAction";
import { getAPICommentsByIdAction } from "../../redux/actions/CommentAction";
import {
  displayLoadingAction,
  hideLoadingAction,
} from "../../redux/actions/LoadingAction";
import { SET_STATUS } from "../../redux/actions/types/ModalVideo";
import * as S from "./DetailFilmElement";
import TabsMenuDetailFilm from "./TabDetailFilm/Tabs";

export default function DetailFilm(props) {
  let filmID = props.match.params.id;

  const dispatch = useDispatch();
  const { filmShowTimes } = useSelector((state) => state.CinemaReducer);
  const { arrayCommentById } = useSelector((state) => state.CommentReducer);

  useEffect(() => {
    (async () => {
      await dispatch(displayLoadingAction);
      await dispatch(getAPIFilmShowTimesAction(filmID));
      await dispatch(getAPICommentsByIdAction(filmID));
      await dispatch(hideLoadingAction);
    })();
  }, []);
  return (
    <S.DetailFilmContainer>
      <S.DetailFilmBackgroundImg
        src={filmShowTimes?.hinhAnh}
        error="https://picsum.photos/300/300"
      >
        <S.DetailFilmBackground />
      </S.DetailFilmBackgroundImg>
      <S.DetailFilmContent>
        <Row align="middle">
          <S.DetailFilmContentImg
            src={filmShowTimes?.hinhAnh}
            error="https://picsum.photos/300/300"
          >
            <S.DetailCinemaPlayButton
              onClick={() => {
                const action = {
                  type: SET_STATUS,
                  status: {
                    isOpen: true,
                    videoId: getVideoId(filmShowTimes.trailer).id,
                  },
                };

                dispatch(action);
              }}
            />
          </S.DetailFilmContentImg>
          <Col>
            <S.DetailContainerTitle>
              <Row>
                <S.DetailFilmTextShowTimes>
                  {moment(filmShowTimes?.ngayKhoiChieu).format("DD-MM-YYYY")}
                </S.DetailFilmTextShowTimes>
              </Row>

              <Row>
                <S.DetailCinemaTextAgeType>C18</S.DetailCinemaTextAgeType>
                <S.DetailFilmContentTitle>
                  {filmShowTimes?.tenPhim}
                </S.DetailFilmContentTitle>
              </Row>
              <Row>
                <S.DetailFilmTextInfo>
                  <span>Action - Drama</span>
                  <span>- 120min</span>
                  <span>- 2D/Digtal</span>
                </S.DetailFilmTextInfo>
              </Row>
            </S.DetailContainerTitle>
            <Row>
              <S.ButtonBuyTicket type="primary" size="medium" danger>
                BUY TICKET
              </S.ButtonBuyTicket>
            </Row>
          </Col>
          <Col flex="auto">
            <S.DetailFilmRate>
              <Col>
                <S.DetailFilmCirclePercent
                  type="circle"
                  strokeColor={{
                    "0%": "#7ed321",
                    "100%": "#7ed321",
                  }}
                  trailColor={"rgba(255,255,255,0.2)"}
                  percent={(filmShowTimes?.danhGia * 100) / 10}
                  format={(percent) =>
                    `${
                      Number.isInteger(percent * 0.1)
                        ? percent * 0.1
                        : (percent * 0.1).toFixed(1)
                    }`
                  }
                  width={126}
                />
                <S.DetailFilmStar
                  disable
                  allowHalf
                  defaultValue={5}
                  autoFocus={true}
                />
                <p style={{ textAlign: "center" }}>
                  {arrayCommentById?.length} Reviews{" "}
                </p>
              </Col>
            </S.DetailFilmRate>
          </Col>
        </Row>
      </S.DetailFilmContent>
      <Row>
        <TabsMenuDetailFilm
          filmShowTimes={filmShowTimes}
          arrayCommentById={arrayCommentById}
          filmID={filmID}
        />
      </Row>
    </S.DetailFilmContainer>
  );
}
