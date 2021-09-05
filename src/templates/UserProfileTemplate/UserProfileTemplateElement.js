import styled from "styled-components";
import { PUBLIC_URL } from "../../utils/setting";

export const UserProfileContainer = styled.div`
  position: relative;

  background: url(${PUBLIC_URL}"/img/App/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100%;
  min-height: 100vh;
`;

export const UserProfileBackgroundOverlay = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 40%,
    transparent,
    rgba(0, 0, 0, 0.7) 40%
  );
`;
