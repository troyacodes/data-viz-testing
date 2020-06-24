import React, { useState, Fragment } from "react"
import Chart from "react-apexcharts"

import Layout from "../components/layout"

const Apex = () => {
  const [data, setData] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 900],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
  })

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  }

  const handleClick = () => {
    setData({
      series: [
        {
          name: "series1",
          data: [31, 45, 28, 51, 42, 109, 900],
        },
        {
          name: "series2",
          data: [11, 32, 45, 320, 34, 52, 41],
        },
        {
          name: "series3",
          data: [1, 66, 45, 320, 104, 52, 41],
        },
      ],
    })
  }

  return (
    <Layout>
      <Chart options={options} series={data.series} type="area" height={350} />
      <button onClick={handleClick}>click</button>
    </Layout>
  )
}

export default Apex
