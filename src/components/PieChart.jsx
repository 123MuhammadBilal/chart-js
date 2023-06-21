import React from 'react'
import {pie} from 'react-chartjs-2'
// import { Chart } from 'chart.js/auto'
const PieChart = ({data}) => {
  return (
    <div>
        <h1>Line CHART</h1>
        <pie data={data}></pie>
    </div>
  )
}

export default PieChart