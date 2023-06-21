import { useState } from "react";
import { Chart } from 'chart.js/auto'

// import ChartData from './components/ChartData';
// import Chart from './components/Chart';
// import ChartWithMokeData from './components/ChartWithMokeData'
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { userData, colors } from "./database/db";
function App() {
  const [data, setData] = useState({
    labels: userData.map((label) => label.labels),
    datasets: [
      {
        label: "Rect Chart Js",
        data: userData.map((fee) => fee.fee),
        backgroundColor: colors.map((item) => item),
      },
    ],
  });



  return (
    <div className="App">
      <BarChart data={data}/>
      <LineChart data={data} />
      <PieChart data={data} />

      {/* <h1>Chart With Mocke Data</h1>
      <ChartWithMokeData chartData={chartData}/>
      <h1>__________________________</h1>
      <ChartData chartData={chartData} setChartData={setChartData} />
      <Chart chartData={chartData}/> */}
    </div>
  );
}
export default App;
