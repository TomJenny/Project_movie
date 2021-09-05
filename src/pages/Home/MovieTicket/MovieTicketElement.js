import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Form, Row, Select } from "antd";
import QRCode from "qrcode.react";
import { AiFillVideoCamera } from "react-icons/ai";
import { BsCalendarFill } from "react-icons/bs";
import { IoTime } from "react-icons/io5";
import { MdMovieFilter } from "react-icons/md";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components";
import { PUBLIC_URL } from "../../../utils/setting";

export const MovieTicketContainer = styled.div`
  width: 600px !important;
  height: 345px;
  background-image: url(${PUBLIC_URL}"/img/bookticket.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left;
`;

export const MovieTicketSlider = styled(Slider)`
  margin-top: 30px;
  & .slick-track {
    padding-top: 53px;
    padding-bottom: 53px;
    display: flex;
    align-items: flex-end;
  }

  & .slick-slide.slick-current {
    position: relative;
    z-index: 1;
    transform: scale(1.1) translateY(0px);
    transition: all 0.5s ease-out !important;
    ${MovieTicketContainer} {
      filter: contrast(130%) brightness(1.2) drop-shadow(0 0 1px white);
    }
  }
  & .slick-slide:not(.slick-current) {
    filter: brightness(0.3) !important;
    transform: translateY(40px);
  }
  ${down("xs")} {
    display: none;
  }
`;

export const MovieTicketBody = styled.div`
  padding-top: 180px;
  height: 350px;
`;
export const MovieTicketRight = styled(Row)`
  width: 100%;
`;
export const MovieTicketLeft = styled.div`
  padding: 0 auto;
`;

export const MovieTicketQRCode = styled(QRCode)`
  text-align: center;
`;

//Form
export const MovieTicketFormItem = styled(Form.Item)`
  margin-bottom: 10px;
`;

export const MovieTicketSelect = styled(Select)`
  & .ant-select-arrow {
    color: white;
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input).ant-select-open
    .ant-select-arrow {
    transition: all 0.2s ease;
    transform: rotate(180deg);
  }
  &:not(.ant-select-customize-input) .ant-select-selector {
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border-radius: 15px;
    border: 2px solid white;

    & .ant-select-selection-item {
      color: white;
    }
  }
  &.ant-select:not(.ant-select-disabled):hover .ant-select-selector,
  .ant-select:not(.ant-select-disabled):focus .ant-select-selector {
    border: 1px solid red;
    box-shadow: 0 0 10px red;
    color: black;
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border: 1px solid red;
    box-shadow: 0 0 10px red;
  }
`;

//Icon
const MovieTicketIcon = css`
  font-size: 32px;
  border-radius: 50%;
  color: white;
  background-color: rgba(255, 0, 0);
  box-shadow: 0 0 10px black;
`;
export const MovieTicketIconMdMovieFilter = styled(MdMovieFilter)`
  ${MovieTicketIcon}
  padding: 5px;
`;
export const MovieTicketIconAiFillVideoCamera = styled(AiFillVideoCamera)`
  ${MovieTicketIcon}
  padding: 6px;
`;
export const MovieTicketIconBsCalendarFill = styled(BsCalendarFill)`
  ${MovieTicketIcon}
  padding: 6px;
`;

export const MovieTicketIconIoTime = styled(IoTime)`
  ${MovieTicketIcon}
  padding: 4px;
`;

//Arrow slider style
const MovieTicketArrow = css`
  color: rgba(255, 0, 0) !important;
  font-size: 35px;
  position: absolute;
  z-index: 9999999999;
  top: 60%;
  opacity: 0;
  ${MovieTicketSlider}:hover & {
    opacity: 1;
    color: rgba(255, 0, 0) !important;
  }
`;
export const CarouselArrowRight = styled(RightOutlined)`
  ${MovieTicketArrow}
  right: 20px;
`;

export const CarouselArrowLeft = styled(LeftOutlined)`
  ${MovieTicketArrow}
  left: 20px;
`;

//youtube player
export const MovieTicketYoutubePlayer = styled(ReactPlayer).attrs({
  playing: true,
  light: true,
  width: "600px",
  height: "300px",
})``;
