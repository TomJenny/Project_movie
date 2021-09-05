import { Image } from "antd";
import styled from "styled-components/macro";

export const AdminShowtimesContainer = styled.div``;

export const AdminShowtimeFormContainer = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.black1};
  padding: 30px 10px 30px;
  height: auto;
`;

export const AdminShowTimeFilmName = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  color: white;
`;

export const AdminShowtimeImage = styled(Image)`
  width: 180px;
  height: 250px;
  border-radius: 5px;
  filter: drop-shadow(0 0 1px ${({ theme }) => theme.colors.secondary});
`;
