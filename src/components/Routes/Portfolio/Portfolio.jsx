import Card from "./Card";
import Modal from "../../Modal/Modal";
import Articles from "../../Articles/Articles";
import getFilteredPortfolioData from "../../../sharedTools/getFilteredPortfolioData";
import { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import { useLoaderData, useSearchParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import FetchPortfolioData from "../../../sharedTools/getFetchPortfolioData";
import useModalClose from "../../../hooks/useModalClose";

export async function loader({ params }) {
  const portfolioType = params.portfolioType;
  return { portfolioType };
}

function Portfolio() {
  const { portfolioType } = useLoaderData();
  const [searchParams] = useSearchParams();
  const project = searchParams.get("project");
  const modalRef = useRef();

  // get all the necessary data
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await FetchPortfolioData();
      setPortfolioData(data);
    }
    loadData();
  }, []);

  // Filter the data based on the portfolio type
  const filteredPortfolioData = getFilteredPortfolioData({
    data: portfolioData,
    portfolioType,
  });

  // Filter the data based on the type of project
  const professionalDataVizData = filteredPortfolioData.filter(
    (item) => item.Type == "Professional"
  );
  const personalDataVizData = filteredPortfolioData.filter(
    (item) => item.Type == "Personal"
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState([null]);

  // If the project is in the URL, open the modal
  useEffect(() => {
    if (project && filteredPortfolioData.length > 0) {
      const foundProject = filteredPortfolioData.find(
        (item) => item.URL_Title === project
      );
      setSelectedProject(foundProject || null);
      setModalIsOpen(!!foundProject);
    }
  }, [project, filteredPortfolioData]);

  const openModal = (item) => {
    setSelectedProject(item);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  // Prevent scrolling when the modal is open
  useEffect(() => {
    if (modalIsOpen && project != undefined) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [modalIsOpen]);

  // Custom hook to handle all modal closing (clicking outside, pressing escape key, etc.)
  useModalClose(modalIsOpen, closeModal, modalRef, portfolioType);

  return (
    <>
      <NavBar />
      <div className={modalIsOpen ? "portfolio modalOpen" : "portfolio"}>
        {portfolioType != "Wood" && (
          <div className="portfolio-intro">
            <p>Click on a card to learn more about the project</p>
          </div>
        )}
        {portfolioType == "DataViz" && (
          <div className="data-viz-container">
            <div className="professional-data-viz">
              <h2>Professional Work</h2>
              <div className="data-viz-group">
                {professionalDataVizData.map((item, index) => {
                  return (
                    <Card
                      key={`card_${item.Title}`}
                      item={item}
                      style={{ animationDelay: `${index * 0.3}s` }}
                      onClick={() => openModal(item)}
                      portfolioType={portfolioType}
                    />
                  );
                })}
              </div>
            </div>
            <div className="personal-data-viz">
              <h2>Articles and Personal Projects</h2>
              <div className="data-viz-group">
                {personalDataVizData.map((item, index) => {
                  return (
                    <Card
                      key={`card_${item.Title}`}
                      item={item}
                      style={{ animationDelay: `${index * 0.3}s` }}
                      onClick={() => openModal(item)}
                      portfolioType={portfolioType}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="portfolio-container">
          {portfolioType != "DataViz" &&
            filteredPortfolioData.map((item, index) => {
              return (
                <Card
                  key={`card_${index}`}
                  item={item}
                  style={{ animationDelay: `${index * 0.3}s` }}
                  onClick={() => openModal(item)}
                  portfolioType={portfolioType}
                />
              );
            })}
        </div>
        {modalIsOpen &&
          selectedProject &&
          project != undefined &&
          portfolioType != "Wood" && (
            <div ref={modalRef}>
              <Modal onClose={closeModal} portfolioType={portfolioType}>
                <h1 className="modal-title">{selectedProject.Title}</h1>
                {selectedProject.ModalText == "Article" && (
                  <Articles
                    topic={selectedProject.Title}
                    articleDataPath={selectedProject.ArticleDataPath}
                  />
                )}
                {selectedProject.ModalText != "Article" && (
                  <div className="modal-description-image">
                    <div className="modal-image-tech">
                      {selectedProject.ModalImageType == "Video" && (
                        // The ModalImage has to be a vimeo link in this case.
                        <iframe
                          src={selectedProject.ModalImage}
                          width="640"
                          height="360"
                          frameborder="0"
                          webkitallowfullscreen
                          mozallowfullscreen
                          allowfullscreen
                        ></iframe>
                      )}
                      <a href={selectedProject.LinkToProject} target="_blank">
                        {selectedProject.ModalImageType == "Image" && (
                          <img
                            src={selectedProject.ModalImage}
                            alt={selectedProject.Title}
                          />
                        )}
                      </a>
                      {portfolioType == "DataViz" && (
                        <div className="modal-technologies">
                          <p>
                            <b>Technologies:</b>{" "}
                            {selectedProject.Technologies.split(",").map(
                              (item, index) => {
                                if (
                                  index !=
                                  selectedProject.Technologies.split(",")
                                    .length -
                                    1
                                ) {
                                  return (
                                    <span key={`tech_${index}`}>{item}, </span>
                                  );
                                } else {
                                  return (
                                    <span key={`tech_${index}`}>{item} </span>
                                  );
                                }
                              }
                            )}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="modal-description">
                      {selectedProject.ModalText.split("<br>").map(
                        (item, index) => {
                          return <p key={`modalText_${index}`}>{item}</p>;
                        }
                      )}

                      <p>
                        <b>Roles and Responsibilites: </b>
                      </p>
                      <ul>
                        {selectedProject.RolesAndResponsibilities.split(
                          ","
                        ).map((item, index) => {
                          return index ==
                            selectedProject.RolesAndResponsibilities.split(",")
                              .length -
                              1 ? (
                            <li key={`roles_${index}`}>{item}</li>
                          ) : (
                            <li key={`roles_${index}`}>{item}</li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}
              </Modal>
            </div>
          )}
      </div>
    </>
  );
}

export default Portfolio;
