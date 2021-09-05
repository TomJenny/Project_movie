import { Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Container } from "../Styles/GlobalStyles";
import { useBreakpoints } from "../Styles/ResponsiveBreakpoints";
import { TitleSection } from "../Styles/Title";
import * as S from "./TabMenuElement";
import TabsCinema from "./TabsCinema/TabsCinema";

export default function TabHomeShowTimes(props) {
  const { arrayCinemaShowTimes } = useSelector((state) => state.CinemaReducer);

  const responsive = useBreakpoints();

  const renderTabLogo = () => {
    return arrayCinemaShowTimes?.map((cinema, indexCinema) => {
      return (
        <S.TabPanelMenuLogo
          tab={
            <S.TabsLogo>
              <img src={cinema.logo} alt={cinema.biDanh} />
            </S.TabsLogo>
          }
          key={indexCinema}
          style={{ padding: "0" }}
        >
          <TabsCinema cinema={cinema} />
        </S.TabPanelMenuLogo>
      );
    });
  };

  return (
    <S.TabMenuContainer>
      <Container>
        <Row justify="center">
          <TitleSection>SHOWING TIME</TitleSection>
        </Row>
        <S.TabsMenu
          tabPosition={responsive.isSm ? "top" : "left"}
          defaultActiveKey="1"
        >
          {renderTabLogo()}
        </S.TabsMenu>
      </Container>
    </S.TabMenuContainer>
  );
}
