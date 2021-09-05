import { down } from "styled-breakpoints";
import styled from "styled-components/macro";

export const TitleTabsStyled = styled.a`
  display: flex;
  padding: 0 20px;

  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.white3};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: 1px !important;
  text-transform: uppercase !important;
  transition: all 0.3s linear;

  &:hover {
    letter-spacing: 2px !important;
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.white1};
    filter: drop-shadow(0 2px 4px ${({ theme }) => theme.colors.white3});
  }

  ${down("sm")} {
    font-size: 1rem;
  }
`;

export const TitleSection = styled.h1`
  margin: 10px auto;
  padding: 15px 10px;
  letter-spacing: 2px !important;

  color: ${({ theme }) => theme.colors.white1};
  font-size: 1.5rem;
  text-align: center;
`;
