import { Col, Row } from "antd";
import _ from "lodash";
import moment from "moment";
import React, { Fragment } from "react";
import { PUBLIC_URL } from "../../../utils/setting";
import * as S from "../TabMenuElement";

export default function CinemaShowTimes(props) {
  const { arrCinema } = props;

  const renderPanelHeader = (cinemaBranches) => {
    const CinemaBranchName = cinemaBranches.tenCumRap.split("-");
    const CinemaBranchImage = CinemaBranchName[0].trim().replace(/\s+/g, "");
    return (
      <S.CollapseHeader>
        <Row>
          <S.TabsImgCinema
            src={PUBLIC_URL + `/img/Cinema/${CinemaBranchImage}.jpg`}
            alt={cinemaBranches.tenCumRap}
          />
          <Col>
            <S.TabMenuHomeFilmSTTitle>
              {cinemaBranches.tenCumRap.length > 42
                ? cinemaBranches.tenCumRap.slice(0, 42) + "..."
                : cinemaBranches.tenCumRap}
            </S.TabMenuHomeFilmSTTitle>
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
      {!_.isEmpty(arrCinema) ? (
        <S.TabMenuCollapse
          defaultActiveKey={[
            ...Array(arrCinema.cumRapChieu?.length + 1).keys(),
          ]}
          ghost
        >
          {arrCinema.cumRapChieu?.map((cinemaBranches, indexCinemaBranches) => {
            return (
              <S.TabMenuHomeFilmST
                showArrow={false}
                header={renderPanelHeader(cinemaBranches)}
                key={indexCinemaBranches + 1}
              >
                {cinemaBranches.lichChieuPhim
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
