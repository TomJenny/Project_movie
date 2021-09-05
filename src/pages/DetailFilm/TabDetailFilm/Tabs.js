import { Tabs } from "antd";
import React from "react";
import "react-modal-video/scss/modal-video.scss";
import Comment from "../../../components/Comment/Comment";
import { TitleTabsStyled } from "../../../components/Styles/Title";
import TabDetailShowTimes from "../../../components/TabMenu/TabDetailShowTimes";
import * as S from "./TabsElement";
import TabMenuDetailInfo from "./TabsInfo";

const { TabPane } = Tabs;

export default function TabsMenuDetailFilm(props) {
  const { filmShowTimes, arrayCommentById, filmID } = props;
  return (
    <S.TabMenuDetailFilmContainer>
      <S.TabMenuDetailFilm centered tabBarGutter={0}>
        <TabPane tab={<TitleTabsStyled>information</TitleTabsStyled>} key="1">
          <TabMenuDetailInfo filmShowTimes={filmShowTimes} />
        </TabPane>
        <TabPane tab={<TitleTabsStyled>show time</TitleTabsStyled>} key="2">
          <TabDetailShowTimes />
        </TabPane>
        <TabPane tab={<TitleTabsStyled>reviews</TitleTabsStyled>} key="3">
          <Comment arrayCommentById={arrayCommentById} id={filmID} />
        </TabPane>
      </S.TabMenuDetailFilm>
    </S.TabMenuDetailFilmContainer>
  );
}
