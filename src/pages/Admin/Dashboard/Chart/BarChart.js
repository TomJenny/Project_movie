import React, { Fragment } from "react";
import { Bar } from "react-chartjs-2";
import theme from "../../../../components/Styles/Theme";

export default function BarChart() {
  const data = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Quantity of Ticket (pcs/week)",
        data: [200, 300, 400, 500, 600, 700, 800],
        backgroundColor: theme.colors.red1,
        borderColor: ["#1a1a1a"],
        borderWidth: 4,
        color: "white",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <Fragment>
      <Bar data={data} options={options} />
    </Fragment>
  );
}
