import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const LineChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Sales",
        data: [100, 120, 80, 150, 200, 180, 130],
        backgroundColor: "rgba(103, 58, 183, 0.2)",
        borderColor: "#673ab7",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
