import { Button } from "antd";
import styled, { css } from "styled-components/macro";

export const ButtonPrimaryStyled = styled(Button)`
  background: ${({ theme }) => theme.colors.primary}!important;
  box-shadow: 0 2px 4px ${({ theme }) => theme.colors.black1};
  &:hover {
    background: ${({ theme }) => theme.colors.red1}!important;
  }
  & svg {
    font-size: 20px;
  }

  ${(props) =>
    props.book &&
    css`
      letter-spacing: 2px;
    `}
`;
