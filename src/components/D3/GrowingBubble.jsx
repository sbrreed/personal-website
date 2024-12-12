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
  const { windowWidth } = useWindowDimensions();
  const chartHeight = 500;
  const chartWidth = windowWidth * 0.45 > 600 ? 600 : windowWidth * 0.45;
  let margin = { top: -79, right: 0, bottom: 30, left: -20 };

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
        const radius = rScale(d) * 0.8;
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

    // create labels
    let label_container = svg
      .selectAll(".bubble-label")
      .data(maxData.sort((a, b) => b - a))
      .enter()
      .append("foreignObject")
      .attr("class", "bubble-label")
      .attr("x", 0)
      .attr("y", chartHeight / 2 - 7)
      .attr("width", 80)
      .attr("height", 80);

    label_container.append("xhtml:div").html(
      (d, i) => `
      <div class="investment-label">
      <p>$${d3.format(",.0f")(d)}</p>
      </div>`
    );

    label_container
      .transition()
      .duration(3000)
      .attr("x", (d) => {
        const radius = rScale(d) * 0.8;
        return radius * 2;
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
