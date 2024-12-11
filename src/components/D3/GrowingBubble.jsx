import * as d3 from "d3";
import D3Chart from "./D3Chart";
import { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const GrowingBubble = ({
  data,
  investmentHistory,
  resetChart,
  setResetChart,
}) => {
  // console.log("data in GrowingBubble", data);
  const { windowWidth } = useWindowDimensions();
  const chartHeight = 500;
  const chartWidth = windowWidth * 0.65;
  let margin = { top: -29, right: 0, bottom: 30, left: 0 };

  const drawBubble = (svg) => {
    if (!data || data.length === 0) {
      return;
    }

    let maxData = [];

    Object.keys(data[0]).forEach((key) => {
      if (key.startsWith("value")) {
        maxData.push(Number(d3.max(data, (d) => d[key])));
      }
    });

    const rScale = d3
      .scaleSqrt()
      .domain([0, d3.max(maxData)])
      .range([0, 250]); // Adjust max radius as needed

    const color = [
      "#513554",
      "#734C78",
      "#926099",
      "#B275BA",
      "#D48CDE",
      "#DC91E6",
    ];
    // Define the path for the square with a cut-out circle
    const smallRadius = 10;
    const angle = (30 * Math.PI) / 100;
    const xlocSmall = Math.sin(angle) * smallRadius;
    const ylocSmall = Math.cos(angle) * smallRadius;

    const smallShape = `
    M 0 ${chartHeight / 2}
    L ${xlocSmall} ${chartHeight / 2 - ylocSmall}
    A ${smallRadius} ${smallRadius * 0.8} 0 1 1 ${xlocSmall} ${
      ylocSmall + chartHeight / 2
    }
      L 0 ${chartHeight / 2}
      Z
      `;
    svg
      .selectAll(".bubble")
      .data(maxData.sort((a, b) => b - a))
      .enter()
      .append("path")
      .attr("class", "bubble")
      .attr("d", smallShape)
      .attr("fill", (d, i) => color[i % color.length])
      .attr("stroke", "white")
      .transition()
      .duration(3000)
      .attr("d", (d) => {
        // console.log("d in bubble", d);
        const radius = rScale(d);
        const xloc = Math.sin(angle) * (radius - 20);
        const yloc = Math.cos(angle) * (radius - 20);

        return `
          M 0 ${chartHeight / 2}
          L ${xloc} ${chartHeight / 2 - yloc}
          A ${radius} ${radius * 0.8} 0 1 1 ${xloc} ${yloc + chartHeight / 2}
          L 0 ${chartHeight / 2}
          Z
          `;
      });
  };

  return (
    <D3Chart
      width={chartWidth}
      height={chartHeight}
      margin={margin}
      drawChart={drawBubble}
    />
  );
};

export default GrowingBubble;
