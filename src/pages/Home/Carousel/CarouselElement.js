import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import styled, { css, keyframes } from "styled-components";
import { PlayButtonStyled } from "../../../components/Styles/PlayButton";

export const CarouselContainer = styled.div`
  width: 100%;
  height: 750px;
  position: relative;
  background-image: url(${(props) => props.srcImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const CarouselPlayButton = styled(PlayButtonStyled)`
  font-size: 35px;
  padding: 18px;
  opacity: 0;
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
    transition: all 0.5 ease-in-out;
  }
`;

export const CarouselSlider = styled(Slider)`
  &:hover ${CarouselPlayButton} {
    opacity: 1;
    transition: all 0.5 ease-in-out;
  }
`;
export const CarouselBackgroundOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 25%;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
`;

export const CarouselImg = styled.img`
  height: 750px;
  width: 100%;
`;

export const CarouselArrowBackground = styled.div`
  height: 100%;
  width: 80px;

  position: absolute;
  z-index: 99;
  top: 49%;

  ${(props) =>
    (props.right &&
      css`
        right: 0;
      `) ||
    (props.left &&
      css`
        left: 0;
      `)}
  &::before {
    display: none;
  }
`;
export const CarouselArrowRight = styled(RightOutlined)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 40px;
  position: absolute;
  z-index: 9999;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  ${CarouselArrowBackground}:hover & {
    color: white;
  }
`;

export const CarouselArrowLeft = styled(LeftOutlined)`
  color: rgba(255, 255, 255, 0.2);
  font-size: 40px;
  position: absolute;
  z-index: 9999;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
  ${CarouselArrowBackground}:hover & {
    color: white;
  }
`;

// MOUSE SCROLL
export const MouseScroll = styled.span`
  position: absolute;
  z-index: 99999;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);
`;

//Mouse
export const Mouse = styled.div`
  height: 70px;
  width: 40px;
  background: transparent;

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 20px;
  transform: none;
  border: 3px solid white;
  top: 170px;

  &:hover {
    box-shadow: 0 0 10px white;
  }
`;

//Wheel
const WheelAnimation = keyframes`
 0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    -ms-transform: translateY(30px);
    transform: translateY(30px);
  }
`;

export const Wheel = styled.div`
  height: 20px;
  width: 20px;
  display: block;
  margin: 6px auto;
  background: white;
  box-shadow: 0 0 2px black;
  position: relative;
  border-radius: 50%;

  -webkit-animation: ${WheelAnimation} 2s ease infinite;
`;

//Arrow
const ArrowAnimation = keyframes`
 0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
`;

export const Arrow = styled.span`
  display: block;
  width: 26px;
  height: 26px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);

  border-right: 3px solid white;
  border-bottom: 3px solid white;
  margin: 0 0 3px 6px;

  -webkit-animation: ${ArrowAnimation} 1s infinite;
  -moz-animation: ${ArrowAnimation} 1s infinite;
  animation: ${ArrowAnimation} 1s infinite;

  ${(props) =>
    (props.top &&
      css`
        -webkit-animation-delay: 0.2s;
        -moz-animation-delay: 0.2s;
        -webkit-animation-direction: alternate;

        animation-direction: alternate;
        animation-delay: alternate;
      `) ||
    (props.center &&
      css`
        -webkit-animation-delay: 0.3s;
        -moz-animation-delay: 0.3s;
        -webkit-animation-direction: alternate;

        animation-delay: 0.3s;
        animation-direction: alternate;
      `)}
`;
