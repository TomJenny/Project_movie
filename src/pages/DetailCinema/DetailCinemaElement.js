import { Progress, Rate } from "antd";
import { down } from "styled-breakpoints";
import styled from "styled-components/macro";
import { ButtonPrimaryStyled } from "../../components/Styles/Button";

export const DetailCinemaContainer = styled.div`
  padding-top: 70px;
  position: relative;
`;

export const DetailCinemaBackground = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
`;

export const DetailCinemaBackgroundImg = styled.div`
  background: url(${(props) => props.src});
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
export const DetailCinemaContent = styled.div`
  position: absolute;
  z-index: 9999;
  top: 200px;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;

  width: 870px;
  min-height: 420px;

  ${down("md")} {
    width: 100%;
    padding: 20px;
  }
`;

export const DetailCinemaContentImg = styled.div`
  background-image: url(${(props) => props.src});
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
export const ButtonBuyTicket = styled(ButtonPrimaryStyled)`
  ${down("sm")} {
    display: none;
  }
`;

export const DetailCinemaContentInfo = styled.div`
  max-width: 330px;
`;
export const DetailCinemaContentTitle = styled.h2`
  color: white !important;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const DetailCinemaAddress = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin: 0;
`;
export const DetailCinemaRate = styled.div`
  position: absolute;
  z-index: 9999;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  ${down("sm")} {
    display: none;
  }
`;
export const DetailCinemaCirclePercent = styled(Progress)`
  filter: contrast(110%);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;

  &&& .ant-progress-text {
    font-size: 60px;
    color: white;
  }
`;
export const DetailCinemaStar = styled(Rate)`
  margin-top: 5px;
  display: block;
  filter: contrast(110%) drop-shadow(0 0 1px rgba(0, 0, 0, 0.2));
  font-size: 18px;
  text-align: center;
  color: red;
`;
