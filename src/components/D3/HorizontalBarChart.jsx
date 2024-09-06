import * as d3 from "d3";
import D3Chart from "./D3Chart";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const HorizontalBarChart = ({ data, options }) => {
  const barHeight = 20;
  const { windowHeight, windowWidth } = useWindowDimensions();
  const chartHeight = data.length * barHeight;
  const chartWidth = windowWidth < 1000 ? windowWidth * 0.7 : 400;
  let margin = { top: 20, right: 300, bottom: 50, left: 140 };
  if (windowWidth < 1000) {
    margin = { top: 40, right: 20, bottom: 50, left: 20 };
  }

  const { y_axis_labels } = options;

  const drawHorizontalBarChart = (svg) => {
    const totals = data.filter((d) => d.Symbol === "TOTAL");
    let dataCopy = data.map((d) => ({ ...d }));
    dataCopy.splice(-2, 2);
    const stockNames = dataCopy.map((d) => `${d[y_axis_labels]}`);

    // Set up scales
    const y = d3
      .scaleBand()
      .domain(stockNames)
      .range([0, chartHeight])
      .padding(0.1);
    const x = d3.scaleLinear().domain([0, 4]).range([0, chartWidth]);

    // Remove any existing group to avoid duplication
    svg.selectAll(".bar-g").remove();

    // Create a new g element for the bars
    const barGroup = svg.append("g").attr("class", "bar-g");
    // Join the data to the existing bars, and update only the necessary attributes
    const bars = barGroup
      .selectAll("rect")
      .data(dataCopy, (d) => `${d[y_axis_labels]}`);

    // Enter new bars
    bars
      .enter()
      .append("rect")
      .attr("class", "stock-bar-chart-bar")
      .attr("x", 0)
      .attr("y", (d) => y(`${d[y_axis_labels]}`))
      .attr("height", y.bandwidth())
      .attr("width", (d) => x(d.NumberofShares)); // Set initial width to the new data value

    // Add y-axis
    svg
      .append("g")
      .attr("class", "y-axis")
      .call(d3.axisLeft(y).tickSize(0))
      .selectAll("text")
      .attr("dy", 5)
      .attr("fill", windowWidth < 1000 ? "white" : "black")
      .attr("dx", windowWidth < 1000 ? 10 : 0)
      .attr("text-anchor", windowWidth < 1000 ? "start" : "end");

    // Add y-axis label
    // svg
    //   .append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("y", -margin.left)
    //   .attr("x", -chartHeight / 2)
    //   .attr("class", "y-axis-label")
    //   .attr("dy", "1em")
    //   .style("text-anchor", "middle")
    //   .text("Stock Names");

    // Add x-axis
    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(x).ticks(4));

    // Add x-axis label
    svg
      .append("text")
      .attr("y", chartHeight + 30)
      .attr("x", chartWidth / 2)
      .attr("class", "x-axis-label")
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Number of Shares (or fractional shares)");

    // Add performance text
    svg
      .append("text")
      .attr(
        "x",
        windowWidth < 1000 ? chartWidth / 2 : chartWidth + margin.left + 5
      )
      .attr("y", windowWidth < 1000 ? 0 - margin.top / 2 : chartHeight / 2)
      .attr(
        "class",
        totals[0].Diff_Times_Mult > 0
          ? "bar-chart-total-text positive"
          : "bar-chart-total-text negative"
      )
      .attr("text-anchor", "middle")
      .attr("font-size", "1.5em")
      .text(`Total return: $${totals[0].Diff_Times_Mult}`);
  };

  return (
    <D3Chart
      width={chartWidth}
      height={chartHeight}
      margin={margin}
      drawChart={drawHorizontalBarChart}
    />
  );
};

export default HorizontalBarChart;
