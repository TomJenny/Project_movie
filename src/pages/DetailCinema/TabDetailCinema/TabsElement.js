import { Tabs } from "antd";
import { down } from "styled-breakpoints";
import styled from "styled-components/macro";
import { TitleTabsStyled } from "../../../components/Styles/Title";

export const TabMenuDetailCinemaContainer = styled.div`
  height: auto;
  max-width: 870px;
  width: 100%;
  margin: 0 auto;

  transform: translateY(-70px);

  &&& .ant-tabs-ink-bar {
    display: none;
  }
  &&& .ant-tabs-nav::before {
    display: none;
  }

  &&&
    .ant-tabs-tab.ant-tabs-tab-active
    .ant-tabs-tab-btn
    ${TitleTabsStyled},
    .ant-tabs-tab-btn:focus
    ${TitleTabsStyled},
    .ant-tabs-tab-remove:focus
    ${TitleTabsStyled},
    .ant-tabs-tab-btn:active
    ${TitleTabsStyled},
    .ant-tabs-tab-remove:active
    ${TitleTabsStyled} {
    transform: scale(1.1);
    color: white;
    letter-spacing: 2px !important;
    & span {
      display: none;
    }
  }
  ${down("md")} {
    margin-top: 70px;
  }
`;

export const TabMenuDetailCinema = styled(Tabs)`
  height: 100%;
  &&& > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-tab + .ant-tabs-tab {
    margin: 0;
  }
  ${down("xs")} {
    &&& > .ant-tabs-nav > .ant-tabs-nav-wrap > .ant-tabs-nav-list {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const TabMenuDetailContent = styled.div`
  padding: 0 15px;
  & p {
    color: white !important;
    font-size: 0.9rem;
  }
`;
export const TabMenuDetailContentTitle = styled.p`
  width: 35%;
  ${down("md")} {
    width: 40%;
  }
`;
export const TabMenuDetailContentContent = styled.p`
  width: ${(props) => (props.maxWidth ? props.maxWidth : "40%")};

  text-align: justify;
`;
export const TabMenuDetailContentRelateNews = styled.p`
  margin: 50px 0;
`;
