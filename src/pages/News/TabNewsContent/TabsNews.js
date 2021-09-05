import { Row, Tabs } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TitleTabsStyled } from "../../../components/Styles/Title";
import { getAPINewsAction } from "../../../redux/actions/NewsAction";
import TabSection from "./TabsChild/TabSection";
import * as S from "./TabsNewsElement";

const { TabPane } = Tabs;
export default function TabNews() {
  const dispatch = useDispatch();
  const { arrayNews, arrayReviews, arrayPromotions } = useSelector(
    (state) => state.NewsReducer
  );
  const maxPages = (array) => {
    return Math.ceil(array.length / 8);
  };

  const [pages, setPages] = useState({
    minPages: 1,
  });

  useEffect(() => {
    dispatch(getAPINewsAction());
  }, []);

  const renderButton = (array) => {
    return (
      <Fragment>
        <S.TabsNewsButton
          type="primary"
          danger
          onClick={() => {
            if (pages.minPages < maxPages(array)) {
              setPages({ ...pages, minPages: pages.minPages + 1 });
            }
          }}
        >
          More
        </S.TabsNewsButton>
        {pages.minPages >= 2 ? (
          <S.TabsNewsButton
            type="primary"
            danger
            onClick={() => {
              setPages({ ...pages, minPages: pages.minPages - 1 });
            }}
          >
            Less
          </S.TabsNewsButton>
        ) : null}
      </Fragment>
    );
  };
  return (
    <S.TabsNewsContainer>
      <Tabs
        defaultActiveKey="1"
        centered
        onChange={() => {
          setPages({ ...pages, minPages: 1 });
        }}
      >
        <TabPane tab={<TitleTabsStyled>News 24h</TitleTabsStyled>} key="1">
          {Array.from(Array(pages.minPages).keys()).map((index) => {
            return (
              <TabSection arrayNews={arrayNews} key={index} pages={index} />
            );
          })}
          <Row justify="center">{renderButton(arrayNews)}</Row>
        </TabPane>
        <TabPane tab={<TitleTabsStyled>Reviews</TitleTabsStyled>} key="2">
          {Array.from(Array(pages.minPages).keys()).map((index) => {
            return (
              <TabSection arrayNews={arrayReviews} key={index} pages={index} />
            );
          })}
          <Row justify="center">{renderButton(arrayReviews)}</Row>
        </TabPane>
        <TabPane tab={<TitleTabsStyled>Promotion</TitleTabsStyled>} key="3">
          {Array.from(Array(pages.minPages).keys()).map((index) => {
            return (
              <TabSection
                arrayNews={arrayPromotions}
                key={index}
                pages={index}
              />
            );
          })}
          <Row justify="center">{renderButton(arrayPromotions)}</Row>
        </TabPane>
      </Tabs>
    </S.TabsNewsContainer>
  );
}
