import { Select } from "antd";
import styled from "styled-components/macro";

export const SelectStyled = styled(Select)`
  padding: 0;
  font-size: 16px;
  color: white;
  width: 90% !important;

  margin-left: 35px !important;

  &.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    padding: 0;
  }

  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background: transparent !important;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white3};
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.white1} !important;
    box-shadow: none;
  }
  & .ant-select-arrow {
    color: white;
  }
  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input).ant-select-open
    .ant-select-arrow {
    transition: all 0.2s ease;
    transform: rotate(180deg);
  }
`;
