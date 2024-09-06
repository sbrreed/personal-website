import * as d3 from "d3";
import D3Chart from "./D3Chart";
import { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const LineChart = ({ data, investmentHistory }) => {
  const { windowHeight, windowWidth } = useWindowDimensions();
  const chartHeight = 500;
  const chartWidth = windowWidth * 0.65;
  const margin = { top: 20, right: 30, bottom: 30, left: 80 };

  useEffect(() => {
    // Create the tooltip div once
    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("visibility", "hidden");

    return () => {
      tooltip.remove(); // Cleanup tooltip on component unmount
    };
  }, []);

  const drawLineChart = (svg) => {
    if (!data || data.length === 0) {
      console.error("No data available for chart.");
      return;
    }

    const x_axis_values = data.map((d) => d.age);

    // Collect all values for y-axis scaling
    const allValues = data.flatMap((d) =>
      Object.keys(d)
        .filter((key) => key.startsWith("value"))
        .map((key) => d[key])
    );

    // Set up scales
    const x = d3
      .scalePoint()
      .domain(x_axis_values)
      .range([0, chartWidth - margin.left - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, Math.max(...allValues)])
      .range([chartHeight - margin.top - margin.bottom, 0]);

    // Color scale for lines
    const color = [
      "#634B63",
      "#75648c",
      "#5c7358",
      "#748C64",
      "#64698C",
      "#315E56",
      "#2b2b2b",
      "#545454",
    ];

    // Tooltip selection
    const tooltip = d3.select(".tooltip");

    // Number of lines to draw
    const numLines = Object.keys(data[0]).filter((key) =>
      key.startsWith("value")
    ).length;

    for (let i = 1; i <= numLines; i++) {
      const investment = investmentHistory[i - 1]; // Get the corresponding investment data
      const line = d3
        .line()
        .x((d) => x(d.age))
        .y((d) => y(d[`value${i}`]));

      svg
        .append("g")
        .selectAll(`dot-${i}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("class", `dot-${i}`)
        .attr("fill", i > color.length - 1 ? color[i - color.length] : color[i])
        .attr(
          "stroke",
          i > color.length - 1 ? color[i - color.length] : color[i]
        )
        .attr("stroke-width", 1.5)
        .attr("r", 3)
        .attr("cx", (d) => {
          return x(d.age);
        })
        .attr("cy", (d) => y(d[`value${i}`]))
        // .style("cursor", "pointer")
        .on("mouseover", function (event, d) {
          const value = d[`value${i}`];
          const dotValue = d3.format("$,")(Math.round(value));
          tooltip
            .style("visibility", "visible")
            .html(
              `<span className = 'prop'>Age:</span> ${d.age}<br>
              <span className = 'prop'>Value:</span>  ${dotValue}<br>
              <span className = 'prop'>Initial:</span>  $${investment.initialInvestment}<br>
              <span className = 'prop'>Annual:</span>  $${investment.annualContribution}`
            )
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY - 20 + "px");
        })
        .on("mouseout", function () {
          tooltip.style("visibility", "hidden");
        });

      // Append path for each line
      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr(
          "stroke",
          i > color.length - 1
            ? color[i - color.length]
            : i > color.length - 1
            ? color[i - color.length]
            : color[i]
        ) // Different color for each line
        .attr("stroke-width", 1.5)
        .attr("d", line);

      const dots = d3.selectAll(`.dot-${i}`).nodes();
      const lastDot = dots[dots.length - 1];
      // Get the position of the last dot
      const cx = d3.select(lastDot).attr("cx");
      const cy = d3.select(lastDot).attr("cy");

      // Append a foreignObject to the svg, positioned relative to the last dot
      svg
        .append("foreignObject")
        .attr("x", +cx + 10) // Adjust x position slightly to the right of the dot
        .attr("y", cy - 10) // Align y position with the dot, adjust as necessary
        .attr("width", 200) // Set the width of the foreignObject
        .attr("height", 30) // Set the height of the foreignObject
        .append("xhtml:div") // Append a div inside the foreignObject
        .style("font-size", "12px") // Set font size
        .style(
          "color",
          i > color.length - 1 ? color[i - color.length] : color[i]
        ) // Set text color to match the line
        .html(
          `<p>Initial: $${investment.initialInvestment} <br>Annual: $${investment.annualContribution}</p>`
        ); // Add the text content
    }

    // Add x-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${chartHeight - margin.bottom})`)
      .call(
        d3.axisBottom(x).tickValues(x_axis_values.filter((d) => d % 5 === 0)) // Show every 5th tick
      );

    /// add x axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", chartWidth / 2 - margin.left)
      .attr("y", chartHeight + margin.bottom / 2)
      .text("Age");

    // Add y-axis
    svg
      .append("g")
      .attr("transform", `translate(0, ${margin.top})`)
      .call(d3.axisLeft(y).tickFormat(d3.format("$,d")));
  };

  return (
    <D3Chart
      width={chartWidth}
      height={chartHeight}
      margin={margin}
      drawChart={drawLineChart}
    />
  );
};

export default LineChart;
