import React from "react";
import { Bar } from "react-chartjs-2";
// import { Chart } from "chart.js/auto";
const BarChart = ({ data,options }) => {
  return (
    <div>
      <h1>BAR CHART</h1>
      <Bar data={data}></Bar>
    </div>
  );
};

export default BarChart;
