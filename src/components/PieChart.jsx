import React from 'react'
import {Pie} from 'react-chartjs-2'
// import { Chart } from 'chart.js/auto'
const PieChart = ({data}) => {
  return (
    <div>
        <h1>Line CHART</h1>
        <Pie data={data}></Pie>
    </div>
  )
}

export default PieChart