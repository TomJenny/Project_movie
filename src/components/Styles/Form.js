import { Form } from "antd";
import styled from "styled-components/macro";

const { Item } = Form;
export const FormItemStyled = styled(Item)`
  position: relative;
  color: white !important;

  &&& .ant-input-affix-wrapper {
    border: none;
    box-shadow: none;
    background: transparent !important;
    & .anticon.ant-input-clear-icon {
      color: white;
      top: 5px;
      right: 15%;
    }
  }
  &&& .ant-form-item-explain.ant-form-item-explain-error {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.colors.medium};
    margin-left: 32px;
  }
`;
