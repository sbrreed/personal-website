import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="portfolio-navBar">
      <div className="portfolio-navBar-content">
        <NavLink
          id="portfolio-navBar-dataViz"
          to="/portfolio/DataViz"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Data Visualization
        </NavLink>
        <NavLink
          id="portfolio-navBar-mechEng"
          to="/portfolio/MechEng"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Mechanical Engineering
        </NavLink>
        <NavLink
          id="portfolio-navBar-wood"
          to="/portfolio/Wood"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Wood
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
