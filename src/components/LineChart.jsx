import React from 'react'
import {Line} from 'react-chartjs-2'
// import { Chart } from 'chart.js/auto'
const LineChart = ({data}) => {
  return (
    <div>
        <h1>Line CHART</h1>
        <Line data={data}></Line>
    </div>
  )
}

export default LineChart