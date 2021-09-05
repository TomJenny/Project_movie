import { Switch } from "antd";
import styled from "styled-components/macro";

export const SwitchStyled = styled(Switch)`
  &.ant-switch-checked {
    background: ${({ theme }) => theme.colors.primary}!important;
  }
  &.ant-switch {
    background: ${({ theme }) => theme.colors.black2};
  }
`;
