import { Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../Styles/GlobalStyles";
import { useBreakpoints } from "../Styles/ResponsiveBreakpoints";
import * as S from "./TabMenuElement";
import TabsDayOfWeek from "./TabsDayOfWeek/TabsDayOfWeek";
const { TabPane } = Tabs;

export default function TabsDetailFilms(props) {
  const { filmShowTimes } = useSelector((state) => state.CinemaReducer);
  const responsive = useBreakpoints();

  const renderShowingTimes = () => {
    return filmShowTimes?.heThongRapChieu?.map((cinema, index) => {
      return (
        <TabPane
          tab={
            <S.TabDetailLogo>
              <S.TabDetailNameCinema>
                <S.TabDetailImg src={cinema.logo} alt={cinema.biDanh} />
                {responsive.isSm ? null : cinema.tenHeThongRap}
              </S.TabDetailNameCinema>
            </S.TabDetailLogo>
          }
          key={index}
        >
          <TabsDayOfWeek cinema={cinema} />
        </TabPane>
      );
    });
  };

  return (
    <Container>
      <S.TabDetail
        tabPosition={responsive.isSm ? "top" : "left"}
        defaultActiveKey="1"
      >
        {renderShowingTimes()}
      </S.TabDetail>
    </Container>
  );
}
