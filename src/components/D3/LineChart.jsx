import * as d3 from "d3";
import D3Chart from "./D3Chart";
import { useEffect } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const LineChart = ({ data, investmentHistory, resetChart, setResetChart }) => {
  const { windowWidth } = useWindowDimensions();
  const chartHeight = 500;
  const chartWidth = windowWidth * 0.65;
  let margin = { top: 20, right: 30, bottom: 30, left: 100 };
  if (windowWidth < 1000) {
    margin = {
      top: 20,
      right: windowWidth * 0.01,
      bottom: 30,
      left: windowWidth * 0.15,
    };
  }

  useEffect(() => {
    const svg = d3.select("#chart-svg");

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

  useEffect(() => {
    const svg = d3.select("#chart-svg");

    // If resetChart is true, remove lines and smoothly update the axes
    if (resetChart) {
      svg.selectAll(".line-path").remove();
      svg.selectAll(".dot").remove();

      // Smoothly update the x and y axes
      updateAxes(svg);

      drawLineChart(svg); // Redraw the chart with new data
      setResetChart(false); // Reset the flag
    } else {
      drawLineChart(svg); // Draw additional lines without resetting axes
    }
  }, [data, resetChart]);

  const updateAxes = (svg) => {
    const x_axis_values = data.map((d) => d.age);
    const allValues = data.flatMap((d) =>
      Object.keys(d)
        .filter((key) => key.startsWith("value"))
        .map((key) => d[key])
    );

    const x = d3
      .scalePoint()
      .domain(x_axis_values)
      .range([0, chartWidth - margin.left - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, Math.max(...allValues)])
      .range([chartHeight - margin.top - margin.bottom, 0]);

    // Update x-axis with smooth transition
    svg
      .select(".x-axis")
      .transition()
      .duration(750)
      .call(
        d3.axisBottom(x).tickValues(x_axis_values.filter((d) => d % 5 === 0))
      );

    // Update y-axis with smooth transition
    svg
      .select(".y-axis")
      .transition()
      .duration(750)
      .call(d3.axisLeft(y).tickFormat(d3.format("$,d")));
  };

  const drawLineChart = (svg) => {
    if (!data || data.length === 0) {
      return;
    }

    const x_axis_values = data.map((d) => d.age);
    const allValues = data.flatMap((d) =>
      Object.keys(d)
        .filter((key) => key.startsWith("value"))
        .map((key) => d[key])
    );

    const x = d3
      .scalePoint()
      .domain(x_axis_values)
      .range([0, chartWidth - margin.left - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, Math.max(...allValues)])
      .range([chartHeight - margin.top - margin.bottom, 0]);

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

    const tooltip = d3.select(".tooltip");

    const numLines = Object.keys(data[0]).filter((key) =>
      key.startsWith("value")
    ).length;

    for (let i = 1; i <= numLines; i++) {
      const investment = investmentHistory[i - 1];
      const line = d3
        .line()
        .x((d) => x(d.age))
        .y((d) => y(d[`value${i}`]));

      svg
        .append("g")
        .selectAll(`.dot-${i}`)
        .data(data)
        .enter()
        .append("circle")
        .attr("class", `dot dot-${i}`)
        .attr("fill", color[i % color.length])
        .attr("stroke", color[i % color.length])
        .attr("stroke-width", 1.5)
        .attr("r", 3)
        .attr("cx", (d) => x(d.age))
        .attr("cy", (d) => y(d[`value${i}`]))
        .on("mouseover", function (event, d) {
          const value = d[`value${i}`];
          const dotValue = d3.format("$,")(Math.round(value));
          const totalContrib = d3.format("$,")(
            investment.annualContribution * (+d.age - x_axis_values[0])
          );
          tooltip
            .style("visibility", "visible")
            .html(
              `<span className = 'prop'>Age:</span> ${d.age}<br>
              <span className = 'prop'>Value:</span>  ${dotValue}<br>
              <span className = 'prop'>Initial:</span>  $${investment.initialInvestment}<br>
              <span className = 'prop'>Annual:</span>  $${investment.annualContribution}<br>
              <span className = 'prop'>Total Contribution:</span>  ${totalContrib}<br>`
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
        .attr("class", "line-path")
        .attr("fill", "none")
        .attr("stroke", color[i % color.length])
        .attr("stroke-width", 1.5)
        .attr("d", line)
        .style("opacity", 0)
        .transition()
        .duration(750)
        .style("opacity", 1); // Fade in effect for lines

      // Handle the last dot for each line and place labels
      const dots = d3.selectAll(`.dot-${i}`).nodes();
      const lastDot = dots[dots.length - 1];
      const cx = d3.select(lastDot).attr("cx");
      const cy = d3.select(lastDot).attr("cy");

      svg
        .append("foreignObject")
        .attr("x", windowWidth > 400 ? +cx + 10 : +cx - 80)
        .attr("y", cy - 10)
        .attr("width", 100)
        .attr("height", 80)
        .append("xhtml:div")
        .attr("class", "investment-label")
        .style("font-size", "12px")
        .style("color", color[i % color.length])
        .style("background-color", "white")
        .style("padding", "0")
        .html(
          `<p>Initial: $${investment.initialInvestment} <br>Annual: $${investment.annualContribution}</p>`
        );
    }

    // Add x-axis
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${chartHeight - margin.bottom})`)
      .call(
        d3.axisBottom(x).tickValues(x_axis_values.filter((d) => d % 5 === 0))
      );

    // Add x-axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", chartWidth / 2 - margin.left)
      .attr("y", chartHeight + margin.bottom / 2)
      .text("Age");

    // Add y-axis
    svg
      .append("g")
      .attr("class", "y-axis")
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
