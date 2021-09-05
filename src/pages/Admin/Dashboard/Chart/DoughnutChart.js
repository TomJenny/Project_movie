import React, { Fragment } from "react";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { CHART_COLORS } from "../../../../components/Styles/Theme";
import {
  DashboardLogo,
  DashBoardLogoColor,
  DashboardLogoContainer,
  DashboardLogoContent,
} from "./ChartElement";
export default function DoughnutChart() {
  const { arrayCinemaShowTimes } = useSelector((state) => state.CinemaReducer);
  const data = {
    datasets: [
      {
        data: [5.7, 2, 2.6, 1, 3, 3],
        backgroundColor: CHART_COLORS,
        borderColor: [`#1a1a1a`],
        borderWidth: 2,
      },
    ],
  };
  const renderLogoCinema = () => {
    return arrayCinemaShowTimes.map((cinema, index) => {
      return (
        <DashboardLogoContent key={index}>
          <DashboardLogo src={cinema.logo} alt="cinema" />
          <DashBoardLogoColor color={CHART_COLORS[index]}></DashBoardLogoColor>
        </DashboardLogoContent>
      );
    });
  };

  return (
    <Fragment>
      <Doughnut
        data={data}
        width={250}
        height={250}
        style={{
          filter: "drop-shadow(0 0 1px black)",
          margin: "0 auto",
        }}
      />
      <DashboardLogoContainer>{renderLogoCinema()}</DashboardLogoContainer>
    </Fragment>
  );
}
