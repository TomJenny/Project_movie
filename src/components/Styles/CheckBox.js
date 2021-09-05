import Checkbox from "antd/lib/checkbox/Checkbox";
import styled from "styled-components/macro";

export const CheckboxStyled = styled(Checkbox)`
  &&& .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &&& .ant-checkbox-checked::after {
    border: 1px solid ${({ theme }) => theme.colors.white1};
  }
`;
