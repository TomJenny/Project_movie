import { CaretRightOutlined } from "@ant-design/icons";
import { Progress, Rate } from "antd";
import { down } from "styled-breakpoints";
import styled from "styled-components/macro";
import { ButtonPrimaryStyled } from "../../components/Styles/Button";

export const DetailFilmContainer = styled.div`
  padding-top: 70px;
  position: relative;
  height: auto;
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
`;

export const DetailFilmBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent 100%);
`;
export const DetailFilmBackgroundImg = styled.div`
  position: relative;
  background: url(${(props) => props.src}), url(${(props) => props.error});

  background-size: cover;
  background-position: center, 0 0;
  background-repeat: no-repeat;
  filter: blur(20px);
  width: 100%;
  height: 600px;
  ${down("sm")} {
    filter: none;
  } ;
`;

export const DetailFilmContent = styled.div`
  position: absolute;
  z-index: 9999;
  top: 200px;
  left: 50%;
  transform: translate(-50%);

  overflow: hidden;
  width: 870px;
  min-height: 400px;
  ${down("md")} {
    width: 100%;
    padding: 10px;
  }
`;
export const DetailFilmContentImg = styled.div`
  background: url(${(props) => props.src}), url(${(props) => props.error});

  background-size: cover;
  background-position: center, 0 0;
  background-repeat: no-repeat;
  width: 200px;
  height: 300px;

  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(31, 38, 135, 0.37);
  margin-right: 10px;

  &::after {
    display: block;
    content: "";
    position: absolute;
    z-index: 99999999;
    pointer-events: none;
    top: -110%;
    left: -210%;
    /* top:0;
  left:0; */
    width: 200%;
    height: 200%;
    opacity: 0;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.5) 92%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &:hover {
    &::after {
      opacity: 1;
      top: -30%;
      left: -30%;
      transition-property: left, top, opacity;
      transition-duration: 1s, 1s, 0.15s;
      transition-timing-function: ease;
    }
  }

  ${down("sm")} {
    background-image: none;
    box-shadow: none;
    width: 100%;
    &::after {
      display: none;
    }
  }
`;

export const DetailContainerTitle = styled.div`
  max-width: 330px;
  white-space: normal;
`;
export const DetailFilmContentTitle = styled.h2`
  color: white !important;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ButtonBuyTicket = styled(ButtonPrimaryStyled)`
  ${down("sm")} {
    display: none;
  }
`;
export const DetailCinemaTextAgeType = styled.span`
  display: inline-block;
  background-color: red;

  width: 45px;
  height: 28px;
  border-radius: 5px;
  margin-right: 5px;

  font-size: 1rem;
  color: white;
  text-align: center;
  line-height: 26px;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  ${down("sm")} {
    display: none;
  }
`;

export const DetailFilmTextShowTimes = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
`;
export const DetailFilmTextInfo = styled.div`
  & span {
    color: rgba(255, 255, 255, 0.8);
    margin-right: 10px;
  }
`;

export const DetailFilmRate = styled.div`
  position: absolute;
  z-index: 9999;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  ${down("sm")} {
    display: none;
  }
`;
export const DetailFilmCirclePercent = styled(Progress)`
  filter: contrast(110%);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;

  &&& .ant-progress-text {
    font-size: 60px;
    color: white;
  }
`;
export const DetailFilmStar = styled(Rate)`
  margin-top: 5px;
  display: block;
  filter: contrast(110%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
  font-size: 18px;
  text-align: center;
  color: red;
`;

export const DetailCinemaPlayButton = styled(CaretRightOutlined)`
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  z-index: 999999999;
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

  ${DetailFilmContentImg}:hover & {
    opacity: 1;
    transition: all 0.5 ease-in-out;
  }
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.5 ease-in-out;
  }
  ${down("sm")} {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5);
  }
`;
