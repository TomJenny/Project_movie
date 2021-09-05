import { Cascader } from "antd";
import styled from "styled-components/macro";

export const CascaderStyled = styled(Cascader)`
  margin-left: 35px;
  width: 90.5% !important;
  &.ant-cascader-picker {
    background: transparent;
  }

  & .ant-cascader-input {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white3};

    box-shadow: none !important;
    padding-right: 0;
  }
  &&& .ant-input:hover,
  &&&.ant-cascader-picker:focus .ant-cascader-input,
  &&&
    .ant-cascader-picker-label:hover
    + .ant-cascader-input:not(.ant-cascader-picker-disabled
      .ant-cascader-picker-label:hover
      + .ant-cascader-input) {
    border-color: ${({ theme }) => theme.colors.white1}!important;
  }
  & .ant-cascader-picker-arrow {
    color: white;
  }
  & .ant-cascader-picker-arrow-expand {
    transition: all 0.2s ease;
    transform: rotate(180deg);
  }
  color: white;
  & .ant-cascader-picker-label {
    padding-left: 0;
  }
`;
