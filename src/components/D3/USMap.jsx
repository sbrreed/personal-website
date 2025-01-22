import { useEffect, useState } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";
import D3Chart from "./D3Chart";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CreateMapAndDots from "./CreateMapAndDots";

const USMap = ({ data }) => {
  console.log("renddering USMap");
  const { windowWidth, windowHeight } = useWindowDimensions();

  const { familyData, usMapData } = data;

  const [geoJsonMap, setGeoJsonMap] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [showNewEngland, setShowNewEngland] = useState(false);
  const [showNational, setShowNational] = useState(true);
  const [showMass, setShowMass] = useState(false);

  const handleNewEnglandButtonClick = () => {
    setShowNewEngland(!showNewEngland);
  };

  const handleMassButtonClick = () => {
    setShowMass(!showMass);
  };

  const nationalHeight = windowHeight * 0.9;
  const nationalWidth = windowWidth * 0.95;
  const margin = { top: 10, right: 10, bottom: 0, left: 10 };
  const regionsToExclude = [
    "Alaska",
    "Hawaii",
    "Puerto Rico",
    "United States Virgin Islands",
    "Guam",
    "American Samoa",
    "Commonwealth of the Northern Mariana Islands",
  ];

  const newEnglandInsetRegionsToInclude = [
    "Connecticut",
    "Maine",
    "Massachusetts",
    "New Hampshire",
    "Rhode Island",
    "Vermont",
    "New York",
    "New Jersey",
  ];

  // Projections for the maps
  const nationalProjection = d3
    .geoAlbers()
    .scale(1700)
    .translate([nationalWidth / 2, nationalHeight / 2 - 80]);

  let nationalGeoGenerator = d3.geoPath().projection(nationalProjection);

  const newEnglandProjection = d3
    .geoAlbers()
    .scale(3800)
    .translate([(1 / nationalWidth) * -1000000 + 400, nationalHeight - 150]);

  let newEnglandGeoGenerator = d3.geoPath().projection(newEnglandProjection);

  const massProjection = d3
    .geoAlbers()
    .scale(12000)
    .translate([(1 / nationalWidth) * -1000000 - 2300, nationalHeight + 700]);

  let massGeoGenerator = d3.geoPath().projection(massProjection);

  // Convert TopoJSON to GeoJSON once the usMapData is loaded
  useEffect(() => {
    if (usMapData) {
      const geoJson = topojson.feature(usMapData, usMapData.objects.states); // Convert TopoJSON to GeoJSON
      setGeoJsonMap(geoJson);
    }
  }, [usMapData]);

  let newEnglandData = geoJsonMap?.features.filter((d) => {
    return newEnglandInsetRegionsToInclude.includes(d.properties.name);
  });

  let massachusettsData = geoJsonMap?.features.filter((d) => {
    return d.properties.name === "Massachusetts";
  });

  const drawNationalMap = (svg) => {
    if (!geoJsonMap) return; // Wait until GeoJSON map is available
    const nationalData = geoJsonMap?.features.filter((d) => {
      return !regionsToExclude.includes(d.properties.name);
    });
    // Draw the US map
    CreateMapAndDots(
      nationalData,
      familyData,
      nationalGeoGenerator,
      nationalProjection,
      svg,
      setShowDetails,
      setSelectedPerson
    );

    if (showNewEngland) {
      svg.style("opacity", 0.2);
    }
  };
  const drawNewEnglandMap = (svg) => {
    if (!geoJsonMap) return; // Wait until GeoJSON map is available

    const newEnglandFamilyData = familyData.filter((d) =>
      newEnglandInsetRegionsToInclude.includes(d.State)
    );

    CreateMapAndDots(
      newEnglandData,
      newEnglandFamilyData,
      newEnglandGeoGenerator,
      newEnglandProjection,
      svg,
      setShowDetails,
      setSelectedPerson
    );

    if (showMass) {
      svg.style("opacity", 0.2);
    }
  };

  const drawMassMap = (svg) => {
    if (!geoJsonMap) return; // Wait until GeoJSON map is available

    const massFamilyData = familyData.filter(
      (d) => d.State === "Massachusetts"
    );

    CreateMapAndDots(
      massachusettsData,
      massFamilyData,
      massGeoGenerator,
      massProjection,
      svg,
      setShowDetails,
      setSelectedPerson
    );
  };

  return (
    <>
      <D3Chart
        width={nationalWidth}
        height={nationalHeight}
        margin={margin}
        drawChart={drawNationalMap}
        ID={"nationalMap"}
      />
      {showNewEngland && (
        <D3Chart
          width={nationalWidth}
          height={nationalHeight}
          margin={margin}
          drawChart={drawNewEnglandMap}
          ID={"newEnglandMap"}
        />
      )}
      {showMass && showNewEngland && (
        <D3Chart
          width={nationalWidth}
          height={nationalHeight}
          margin={margin}
          drawChart={drawMassMap}
          ID={"massMap"}
        />
      )}
      <div className="showNewEnglandButton">
        <button onClick={() => handleNewEnglandButtonClick()}>
          {showNewEngland ? "Hide New England" : "Zoom in on New England"}
        </button>
      </div>
      {showNewEngland && (
        <div className="showMassButton">
          <button onClick={() => handleMassButtonClick()}>
            {showMass ? "Hide Massachusetts" : "Zoom in on Massachusetts"}
          </button>
        </div>
      )}
      {showDetails && selectedPerson && (
        <div className="detailPane">
          <div>
            <p>
              Family tree for {selectedPerson.First} {selectedPerson.Last}
            </p>
          </div>
          <img src={selectedPerson.TreeImage} alt={selectedPerson.First} />
        </div>
      )}
    </>
  );
};

export default USMap;

// function handleOverlap(event, d, action, familyData, svg) {
//   // console.log("d", d);
//   // console.log("event", event.currentTarget);
//   console.log("event", event.x);
//   let overlapping = familyData.filter(
//     (person) =>
//       person.longitude === d.longitude &&
//       person.latitude === d.latitude &&
//       person.First !== d.First
//   );
//   if (overlapping.length > 0) {
//     overlapping.push(d);
//     console.log("overlapping", overlapping);
//     svg
//       .append("g")
//       .attr("class", "multi-dot-text")
//       .selectAll("text")
//       .data(overlapping)
//       .enter()
//       .append("text")
//       .text((j) => {
//         return j.First;
//       })
//       .attr("nationalHeight", 20)
//       .attr("nationalWidth", 50)
//       .attr("x", event.x)
//       .attr("y", (j, i) => {
//         console.log("j", j);
//         console.log("i", i);
//         return event.y + i * 10;
//       })
//       .attr("fill", "black")
//       .attr("font-size", "12px");
//   }
// }
