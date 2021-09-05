import styled from "styled-components";
import { PUBLIC_URL } from "../../utils/setting";

export const LoginTemplateContainer = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  background-image: url(${PUBLIC_URL}${(props) =>
    props.isRegister
      ? "/img/BackgroundRegister.jpg"
      : "/img/BackgroundLogin.png"});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LoginTemplateBackgroundOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
`;
