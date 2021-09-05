import { Collapse, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components/macro";
import { CHART_COLORS } from "../Styles/Theme";

const { TabPane } = Tabs;
const { Panel } = Collapse;

//GLOBAL
const overideTabs = (TabsActive) => css`
  &&& .ant-tabs-ink-bar {
    display: none;
  }

  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p {
    color: black !important;
  }
  & .ant-tabs-tab:hover,
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:hover {
    color: black !important;
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p:nth-child(2),
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:focus {
    color: rgba(0, 0, 0, 0.5) !important;
  }
  &&&
    .ant-tabs-tab-btn:focus
    ${TabsActive},
    &&&
    .ant-tabs-tab-btn:active
    ${TabsActive},
    .ant-tabs-tab-btn:hover
    ${TabsActive},
    &&&
    .ant-tabs-tab.ant-tabs-tab-active
    ${TabsActive} {
    opacity: 1;

    &::after {
      background-color: red;
      box-shadow: 0 0 5px red;
    }
  }

  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn ${TabsActive} {
    text-shadow: none;
    color: none;
  }
`;

//Scroll Bar Styled
export const scrollBarStyled = css`
  &::-webkit-scrollbar-track {
    /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
    background-color: transparent;
    border-radius: 5px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }
  &:hover &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 1);
  }
`;
export const TabMenuContainer = styled.div`
  margin-top: 100px;
`;

export const TabsLogo = styled.div`
  height: 50px;
  width: 50px;

  & img {
    position: absolute;
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    filter: contrast(1.1);
    &:hover {
      filter: brightness(1.1);
    }
  }
  opacity: 0.6;
  ${down("md")} {
    opacity: 1;
  }
  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: "";

    display: inline-block;
    height: 0.5px;
    width: 60%;
    background-color: rgba(0, 0, 0, 0.1);

    transform: translateX(-50%);
  }
`;
export const TabsMenu = styled(Tabs)`
  height: 705px;
  padding: 5px 0;
  background: ${({ theme }) => theme.colors.white1};
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  ${overideTabs(TabsLogo)}
  &&& .ant-tabs-tab {
    padding: 20px;
    margin: 0;
  }
  ${down("xs")} {
    height: 500px;
  }
  &&& .ant-tabs-content-left {
    height: 100%;
  }
  &&& .ant-tabs-content-top {
    height: 100%;
  }
`;

export const TabPanelMenuLogo = styled(TabPane)`
  position: relative;
`;

export const TabPanelMenuCinema = styled(TabPanelMenuLogo)`
  ${scrollBarStyled}
  max-height:100%;
  /* max-height: 690px; */
  overflow-y: auto;
  /* overflow-x: hidden; */
  ${down("sm")} {
    /* max-height: 460px; */
  }
`;

export const TabsCinema = styled.div`
  width: 240px;
  height: 80px;
  opacity: 0.6;
  ${down("md")} {
    opacity: 1;
  }
  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: "";

    display: inline-block;
    height: 0.5px;
    width: 80%;
    background-color: rgba(0, 0, 0, 0.1);

    transform: translateX(-50%);
  }
  ${down("sm")} {
    height: 70px;
  }
`;
export const TabsImgCinema = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
`;

export const TabMenuHomeCinemaBranches = styled(Tabs)`
  height: 100%;
  ${overideTabs(TabsCinema)}
  &&& .ant-tabs-tab {
    padding: 20px 15px;
  }
  &&& .ant-tabs-tabpane {
    padding: 0;
  }
`;

export const TabsCinemaContentInfo = styled.div`
  width: 170px;
  text-align: left;
  & p {
    margin: 0;
    text-align: left;
    font-size: 0.875rem;
    white-space: normal;
    & span {
      display: block !important;
    }
    & span:nth-child(2) {
      color: black;
      display: block !important;
    }
  }
  & p:nth-child(2) {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.75rem;
    white-space: nowrap;
  }
  & a {
    display: inline-block;
    width: 45px;
    margin: 0;
    padding: 1px 6px;

    background: rgba(255, 0, 0, 0.8);
    box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);
    border-radius: 5px;

    font-size: 0.8rem;
    color: white;
  }
`;

export const CinemaBranchNamePrefix = styled.span`
  color: ${(props) => {
    if (props.branchName === "BHD Star Cineplex") {
      return CHART_COLORS[0];
    }
    if (props.branchName === "CGV") {
      return CHART_COLORS[1];
    }
    if (props.branchName === "CNS") {
      return CHART_COLORS[2];
    }
    if (props.branchName === "GLX") {
      return CHART_COLORS[3];
    }
    if (props.branchName === "Lotte") {
      return CHART_COLORS[4];
    }
    if (props.branchName === "MegaGS") {
      return CHART_COLORS[5];
    }
  }};
