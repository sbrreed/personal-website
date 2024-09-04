import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const D3Chart = ({ width, height, margin, drawChart }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    drawChart(svg);

    // Cleanup function to remove the chart when the component unmounts
    return () => {
      d3.select(svgRef.current).selectAll("*").remove();
    };
  }, [drawChart, height, margin, width]);

  return <svg ref={svgRef}></svg>;
};

export default D3Chart;
