import Card from "./Card";
import Modal from "../../Modal/Modal";
import Articles from "../../Articles/Articles";
import getFilteredWorkData from "../../../sharedTools/getFilteredWorkData";
import { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import { useLoaderData, useSearchParams } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import FetchWorkData from "../../../sharedTools/getFetchWorkData";
import useModalClose from "../../../hooks/useModalClose";

export async function loader({ params }) {
  const workType = params.workType;
  return { workType };
}

function Work() {
  const { workType } = useLoaderData();
  const [searchParams] = useSearchParams();
  const project = searchParams.get("project");
  const modalRef = useRef();

  // get all the necessary data
  const [workData, setWorkData] = useState([]);

  useEffect(() => {
    async function loadData() {
      const data = await FetchWorkData();
      setWorkData(data);
    }
    loadData();
  }, []);

  // Filter the data based on the work type
  const filteredWorkData = getFilteredWorkData({
    data: workData,
    workType,
  });

  // Filter the data based on the type of project
  const professionalDataVizData = filteredWorkData.filter(
    (item) => item.Type == "Professional"
  );
  const personalDataVizData = filteredWorkData.filter(
    (item) => item.Type == "Personal"
  );

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState([null]);

  // If the project is in the URL, open the modal
  useEffect(() => {
    if (project && filteredWorkData.length > 0) {
      const foundProject = filteredWorkData.find(
        (item) => item.URL_Title === project
      );
      setSelectedProject(foundProject || null);
      setModalIsOpen(!!foundProject);
    }
  }, [project, filteredWorkData]);

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
  useModalClose(modalIsOpen, closeModal, modalRef, workType);

  return (
    <>
      <NavBar />
      <div className={modalIsOpen ? "work modalOpen" : "work"}>
        {workType != "Wood" && (
          <div className="work-intro">
            <p>Click on a card to learn more about the project</p>
          </div>
        )}
        {workType == "DataViz" && (
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
                      workType={workType}
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
                    item.ShowHide != "Hide" && (
                      <Card
                        key={`card_${item.Title}`}
                        item={item}
                        style={{ animationDelay: `${index * 0.3}s` }}
                        onClick={() => openModal(item)}
                        workType={workType}
                      />
                    )
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="work-container">
          {workType != "DataViz" &&
            filteredWorkData.map((item, index) => {
              return (
                <Card
                  key={`card_${index}`}
                  item={item}
                  style={{ animationDelay: `${index * 0.3}s` }}
                  onClick={() => openModal(item)}
                  workType={workType}
                />
              );
            })}
        </div>
        {modalIsOpen &&
          selectedProject &&
          project != undefined &&
          workType != "Wood" && (
            <div ref={modalRef}>
              <Modal onClose={closeModal} workType={workType}>
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
                      {workType == "DataViz" && (
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

export default Work;