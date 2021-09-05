import { down } from "styled-breakpoints";
import styled from "styled-components";
import { ButtonPrimaryStyled } from "../../../components/Styles/Button";
import { PUBLIC_URL } from "../../../utils/setting";

export const HomeAppContainer = styled.div`
  position: relative;
  background: url(${PUBLIC_URL}"/img/App/background.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 120px 0 80px 0;
  margin-top: 100px;
`;

export const HomeAppBackgroundOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.5) 40%,
    transparent 10%,
    rgba(0, 0, 0, 0.5) 40%
  );
`;
export const HomeAppContentLeft = styled.div`
  padding: 60px 10px;
  max-width: 400px;

  text-transform: capitalize !important;
  color: white !important;
`;
export const HomeAppContentLeftTitle = styled.h1`
  font-size: 30px;
  color: white !important;
`;
export const HomeAppContentLeftText = styled.h3`
  color: white !important;
`;

export const HomeAppContentLeftButton = styled(ButtonPrimaryStyled)`
  margin-top: 20px;
  max-width: 250px;
  height: 50px;
  font-size: 18px;
  background: red !important;
  ${down("sm")} {
    max-width: 200px;
    font-size: 14px;
  }
`;

export const HomeAppSLickPhone = styled.img`
  width: 100%;
  height: 100%;
  ${down("md")} {
    height: 538px !important;
    width: 252px !important;
  }
`;

export const HomeAppSlickImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const HomeAppSlider = styled.div`
  display: inline-block;
  position: absolute;
  top: 2%;
  left: 50%;
  transform: translateX(-50%);

  width: 179px;
  height: 100%;
  & .slick-track {
    display: flex;
  }
  & .slick-slide.slick-current {
    position: relative;
    z-index: 1;
  }
  & .slick-list {
    border-radius: 20px;
    padding: 0;
  }
  ${down("md")} {
    height: 550px !important;
    width: 237px !important;
  }
`;
export const HomeAppContentRight = styled.div`
  position: relative;
  margin: 0 auto;
  width: 190px !important;
  height: 404px !important;
  ${down("md")} {
    margin: 50px auto 0;
    height: 550px !important;
    width: 252px !important;
  }
`;
