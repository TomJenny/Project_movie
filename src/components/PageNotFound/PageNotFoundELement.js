import styled from "styled-components/macro";

export const PageNotFoundContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  .ant-result-title,
  .ant-result-subtitle {
    color: ${({ theme }) => theme.colors.white1}!important;
  }
`;
