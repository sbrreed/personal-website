function CreateMapAndDots(
  mapData,
  familyData,
  generator,
  projection,
  svg,
  setShowDetails,
  setSelectedPerson
) {
  // Draw the NewEngland map
  svg
    .append("g")
    .attr("class", "states")
    .selectAll("path")
    .data(mapData)
    .enter()
    .append("path")
    .attr("d", (d) => generator(d))
    .attr("fill", "#d3d3d3")
    .attr("stroke", "#333");

  svg
    .append("g")
    .attr("class", "dots")
    .selectAll("circle")
    .data(familyData)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
      const [longitude, latitude] = projection([d.longitude, d.latitude]);
      return longitude;
    })
    .attr("cy", (d) => {
      const [longitude, latitude] = projection([d.longitude, d.latitude]);
      return latitude;
    })
    .attr("r", 9)
    .on("mouseover", (event, d) => {
      setShowDetails(true);
      setSelectedPerson(d);
    })
    .on("mouseout", (event, d) => {
      setShowDetails(false);
      setSelectedPerson(null);
    });

  return svg;
}

export default CreateMapAndDots;
