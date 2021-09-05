import { Tabs } from "antd";
import React, { useState } from "react";
import { TitleTabsStyled } from "../Styles/Title";
import SlickContent from "./SlickContent";
import { HomeSlickContainer, HomeSlickTabs } from "./SlickElement.js";
const { TabPane } = Tabs;

export default function MultiSlickHome(props) {
  const [activeTab, setActiveTab] = useState("1");

  const { arrayFilm } = props;

  return (
    <HomeSlickContainer>
      <HomeSlickTabs
        centered
        defaultActiveKey={activeTab}
        activeKey={activeTab}
        onChange={(activeKey) => {
          setActiveTab(activeKey);
        }}
      >
        <TabPane
          tab={<TitleTabsStyled>now showing</TitleTabsStyled>}
          key="1"
          forceRender={true}
        >
          <SlickContent arrayFilm={arrayFilm} activeTab="1" />
        </TabPane>
        <TabPane
          tab={<TitleTabsStyled>comming soon</TitleTabsStyled>}
          key="2"
          forceRender={true}
        >
          <SlickContent arrayFilm={arrayFilm} activeTab="2" />
        </TabPane>
      </HomeSlickTabs>
    </HomeSlickContainer>
  );
}
