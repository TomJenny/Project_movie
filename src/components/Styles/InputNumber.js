import { InputNumber } from "antd";
import styled from "styled-components/macro";

export const InputNumberStyled = styled(InputNumber)`
  margin-left: 35px;
  background: transparent !important;
  border-left: none;
  border-top: none;
  border-right: none;
  box-shadow: none !important;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white3};
  &.ant-input-number {
    color: white;
  }

  &.ant-input-number:hover {
    border-color: ${({ theme }) => theme.colors.white1};
  }
`;