`;
export const TabMenuHomeFilmST = styled(Panel)`
  padding: 20px;
  display: block;
  width: 100%;
  position: relative;

  &::after {
    position: absolute;
    bottom: 0;
    display: block;
    content: "";
    width: 90%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  ${down("xs")} {
    width: 100%;
  }
`;

export const TabMenuHomeFilmSTImg = styled.img`
  width: 60px;
  height: 70px;
  margin-right: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
`;
export const TabMenuHomeFilmSTTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
`;

export const TabMenuHomeAgeType = styled.span`
  display: inline-block;
  width: 30px;
  height: 20px;
  margin-right: 5px;
  background-color: orange;
  border-radius: 5px;

  font-size: 0.8rem;
  color: white;
  text-align: center;
`;
export const TabMenuHomeTime = styled.span`
  color: #a3a3a3;
  font-size: 0.8rem;
`;

export const TabMenuHomeFilmType = styled.p`
  color: #a3a3a3;
  display: inline-block;
  padding: 2px 4px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
  & span {
    font-weight: normal;
  }
`;

//Collapse show times
export const TabMenuCollapse = styled(Collapse)`
  position: relative;

  &&& .ant-collapse-header {
    min-width: 100%;
    padding: 0;
    margin-left: 5px;
  }

  &&& .ant-collapse-content-box {
    min-width: 473px;
    padding: 0;

    ${down("md")} {
      min-width: 350px !important;
    }
    ${down("xs")} {
      min-width: 200px !important;
    }
    /* ${down("sm")} {
      width: 350px !important;
    } */
  }
`;
export const CollapseHeader = styled.div`
  width: 100%;
  min-width: 100%;
`;

export const TabMenuTicketLink = styled(NavLink)`
  display: inline-block;
  margin: 5px;
  width: 90px;
  height: 30px;

  text-align: center;
  line-height: 30px;
  color: white;
  font-size: bold;

  background: rgb(60, 60, 60, 0.7);
  box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 5px;

  &:hover {
    color: white;
    background: rgb(60, 60, 60);
  }
`;

//Tabs Cinema Show Times

export const TabCinemaDayOfWeekText = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 40px;
  margin: 0 auto;

  & p {
    border-radius: 50%;
    padding: 5px 1px;
    text-align: center;
    display: inline-block;
    font-size: 1rem;
    margin: 0;
  }
`;

export const TabCinemaDayOfWeek = styled(Tabs)`
  height: 100%;
  z-index: 9999;
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p:nth-child(1) {
    color: black;
  }
  & .ant-tabs-tab:hover,
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:hover {
    color: black !important;
  }
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn p:nth-child(1),
  & .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn:focus {
    color: black !important;
  }
  &&&
    .ant-tabs-tab.ant-tabs-tab-active
    .ant-tabs-tab-btn
    ${TabCinemaDayOfWeekText},
    &&&
    .ant-tabs-tab:hover
    ${TabCinemaDayOfWeekText},
    &&&
    .ant-tabs-tab.ant-tabs-tab-active
    .ant-tabs-tab-btn:hover
    ${TabCinemaDayOfWeekText} {
    & p {
      background-color: red;
      box-shadow: 0 0 2px red;
      color: white !important;
    }
  }
  &&& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    text-shadow: none;
    color: none;
  }
  &&& .ant-tabs-tabpane {
    padding: 0;
  }
`;
export const TabCinemaDayOfWeekTabPane = styled(TabPane)`
  height: 100%;

  overflow-y: auto;
  ${scrollBarStyled}
`;

export const TabCinemaDayOfWeekTitle = styled.div`
  overflow-x: auto;
  & p {
    color: black;
    display: block;
    text-align: center;
  }
`;

export const TabCinemaCinemaBranches = styled(TabsMenu)`
  ${overideTabs(TabsCinema)}
  &&& .ant-tabs-tabpane {
    padding: 0;
  }
`;

export const TabCinemaImg = styled.img`
  width: 60px;
  height: 70px;
  margin-right: 10px;
  border-radius: 5px;
`;

// Tabs Detail show times

export const TabDetailLogo = styled.div`
  position: relative;
  width: 250px;
  height: 60px;
  opacity: 0.6;
  text-align: left;
  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    content: "";

    display: inline-block;
    height: 0.5px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);

    transform: translateX(-50%);
  }

  ${down("sm")} {
    width: 60px;
    opacity: 1;
    text-align: center;
  }
`;
export const TabDetail = styled(TabsMenu)`
  ${overideTabs(TabDetailLogo)}
  &&& .ant-tabs-tabpane {
    padding: 0;
  }
`;

export const TabDetailImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  ${down("sm")} {
    margin-right: 0;
  }
`;

export const TabDetailImgCinema = styled.img`
  width: 60px;
  height: 70px;
  margin-right: 10px;
`;
export const TabDetailNameCinema = styled.p`
  color: black;
  display: block;
  font-size: 1rem;
  margin: 0;
  text-transform: uppercase;
`;

export const TabDetailAddress = styled.p`
  margin: 0;
`;
export const TabDetailCinemaBranches = styled.div`
  width: 100%;
`;

//comming soon alert
export const CommingSoonAlert = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  width: 870px;
  height: 700px;
  border-radius: 50px;
  filter: contrast(1.5);
`;
