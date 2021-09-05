import { Col, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAPIListCinemaShowTimeAction } from "../../redux/actions/CinemaAction";
import { getAPICommentsByIdAction } from "../../redux/actions/CommentAction";
import {
  displayLoadingAction,
  hideLoadingAction,
} from "../../redux/actions/LoadingAction";
import { GET_CINEMA_BRANCH } from "../../redux/actions/types/CinemaType";
import { PUBLIC_URL } from "../../utils/setting";
import * as S from "./DetailCinemaElement";
import TabsMenuDetailCinema from "./TabDetailCinema/Tabs";

export default function DetailCinema(props) {
  const dispatch = useDispatch();
  const { arrayCommentById } = useSelector((state) => state.CommentReducer);
  const { cinemaBranch } = useSelector((state) => state.CinemaReducer);
  let cinema = props.match.params.cinema;
  let cinemaBranchID = props.match.params.id;
  const CinemaBranchImage = cinemaBranch?.tenCumRap
    ?.split("-")[0]
    .trim()
    .replace(/\s+/g, "");

  useEffect(() => {
    (async () => {
      const action = {
        type: GET_CINEMA_BRANCH,
        cinemaBranchID: cinemaBranchID,
      };

      await dispatch(displayLoadingAction);
      await dispatch(getAPIListCinemaShowTimeAction(cinema));
      await dispatch(action);
      await dispatch(getAPICommentsByIdAction(cinemaBranchID));
      await dispatch(hideLoadingAction);
    })();
  }, [cinemaBranchID]);

  return (
    <S.DetailCinemaContainer>
      <S.DetailCinemaBackgroundImg
        src={PUBLIC_URL + `/img/Cinema/${CinemaBranchImage}.jpg`}
      >
        <S.DetailCinemaBackground />
      </S.DetailCinemaBackgroundImg>

      <S.DetailCinemaContent>
        <Row align="middle">
          <S.DetailCinemaContentImg
            src={PUBLIC_URL + `/img/Cinema/${CinemaBranchImage}.jpg`}
          />
          <Col>
            <S.DetailCinemaContentInfo>
              <S.DetailCinemaContentTitle>
                {cinemaBranch.tenCumRap}
              </S.DetailCinemaContentTitle>
              <Row>
                <S.DetailCinemaAddress>
                  {cinemaBranch.diaChi}
                </S.DetailCinemaAddress>
              </Row>
              <Row>
                <S.ButtonBuyTicket type="primary" size="medium" danger>
                  BUY TICKET
                </S.ButtonBuyTicket>
              </Row>
            </S.DetailCinemaContentInfo>
          </Col>
          <Col flex="auto">
            <S.DetailCinemaRate>
              <Col>
                <S.DetailCinemaCirclePercent
                  type="circle"
                  strokeColor={{
                    "0%": "#7ed321",
                    "100%": "#7ed321",
                  }}
                  trailColor={"rgba(255,255,255,0.2)"}
                  percent={"90"}
                  format={(percent) =>
                    `${
                      Number.isInteger(percent * 0.1)
                        ? percent * 0.1
                        : (percent * 0.1).toFixed(1)
                    }`
                  }
                  width={126}
                />
                <S.DetailCinemaStar
                  disable
                  allowHalf
                  defaultValue={5}
                  autoFocus={true}
                />
                <p style={{ textAlign: "center" }}>
                  {arrayCommentById?.length} Reviews{" "}
                </p>
              </Col>
            </S.DetailCinemaRate>
          </Col>
        </Row>
      </S.DetailCinemaContent>
      <TabsMenuDetailCinema
        cinemaId={cinema}
        cinemaBranchID={cinemaBranchID}
        cinemaBranch={cinemaBranch}
        arrayCommentById={arrayCommentById}
      />
    </S.DetailCinemaContainer>
  );
}
