import { useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="App-header">
      <div className="nameTag">
        <NavLink id="header-nameTag" to="/">
          {" "}
          Sarah Reed{" "}
        </NavLink>
      </div>
      <div className="header-navBar">
        <NavLink
          id="header-navBar-home"
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          HOME
        </NavLink>
        <NavLink
          id="header-navBar-work"
          to={"/work/DataViz"}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          WORK
        </NavLink>
        <NavLink
          id="header-navBar-resume"
          to={"/resume"}
          className={({ isActive, isPending }) =>
            isActive ? "active" : isPending ? "pending" : ""
          }
        >
          RESUME
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
