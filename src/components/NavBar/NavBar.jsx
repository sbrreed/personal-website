import { useState } from "react";

function NavBar({ setPortfolioType, portfolioType }) {
  const [activeButton, setActiveButton] = useState(null);
  if (!activeButton) setActiveButton(portfolioType);

  const handleButtonClick = (type) => {
    setPortfolioType(type);
    setActiveButton(type);
  };

  return (
    <div className="portfolio-navBar">
      <div className="portfolio-navBar-content">
        <button
          id="portfolio-navBar-dataViz"
          onClick={() => handleButtonClick("DataViz")}
          className={activeButton === "DataViz" ? "active" : ""}
        >
          Data Visualization
        </button>
        <button
          id="portfolio-navBar-mechEng"
          onClick={() => handleButtonClick("MechEng")}
          className={activeButton === "MechEng" ? "active" : ""}
        >
          Mechanical Engineering
        </button>
        <button
          id="portfolio-navBar-wood"
          onClick={() => handleButtonClick("Wood")}
          className={activeButton === "Wood" ? "active" : ""}
        >
          Wood
        </button>
      </div>
    </div>
  );
}

export default NavBar;
