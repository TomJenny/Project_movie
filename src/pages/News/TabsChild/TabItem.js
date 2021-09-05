import React, { Fragment } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import * as S from "../TabsNewsElement";
export default function TabItem(props) {
  const { item, small } = props;
  return (
    <S.NewsItemContainer small={small}>
      {small === "true" ? (
        <Fragment>
          <S.NewsItemBackgroundImg to="/" small={small}>
            <S.NewsItemImage src={item?.picture} alt="News" />
          </S.NewsItemBackgroundImg>
          <S.NewsItemTitle small={small}>{item?.title}</S.NewsItemTitle>
        </Fragment>
      ) : (
        <Fragment>
          <S.NewsItemBackgroundImg to="/">
            <S.NewsItemImage src={item?.picture} alt="News" />
          </S.NewsItemBackgroundImg>
          <S.NewsItemTitle>{item?.title}</S.NewsItemTitle>
          <S.NewsItemContent>{item?.content}</S.NewsItemContent>
          <S.NewsItemSocial>
            <S.NewsItemLike to="/">
              <AiOutlineLike />
              <span>2</span>
            </S.NewsItemLike>
            <S.NewsItemChat to="/">
              <BsChatDots />
              <span>0</span>
            </S.NewsItemChat>
          </S.NewsItemSocial>
        </Fragment>
      )}
    </S.NewsItemContainer>
  );
}
