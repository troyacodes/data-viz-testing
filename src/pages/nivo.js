import React, { useState } from "react"
import { ResponsiveLine } from "@nivo/line"

import Layout from "../components/layout"

const Nivo = () => {
  const [data, setData] = useState([
    {
      id: "japan",
      color: "hsl(346, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 124,
        },
        {
          x: "helicopter",
          y: 288,
        },
        {
          x: "boat",
          y: 229,
        },
        {
          x: "train",
          y: 111,
        },
        {
          x: "subway",
          y: 33,
        },
        {
          x: "bus",
          y: 183,
        },
        {
          x: "car",
          y: 157,
        },
        {
          x: "moto",
          y: 63,
        },
        {
          x: "bicycle",
          y: 221,
        },
        {
          x: "horse",
          y: 226,
        },
        {
          x: "skateboard",
          y: 31,
        },
        {
          x: "others",
          y: 256,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(116, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 145,
        },
        {
          x: "helicopter",
          y: 78,
        },
        {
          x: "boat",
          y: 61,
        },
        {
          x: "train",
          y: 242,
        },
        {
          x: "subway",
          y: 179,
        },
        {
          x: "bus",
          y: 84,
        },
        {
          x: "car",
          y: 31,
        },
        {
          x: "moto",
          y: 48,
        },
        {
          x: "bicycle",
          y: 213,
        },
        {
          x: "horse",
          y: 142,
        },
        {
          x: "skateboard",
          y: 76,
        },
        {
          x: "others",
          y: 126,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(203, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 194,
        },
        {
          x: "helicopter",
          y: 36,
        },
        {
          x: "boat",
          y: 246,
        },
        {
          x: "train",
          y: 238,
        },
        {
          x: "subway",
          y: 246,
        },
        {
          x: "bus",
          y: 208,
        },
        {
          x: "car",
          y: 262,
        },
        {
          x: "moto",
          y: 128,
        },
        {
          x: "bicycle",
          y: 62,
        },
        {
          x: "horse",
          y: 276,
        },
        {
          x: "skateboard",
          y: 76,
        },
        {
          x: "others",
          y: 139,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(35, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 69,
        },
        {
          x: "helicopter",
          y: 180,
        },
        {
          x: "boat",
          y: 213,
        },
        {
          x: "train",
          y: 201,
        },
        {
          x: "subway",
          y: 88,
        },
        {
          x: "bus",
          y: 190,
        },
        {
          x: "car",
          y: 12,
        },
        {
          x: "moto",
          y: 17,
        },
        {
          x: "bicycle",
          y: 34,
        },
        {
          x: "horse",
          y: 288,
        },
        {
          x: "skateboard",
          y: 44,
        },
        {
          x: "others",
          y: 96,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(229, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 229,
        },
        {
          x: "helicopter",
          y: 166,
        },
        {
          x: "boat",
          y: 276,
        },
        {
          x: "train",
          y: 38,
        },
        {
          x: "subway",
          y: 47,
        },
        {
          x: "bus",
          y: 294,
        },
        {
          x: "car",
          y: 155,
        },
        {
          x: "moto",
          y: 220,
        },
        {
          x: "bicycle",
          y: 85,
        },
        {
          x: "horse",
          y: 284,
        },
        {
          x: "skateboard",
          y: 90,
        },
        {
          x: "others",
          y: 204,
        },
      ],
    },
  ])
  return (
    <Layout>
      <div className="container" style={{ height: "500px" }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={{ scheme: "nivo" }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </Layout>
  )
}

export default Nivo
