import { useState } from "react";

function Header({ setPage }) {
  const [active, setActive] = useState("home");
  function handleButtonClick(page) {
    setPage(page);
    setActive(page);
  }
  return (
    <header className="App-header">
      <div className="nameTag">
        <button id="header-nameTag" onClick={() => handleButtonClick("home")}>
          {" "}
          Sarah Reed{" "}
        </button>
      </div>
      <div className="header-navBar">
        <button
          id="header-navBar-home"
          onClick={() => handleButtonClick("home")}
          className={active == "home" ? "active" : ""}
        >
          HOME
        </button>
        <button
          id="header-navBar-portfolio"
          onClick={() => handleButtonClick("portfolio")}
          className={active == "portfolio" ? "active" : ""}
        >
          PORTFOLIO
        </button>
        <button
          id="header-navBar-resume"
          onClick={() => handleButtonClick("resume")}
          className={active == "resume" ? "active" : ""}
        >
          RESUME
        </button>
      </div>
    </header>
  );
}

export default Header;
