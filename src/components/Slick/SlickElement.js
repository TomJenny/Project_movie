import { CaretRightOutlined } from "@ant-design/icons";
import { Button, Tabs } from "antd";
import { NavLink } from "react-router-dom";
import { down } from "styled-breakpoints";
import styled from "styled-components/macro";
import { PlayButtonStyled } from "../Styles/PlayButton";

export const HomeSlickContainer = styled.div`
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
    & span {
      display: none;
    }
  }
`;

export const HomeSlickTabs = styled(Tabs)`
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
//Slick Header
export const SlickHeader = styled.div`
  position: relative !important;

  height: 318px;
  ${down("xs")} {
    height: 330px;
  }
  max-width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

//Slick Comming Soon Container
export const SlickContainer = styled.div`
  height: 420px;
  padding: 10px !important;
  position: relative !important;
  width: 100%;
`;

//Slick  overlay
export const SlickOverLay = styled(NavLink)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999;
`;
//SLick IMDb
export const SlickIMDB = styled.img`
  width: 40px;
  margin: 0 auto;
`;

//slick overlay button
export const SlickButtonOverlay = styled(PlayButtonStyled)`
  opacity: 0;
  ${SlickContainer}:hover & {
    opacity: 1;
    transition: all 0.5 ease-in-out;
  }
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.5 ease-in-out;
  }
`;

//Slick overlay information (Date, IMDb)
export const SlickOverLayIMDB = styled.div`
  overflow: hidden;
  width: 50px;
  height: 60px;
  border-radius: 0 0 5px 5px;
  background-color: rgb(0, 0, 0, 0.6);

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  /* 0 6px 20px 0 rgba(255, 255, 255, 0.3); */

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  position: absolute;
  right: 8px;
  top: 0;
  z-index: 9999999999;

  text-align: center;
  color: white;
  font-size: 25px;
  line-height: 30px;
`;

//Slick date overlay
export const SlickOverLayDate = styled(SlickOverLayIMDB)`
  background-color: unset !important;
`;

//Slick month, year overlay
export const SlickMonthYear = styled.div`
  width: 100%;
  height: 40%;
  background-color: rgba(255, 0, 0, 0.8);
  font-size: 13px;
  line-height: 2;
`;
//Slick day overlay
export const SlickDay = styled.div`
  width: 100%;
  height: 60%;
  line-height: 1.5;
  background-color: rgba(255, 255, 255, 0.8);
  color: black !important;
  font-weight: bold;
`;

//Play button overlay
export const PlayButton = styled(CaretRightOutlined)`
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  z-index: 9999999;
  top: 50%;
  left: 50%;

  font-size: 30px;
  color: rgba(255, 255, 255, 0.8);

  padding: 10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);

  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.5 ease-in-out;

  ${SlickContainer}:hover & {
    opacity: 1;
    transition: all 0.5 ease-in-out;
  }
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.5 ease-in-out;
  }
`;

//Slick image hover effect
export const SlickImg = styled.img`
  width: 100%;
  height: 100%;

  ${SlickContainer}:hover & {
    filter: brightness(1.2);
  }
`;
//Slick Footer
export const SlickFooter = styled.div`
  position: relative;
`;

//Slick Age Type
export const SlickAgeType = styled.span`
  display: inline-block;
  position: absolute;
  z-index: 99999;
  bottom: 10px;
  left: 10px;
  width: 35px;
  margin-right: 5px;
  background-color: rgba(255, 0, 0, 1);
  border-radius: 5px;

  font-size: 0.9rem;
  color: white;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
`;

// Slick Film Name
export const SlickFilmTitle = styled.h5`
  padding: 0 5px;
  margin-top: 10px;
  margin-bottom: 0px;
  white-space: nowrap;
  text-transform: uppercase;
  color: white;
  font-size: 16px;
  font-weight: 400;
  overflow: hidden;
`;
//Slick show time
export const SlickFilmShowTime = styled.p`
  padding: 0 5px;
  font-size: 14px;
  color: #a3a3a3;
  & span:nth-child(2) {
    display: inline-block;
    margin-left: 20px;
  }
`;

//Slick Button book tickets
export const SlickButtonBookTicket = styled(Button)`
  position: absolute;
  z-index: 999999;
  bottom: -15px;
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.4) 40%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 0.4) 40%
  );
  box-shadow: 0 0 15px white;
  border: none;

  color: black;
  line-height: 1;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 10px;

  opacity: 0;
  ${SlickContainer}:hover & {
    opacity: 1;
    transition: all o.5 ease-in-out;
  }

  &:hover,
  &:active,
  &:focus {
    color: black;
    background: red;
    box-shadow: 0 0 5px red;
    border: none;
  }
`;
