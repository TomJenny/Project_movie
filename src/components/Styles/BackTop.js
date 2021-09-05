import styled from "styled-components/macro";
export const BackTopStyled = styled.div`
  background-color: rgba(255, 0, 0, 0.7);
  width: 45px;
  height: 45px;
  border-radius: 50%;

  text-align: center;
  line-height: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  & svg {
    color: white;
    font-size: 1.4rem;
  }
`;
