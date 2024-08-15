import Card from "./Card";
import Modal from "../Modal/Modal";
import Articles from "../Articles/Articles";
import getFilteredPortfolioData from "../../sharedTools/getFilteredPortfolioData";
import { useState, useEffect } from "react";

function Portfolio({ portfolioType, portfolioData }) {
  const filteredPortfolioData = getFilteredPortfolioData({
    data: portfolioData,
    portfolioType,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (item) => {
    setSelectedProject(item);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [modalIsOpen]);

  return (
    <div className={modalIsOpen ? "portfolio modalOpen" : "portfolio"}>
      {portfolioType != "Wood" && (
        <div className="portfolio-intro">
          <p>Click on a card to learn more about the project</p>
        </div>
      )}
      <div className="portfolio-container">
        {filteredPortfolioData.map((item, index) => {
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
      {modalIsOpen && selectedProject && portfolioType != "Wood" && (
        <Modal onClose={closeModal}>
          <h2>{selectedProject.Title}</h2>
          {selectedProject.ModalText == "Article" && (
            <Articles topic={selectedProject.Title} />
          )}
          {selectedProject.ModalText != "Article" && (
            <div className="modal-description-image">
              <div className="modal-image-tech">
                <a href={selectedProject.LinkToProject} target="_blank">
                  <img
                    src={selectedProject.Thumbnail}
                    alt={selectedProject.Title}
                  />
                </a>
                {portfolioType == "DataViz" && (
                  <div className="modal-technologies">
                    <p>
                      <b>Technologies:</b>{" "}
                      {selectedProject.Technologies.split(",").map(
                        (item, index) => {
                          return <span key={`tech_${index}`}>{item}, </span>;
                        }
                      )}
                    </p>
                  </div>
                )}
              </div>
              <div className="modal-description">
                {selectedProject.ModalText.split("<br>").map((item, index) => {
                  return <p key={`modalText_${index}`}>{item}</p>;
                })}

                <p>
                  <b>Roles and Responsibilites: </b>
                </p>
                <ul>
                  {selectedProject.RolesAndResponsibilities.split(",").map(
                    (item, index) => {
                      return index ==
                        selectedProject.RolesAndResponsibilities.split(",")
                          .length -
                          1 ? (
                        <li key={`roles_${index}`}>{item}</li>
                      ) : (
                        <li key={`roles_${index}`}>{item}</li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
}

export default Portfolio;
