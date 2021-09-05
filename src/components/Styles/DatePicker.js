import { DatePicker } from "antd";
import styled from "styled-components/macro";

export const DatePickerStyled = styled(DatePicker)`
  margin-left: 35px;
  background: transparent;
  border-left: none;
  border-right: none;
  border-top: none;
  box-shadow: none !important;
  border-bottom: 2px solid ${({ theme }) => theme.colors.white3};
  &&&.ant-picker:hover,
  .ant-picker-focused {
    border-color: ${({ theme }) => theme.colors.white1}!important;
  }
  & input {
    color: white;
    box-shadow: none !important;
  }
  &&& .ant-picker-suffix {
    color: white;
  }
  &&&.ant-picker {
    background-color: transparent !important;
  }
`;
