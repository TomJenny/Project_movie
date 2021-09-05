import { Link } from "react-router-dom";
import { down } from "styled-breakpoints";
import styled, { css } from "styled-components/macro";

export const LogoLink = styled(Link)`
  display: block;
  position: absolute;
  z-index: 9999999;
  left: 5%;
  top: 15px;

  & img {
    display: block;
    width: 110px;
    margin: 0 auto;
  }

  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-5px);
    filter: drop-shadow(0 0 10px black) brightness(1.2);
  }
  ${(props) =>
    props.display &&
    css`
      display: none;
      ${down("sm")} {
        display: block !important;
      }
    `}
  ${down("sm")} {
    display: none;
  }
`;
