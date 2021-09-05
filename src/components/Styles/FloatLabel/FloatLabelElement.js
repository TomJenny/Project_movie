import styled, { css } from "styled-components";

export const FloatLabelCSS = styled.div`
  position: relative;
  margin-bottom: ${(props) => (props.search ? "0" : "12px")};
`;

export const LabelCSS = styled.label`
  position: absolute;
  z-index: 999;
  pointer-events: none;
  left: ${(props) => (props.search ? "0" : "35px")};
  top: ${(props) => (props.float ? "-10px" : "7px")};

  color: white;
  font-weight: normal;
  font-size: ${(props) => (props.float ? "13px!important" : "16px!important")};

  transition: 0.2s ease all;
  ${(props) =>
    props.select &&
    props.float &&
    css`
      top: -13px;
    `}
  ${(props) =>
    props.textarea &&
    css`
      left: 10px;
      top: -20px;
    `}
`;
