import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styled, { css } from "styled-components/macro";

const { Password, Search } = Input;

const inputCss = css`
  font-size: 20px;

  background-color: transparent !important;
  color: white !important;

  &&& input {
    background-color: transparent !important;
    color: white;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.5) !important;

    font-size: 16px;
    box-shadow: none !important;

    &:focus {
      border-bottom: 2px solid white !important;
    }
  }

  &.ant-input-affix-wrapper,
  &.ant-form-item-has-error {
    border: none;
    box-shadow: none;
  }
`;

export const InputStyled = styled(Input)`
  ${inputCss}
  & .ant-input[disabled] {
    color: white;
  }
  
  }
`;

export const InputPasswordStyled = styled(Password)`
  ${inputCss}
  & .ant-input-suffix {
    & svg {
      color: white !important;
    }
  }
`;

export const SearchStyled = styled(Search)`
  ${inputCss}
  position:relative;
  &&& .ant-input-group-addon {
    background-color: transparent !important;
    color: white !important;
    border: none !important;
    margin-bottom: 0;
  }
  &&& .ant-btn-primary {
    background-color: transparent !important;
    color: white !important;
    border: none !important;
    position: absolute !important;
    top: 0;
    left: -30px;
    &[ant-click-animating-without-extra-node]:after {
      -webkit-animation: none !important;
      -moz-animation: none !important;
      -o-animation: none !important;
      -ms-animation: none !important;
      animation: none !important;
    }
  }
`;

export const TextAreaStyled = styled(TextArea)`
  &.ant-input {
    background: transparent !important;
    color:  ${({ theme }) => theme.colors.white1};
    border-left: none;
    border-top: none;
    border-right: none;
    box-shadow: none!important;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white3};
    width: 85%;
  

  &&& span.anticon.ant-input-clear-icon {
    color: ${({ theme }) => theme.colors.white3};
  }

  &.ant-input:focus {
    border-color: ${({ theme }) => theme.colors.white1};

  }

  ${(props) =>
    props.iscomment &&
    css`
      width: 100%;

      &.ant-input {
        color: ${({ theme }) => theme.colors.secondary};
      }

      &.ant-input:focus {
        border-color: ${({ theme }) => theme.colors.white5};
      }
    `}
`;
