import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import Papa from "papaparse";

function App() {
  const [page, setPage] = useState("home");
  const [portfolioType, setPortfolioType] = useState("DataViz");
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    fetchportfolioData();
  }, [page]);

  const fetchportfolioData = async () => {
    const dataFilePath = "/portfolio_data.csv";
    const result = await fetch(dataFilePath);
    const csvFile = await result.text();
    // Parse the CSV and save data to store
    await new Promise((resolve) => {
      Papa.parse(csvFile, {
        header: true,
        complete: ({ data }) => {
          setPortfolioData(data);
          resolve();
        },
      });
    });
  };

  return (
    <>
      <Header setPage={setPage} />
      <>
        {page == "portfolio" && (
          <div className="portfolioPage">
            <NavBar
              setPortfolioType={setPortfolioType}
              portfolioType={portfolioType}
            />
            <Portfolio
              portfolioType={portfolioType}
              portfolioData={portfolioData}
            />
          </div>
        )}
        {page == "home" && (
          <div className="homePage">
            <div className="homePageContent">
              <div className="introduction">
                <p>
                  Hello! I am a data visualization consultant. I've been a
                  mechanical engineer, woodworker, teacher and student, but
                  through it all I have been <i>curious</i>. I'm driven by a
                  love for learning and building.{" "}
                </p>
                <p>
                  My career, in it's many iterations, has always been guided by
                  the question:{" "}
                  <span className="homeTextQuestion">
                    How can the tools and resources my clients and I have be
                    used to achieve our goals?
                  </span>
                </p>
                <p>
                  In data viz we add the question:{" "}
                  <span className="homeTextQuestion">
                    What is the most important information that this data can
                    tell us?
                  </span>{" "}
                  We are story-tellers with a unique story-telling medium.
                </p>
              </div>
              <img
                className="profilePicture"
                src="/profile_picture.jpeg"
                alt="Sarah Reed"
              />
            </div>
          </div>
        )}
        {page == "resume" && (
          <a href="/2024_08_15_SReed_Resume.pdf" target="_blank">
            <img
              className="resume"
              src="/2024_08_15_SReed_Resume.jpg"
              alt="Sarah Reed Resume"
            />
          </a>
        )}
      </>
      <Footer />
    </>
  );
}

export default App;
