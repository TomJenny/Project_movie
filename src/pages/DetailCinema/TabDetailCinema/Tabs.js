import { Tabs } from "antd";
import React, { useEffect } from "react";
import "react-modal-video/scss/modal-video.scss";
import Comment from "../../../components/Comment/Comment";
import { TitleTabsStyled } from "../../../components/Styles/Title";
import TabCinemaShowTimes from "../../../components/TabMenu/TabCinemaShowTimes";
import * as S from "./TabsElement";
import TabMenuDetailCinemaInfo from "./TabsInfo";

const { TabPane } = Tabs;

export default function DetailCinemaTabs(props) {
  const { cinemaId, cinemaBranch, cinemaBranchID, arrayCommentById } = props;
  useEffect(() => {}, [cinemaBranchID]);
  return (
    <S.TabMenuDetailCinemaContainer>
      <S.TabMenuDetailCinema centered tabBarGutter={0}>
        <TabPane tab={<TitleTabsStyled>information</TitleTabsStyled>} key="1">
          <TabMenuDetailCinemaInfo cinemaBranch={cinemaBranch} />
        </TabPane>
        <TabPane tab={<TitleTabsStyled>show time</TitleTabsStyled>} key="2">
          <TabCinemaShowTimes cinemaId={cinemaId} />
        </TabPane>
        <TabPane tab={<TitleTabsStyled>reviews</TitleTabsStyled>} key="3">
          <Comment arrayCommentById={arrayCommentById} id={cinemaId} />
        </TabPane>
      </S.TabMenuDetailCinema>
    </S.TabMenuDetailCinemaContainer>
  );
}
