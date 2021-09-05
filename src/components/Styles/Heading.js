import styled from "styled-components/macro";

export const HeadingH1Styled = styled.h1`
  color: ${({ theme }) => theme.colors.white2};
  font-size: 30px;
  position: relative;
  padding-left: 10px;
  &::after {
    content: "";
    display: block;

    position: absolute;
    left: 0;

    bottom: 50%;
    transform: translateY(50%);

    width: 4px;
    height: 65%;

    background: ${({ theme }) => theme.colors.primary};
  }
`;
