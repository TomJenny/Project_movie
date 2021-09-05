import styled from "styled-components/macro";

export const DashboardLogoContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  height: 80px;

  padding: 20px;
`;

export const DashboardLogoContent = styled.div`
  display: inline-flex;
  padding: 5px 10px;
`;

export const DashboardLogo = styled.img`
  width: 30px;
  filter: drop-shadow(0 0 1px black);
`;

export const DashBoardLogoColor = styled.div`
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
  margin: 0 10px;
  filter: drop-shadow(0 0 1px black);
`;
