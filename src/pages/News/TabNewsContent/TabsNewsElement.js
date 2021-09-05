import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components/macro";
import { ButtonPrimaryStyled } from "../../../components/Styles/Button";
import { Container } from "../../../components/Styles/GlobalStyles";

export const TabsNewsContainer = styled(Container)`
  margin-top: 100px;

  &&& .ant-tabs-ink-bar {
    display: none;
  }
  &&& .ant-tabs-nav::before {
    display: none;
  }
  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn a,
  .ant-tabs-tab-btn:focus a,
  .ant-tabs-tab-remove:focus a,
  .ant-tabs-tab-btn:active a,
  .ant-tabs-tab-remove:active a {
    transform: scale(1.1);
    color: white;
    letter-spacing: 2px !important;
  }
  &&& .ant-tabs-tab + .ant-tabs-tab {
    margin: 0;
  }
  ${down("xs")} {
    &&& .ant-tabs-nav-list {
      flex-direction: column;
      align-items: center;
    }
  }
`;
export const NewsItemContainer = styled.div`
  padding: 0 7.5px;
  margin: 0 0 20px;
  width: 100%;
  height: auto;
  ${(props) =>
    props.small === "true" &&
    css`
      margin: 0;
      display: flex;
      align-items: start;
      justify-content: space-between;
    `}
`;

export const NewsItemBackgroundImg = styled(Link)`
  display: block;
  overflow: hidden;

  border-radius: 4px;
  width: 100%;
  height: 55%;

  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;

  &:hover {
    filter: brightness(1.2);
  }

  ${(props) =>
    props.small === "true" &&
    css`
      width: 50px;
      height: 50px;
      display: inline-block;
    `};
`;
export const NewsItemImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
export const NewsItemTitle = styled.p`
  overflow: hidden;
  height: 39px;

  color: white;
  font-size: 16px;
  text-overflow: ellipsis;
  line-height: 20px;
  transition: color 0.2s;
  margin-bottom: 5px;

  &:hover {
    color: red;
  }

  ${(props) =>
    props.small === "true" &&
    css`
      display: inline-block;
      width: calc(100% - 70px);
    `}
`;

export const NewsItemContent = styled.p`
  overflow: hidden;
  height: 55px;
  margin-bottom: 15px;
  padding: 0 5px 0 0;

  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  text-align: justify;
  line-height: 19px;
  letter-spacing: 0.17;
  text-overflow: hidden;
`;
export const NewsItemSocial = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
`;
export const NewsItemLike = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  line-height: 1.2rem;
  display: flex;
  align-items: end;
  transition: all 0.2s;
  &:hover {
    color: white;
  }
  & svg:hover {
    transform: scale(1.1);
  }
  & span {
    margin-left: 5px;
    font-size: 0.8rem;
  }
`;
export const NewsItemChat = styled(NewsItemLike)`
  margin-left: 20px;
`;

export const TabsNewsButton = styled(ButtonPrimaryStyled)`
  display: inline-block;
  margin: 35px 10px;
  width: 100px;
  height: 35px;
`;
