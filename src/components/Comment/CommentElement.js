import { Collapse, Form } from "antd";
import { down } from "styled-breakpoints";
import styled from "styled-components/macro";
import { ButtonPrimaryStyled } from "../Styles/Button";

const { Panel } = Collapse;

export const CommentContainer = styled.div`
  max-width: 580px;
  margin: 0 auto;
  height: auto;
  /* overflow-y: auto; */
`;

export const CommentItemContainer = styled(Panel)`
  width: 100%;
  padding: 20px 20px 12px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  background: white;

  &&& .ant-collapse-header {
    padding: 0;
  }

  &&& .ant-divider {
    margin: 10px 0 5px;
  }
`;

export const CommentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    margin-left: 5px;
  }
  &&& .ant-rate {
    font-size: 0.625rem;
    color: ${({ theme }) => theme.colors.red1}!important;

    & .ant-rate-star:not(:last-child) {
      margin: 0;
    }

  }
  ${down("xs")} {
    flex-direction: column;
    align-items: start;
 &&& .ant-rate {
      margin-left:38px;
  
  }
`;
export const CommentHeaderUserName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-transform: capitalize;
`;

export const CommentHeaderTime = styled.span`
  font-size: 0.75rem;
`;

export const CommentRate = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.red1};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 1rem;
  line-height: 1;
  text-align: center;
  ${down("xs")} {
    display: none;
  }
`;

export const FooterCommentContainer = styled.div`
  & span {
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.white4}!important;
  }
`;

//comment header
export const CommentRegisterContainer = styled.div`
  min-height: 60px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white1};
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px 12px;
  display: flex;
  justify-content: space-between !important;
  align-items: center;

  &&& .ant-rate {
    /* font-size: 0.625rem; */
    color: ${({ theme }) => theme.colors.red1}!important;
  }
  & .ant-row > span {
    line-height: 36px;
    color: ${({ theme }) => theme.colors.white3};
  }

  ${down("xs")} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormComment = styled(Form)`
  width: 100%;
`;

export const ButtonComment = styled(ButtonPrimaryStyled)`
  min-width: 100%;
  height: 40px;
`;

export const CommentRateNumber = styled.span`
  display: block;
  font-size: 1.25rem;
  margin-left: 10px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.white5};
`;
export const CommentButton = styled(ButtonPrimaryStyled)`
  display: inline-block;
  margin: 35px 10px;
  width: 100px;
  height: 35px;
`;
