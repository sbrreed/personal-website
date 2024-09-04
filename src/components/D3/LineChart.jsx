import * as d3 from "d3";
import D3Chart from "./D3Chart";

const LineChart = ({ data }) => {
  const drawLineChart = (svg) => {
    console.log("data", data);
    const dates = Object.keys(data[0]);
    const values = Object.values(data[0]);

    // Set up scales
    const x = d3.scalePoint().domain(dates).range([0, 400]).padding(0.5);

    const y = d3.scaleLinear().domain([4000, 4200]).range([200, 0]);

    // Create line generator
    const line = d3
      .line()
      .x((d, i) => x(dates[i]))
      .y((d) => y(d));

    svg
      .append("path")
      .datum(values)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0, 200)`)
      .call(d3.axisBottom(x).tickFormat((d) => d));

    // Add y-axis
    svg.append("g").call(d3.axisLeft(y));
  };

  return (
    <D3Chart
      width={400}
      height={200}
      margin={{ top: 20, right: 30, bottom: 30, left: 40 }}
      drawChart={drawLineChart}
    />
  );
};

export default LineChart;
