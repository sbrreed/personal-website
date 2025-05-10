import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="work-navBar">
      <div className="work-navBar-content">
        <NavLink
          id="work-navBar-dataViz"
          to="/work/DataViz"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Data Visualization
        </NavLink>
        <NavLink
          id="work-navBar-mechEng"
          to="/work/MechEng"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Mechanical Engineering
        </NavLink>
        <NavLink
          id="work-navBar-fineArtWood"
          to="/work/FineArt"
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          Fine Art & Wood
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
