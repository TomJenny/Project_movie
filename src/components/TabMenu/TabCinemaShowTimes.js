import { Row, Tabs } from "antd";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { PUBLIC_URL } from "../../utils/setting";
import { Container } from "../Styles/GlobalStyles";
import { useBreakpoints } from "../Styles/ResponsiveBreakpoints";
import * as S from "./TabMenuElement";
import TabsDayOfWeek from "./TabsDayOfWeek/TabsDayOfWeek";

const { TabPane } = Tabs;

export default function TabCinemaShowTimes(props) {
  const { cinemaId } = props;

  const responsive = useBreakpoints();

  const { arrayCinemaShowTimes, cinemaBranch } = useSelector(
    (state) => state.CinemaReducer
  );
  //sort the cinema was selected by user to the top of the array
  const index = arrayCinemaShowTimes[0]?.lstCumRap.findIndex(
    (cinemaBranches) => cinemaBranches.maCumRap === cinemaBranch.maCumRap
  );

  if (index > 0) {
    const cinemaBranchesTemp = arrayCinemaShowTimes[0].lstCumRap[index];
    arrayCinemaShowTimes[0].lstCumRap[index] =
      arrayCinemaShowTimes[0].lstCumRap[0];
    arrayCinemaShowTimes[0].lstCumRap[0] = cinemaBranchesTemp;
  }

  const renderShowingTimes = () => {
    return arrayCinemaShowTimes[0]?.lstCumRap.map((cinemaBranches, index) => {
      const cinemaBranch = cinemaBranches?.tenCumRap.split("-");
      const CinemaBranchImage = cinemaBranch[0].trim().replace(/\s+/g, "");
      return (
        <Fragment key={index}>
          <TabPane
            tab={
              <NavLink
                to={`/detailcinema/${cinemaId}/${cinemaBranches.maCumRap}`}
              >
                <S.TabsCinema>
                  <Row>
                    <S.TabsImgCinema
                      src={PUBLIC_URL + `/img/Cinema/${CinemaBranchImage}.jpg`}
                      alt={cinemaBranch.tenCumRap}
                    />
                    <S.TabsCinemaContentInfo>
                      <p>
                        <S.CinemaBranchNamePrefix
                          branchName={cinemaBranch[0].trim()}
                        >
                          {cinemaBranch[0]}
                        </S.CinemaBranchNamePrefix>
                        <span> - {cinemaBranch[1]}</span>
                      </p>
                      <p>
                        {cinemaBranches.diaChi.length > 25
                          ? cinemaBranches.diaChi.slice(0, 25) + "..."
                          : cinemaBranches.diaChi}
                      </p>
                    </S.TabsCinemaContentInfo>
                  </Row>
                </S.TabsCinema>
              </NavLink>
            }
            key={index + 1}
            forceRender={true}
          >
            <TabsDayOfWeek cinemaBranches={cinemaBranches} />
          </TabPane>
        </Fragment>
      );
    });
  };

  return (
    <Container>
      <S.TabCinemaCinemaBranches
        tabPosition={responsive.isSm ? "top" : "left"}
        activeKey={"1"}
      >
        {renderShowingTimes()}
      </S.TabCinemaCinemaBranches>
    </Container>
  );
}
