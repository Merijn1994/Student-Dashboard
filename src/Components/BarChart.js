import React from "react";
import { 
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryTheme,
    VictoryGroup,
    VictoryLegend,
    VictoryLabel,
    VictoryContainer
  } from 'victory'

  function BarChart( {data} ) {
    return (
      <VictoryChart
        theme={VictoryTheme.material}
        width={720}
        height={200}
        domain={{ x: [0, 56] }}
        containerComponent={
        <VictoryContainer width={700} height={250} />
        }
      >
        <VictoryLegend
          x={550}
          y={24}
          itemsPerRow={2}
          orientation="horizontal"
          data={[
              { name: "Fun", symbol: { fill: "lightgreen", type: "square" } },
              { name: "Difficulty", symbol: { fill: "red", type: "square" } },
          ]}
        />

        <VictoryLabel
          x={50}
          y={185}
          text="Assignment"
          style={[{ fill: "black", fontSize: 10, fontWeight: "bold" }]}
        />
        <VictoryAxis
          // X-axis
          style={{
          ticks: { stroke: "grey", size: 2 },
          tickLabels: {
              fontSize: 6,
              padding: 2,
              angle: -60,
              textAnchor: "end",
          },
          }}
        />
        <VictoryLabel
          x={24}
          y={80}
          angle={-90}
          text="Rating"
          style={[{ fill: "black", fontSize: 10, fontWeight: "bold" }]}
        />

        <VictoryAxis
          //Y-axis
          style={{
          axisLabel: { fontSize: 14, padding: 30 },
          ticks: { stroke: "grey", size: 2 },
          tickLabels: { fontSize: 7, padding: 5 },
          }}
          dependentAxis
        />
          
        <VictoryGroup   
          offset={3}
          colorScale={["lightgreen", "red" ]}
        >
          <VictoryBar
            data={data} 
            x="assignment" 
            y="fun"
            barWidth={3}
          />
          <VictoryBar
            data={data} 
            x="assignment" 
            y="difficulty"
            barWidth={3}
          />
        </VictoryGroup>
    </VictoryChart>
    )
  }

export default BarChart