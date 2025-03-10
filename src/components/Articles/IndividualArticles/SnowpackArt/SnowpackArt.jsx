import { useState } from "react";
import GetScreenSizeWarning from "../../../../sharedTools/GetScreenSizeWarning";

function SnowpackArt() {
  const [MtbakerVisibility, setMtbakerVisibility] = useState("block");
  const [SteamboatVisibility, setSteamboatVisibility] = useState("block");
  const [SnowbirdVisibility, setSnowbirdVisibility] = useState("block");
  const [RevelstokeVisibility, setRevelstokeVisibility] = useState("block");
  const [PowderhornVisibility, setPowderhornVisibility] = useState("block");
  const [WinterparkVisibility, setWinterparkVisibility] = useState("block");

  const toggleVisibility = (setVisibility) => {
    setVisibility((prevVisibility) =>
      prevVisibility === "none" ? "block" : "none"
    );
  };

  const windowWidth = window.innerWidth;
  console.log(windowWidth);

  return (
    <div className="article snowPackArt fullScreen singlePage">
      {windowWidth < 1000 && <GetScreenSizeWarning />}
      <div className="snowPackArt_container">
        <div className="chart">
          <img src="/DataViz/snowpackArt/PNG/MtnBackground.png"></img>
          <img src="/DataViz/snowpackArt/PNG/semi-transparent_layer.png"></img>
          <img src="/DataViz/snowpackArt/PNG/Axes.png"></img>
          <img
            className="mountain"
            style={{ display: MtbakerVisibility }}
            src="/DataViz/snowpackArt/PNG/MtBaker_Contours.png"
          ></img>
          <img
            className="mountain"
            style={{ display: SteamboatVisibility }}
            src="/DataViz/snowpackArt/PNG/Steamboat_Contours.png"
          ></img>
          <img
            className="mountain"
            style={{ display: SnowbirdVisibility }}
            src="/DataViz/snowpackArt/PNG/Snowbird_Contours.png"
          ></img>
          <img
            className="mountain"
            style={{ display: RevelstokeVisibility }}
            src="/DataViz/snowpackArt/PNG/Revelstoke_Contours.png"
          ></img>
          <img
            className="mountain"
            style={{ display: PowderhornVisibility }}
            src="/DataViz/snowpackArt/PNG/Powderhorn_Contours.png"
          ></img>
          <img
            className="mountain"
            style={{ display: WinterparkVisibility }}
            src="/DataViz/snowpackArt/PNG/Winterpark_Contours.png"
          ></img>
        </div>
      </div>
      <div className="legend_container">
        <div className="legend">
          <p className="legend_extra_text">
            Click on an item to toggle visibility.
          </p>
          <a
            className="legend_item"
            onClick={() => toggleVisibility(setMtbakerVisibility)}
          >
            <div className="legend_color" id="mtbaker_color"></div>
            <p className="legend_text">Mt Baker</p>
          </a>
          <a
            className="legend_item"
            onClick={() => toggleVisibility(setSteamboatVisibility)}
          >
            <div className="legend_color" id="steamboat_color"></div>
            <p className="legend_text">Steamboat</p>
          </a>
          <a
            className="legend_item"
            onClick={() => toggleVisibility(setSnowbirdVisibility)}
          >
            <div className="legend_color" id="snowbird_color"></div>
            <p className="legend_text">Snowbird</p>
          </a>
          <a
            className="legend_item"
            onClick={() => toggleVisibility(setRevelstokeVisibility)}
          >
            <div className="legend_color" id="revelstoke_color"></div>
            <p className="legend_text">Revelstoke</p>
          </a>
          <a
            className="legend_item"
            onClick={() => toggleVisibility(setPowderhornVisibility)}
          >
            <div className="legend_color" id="powderhorn_color"></div>
            <p className="legend_text">Powderhorn</p>
          </a>
          <a
            className="legend_item"
            onClick={() => toggleVisibility(setWinterparkVisibility)}
          >
            <div className="legend_color" id="winterpark_color"></div>
            <p className="legend_text">Winterpark</p>
          </a>
          <p className="legend_extra_text">
            Notes: The upper contours of each mountain represent the Snow Water
            Equivalent (a measure of snowpack) at each year. The data was
            collected from individual{" "}
            <a href="https://www.wcc.nrcs.usda.gov/snow/" target="_blank">
              SNOTEL
            </a>{" "}
            sites near each mountain.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SnowpackArt;
