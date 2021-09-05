import { css } from "styled-components";

export const GlassEffect = ({
  color,
  trans,
  blur,
  border,
  radius,
  boxshadow,
}) => css`
  background: rgba(${color || "255,255,255"}, ${trans || 0.2});
  box-shadow: ${boxshadow || "0 8px 32px 0 rgba(31, 38, 135, 0.37)"};
  backdrop-filter: blur(${blur || "2px"});
  -webkit-backdrop-filter: blur(${blur || "2px"});
  border-radius: ${radius || "10px"};
  border: ${border || "1px solid rgba(255, 255, 255, 0.18)"};
`;

export const font = ({ color, size }) => `
  color: ${color || "black"};
  font-size: ${size || "1rem"};
`;
