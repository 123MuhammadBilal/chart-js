import React from "react";
import { CChart } from "@coreui/react-chartjs";

const chart = ({ chartData }) => {
  const charData = [
    {
      labels: "JavaScript",
      fee: 250,
      student: 12,
    },
    {
      labels: "python",
      fee: 200,
      student: 20,
    },
    {
      labels: "kotlin",
      fee: 300,
      student: 10,
    },
    {
      labels: "C++ & C",
      fee: 350,
      student: 8,
    },
    {
      labels: "Node",
      fee: 350,
      student: 25,
    },
    {
      labels: "React",
      fee: 320,
      student: 30,
    },
    {
      labels: "Java",
      fee: 220,
      student: 10,
    },
  ];
  return (
    <>
      <CChart
        type="bar"
        data={{
          labels: charData.map((label) => label.labels),
          datasets: [
            {
              label: "Rect Chart Js",
              backgroundColor: "#f87979",
              data: charData.map((fee) => fee.fee),
            },
          ],
        }}
        labels="months"
      />
    </>
  );
};

export default chart;
