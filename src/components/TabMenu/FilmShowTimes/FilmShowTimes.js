import { Col, Collapse, Row } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { Fragment } from "react";
import * as S from "../TabMenuElement";
const { Panel } = Collapse;

export default function FilmShowTimes(props) {
  const { arrFilms, CinemaBranches } = props;
  const arrFilmShowTimes = arrFilms || CinemaBranches?.danhSachPhim;

  const panelHeader = (filmShowTimes) => {
    return (
      <S.CollapseHeader>
        <Row>
          <S.TabMenuHomeFilmSTImg
            src={filmShowTimes.hinhAnh}
            alt={filmShowTimes.tenPhim}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://picsum.photos/300/300";
            }}
          />
          <Col>
            <S.TabMenuHomeFilmSTTitle>
              {filmShowTimes.tenPhim.length > 42
                ? filmShowTimes.tenPhim.slice(0, 42) + "..."
                : filmShowTimes.tenPhim}
            </S.TabMenuHomeFilmSTTitle>
            <Row>
              <S.TabMenuHomeAgeType>C13</S.TabMenuHomeAgeType>
              <S.TabMenuHomeTime>120min</S.TabMenuHomeTime>
            </Row>
            <S.TabMenuHomeFilmType>
              2D <span>Digital</span>
            </S.TabMenuHomeFilmType>
          </Col>
        </Row>
      </S.CollapseHeader>
    );
  };

  return (
    <Fragment>
      {!_.isEmpty(arrFilmShowTimes) ? (
        <S.TabMenuCollapse
          defaultActiveKey={[...Array(arrFilmShowTimes?.length + 1).keys()]}
          ghost
        >
          {arrFilmShowTimes?.map((filmShowTimes, indexfilmShowTimes) => {
            return (
              <S.TabMenuHomeFilmST
                showArrow={false}
                header={panelHeader(filmShowTimes)}
                key={indexfilmShowTimes + 1}
              >
                {filmShowTimes.lstLichChieuTheoPhim
                  .slice(0, 8)
                  .map((showTimes, index) => {
                    return (
                      <Fragment key={index}>
                        <S.TabMenuTicketLink
                          to={`/checkout/${showTimes.maLichChieu}`}
                        >
                          {moment(showTimes.ngayChieuGioChieu).format(
                            "hh:mm A"
                          )}
                        </S.TabMenuTicketLink>
                      </Fragment>
                    );
                  })}
              </S.TabMenuHomeFilmST>
            );
          })}
        </S.TabMenuCollapse>
      ) : (
        <h2 style={{ color: "red", textAlign: "center" }}>COMMING SOON</h2>
      )}
    </Fragment>
  );
}
