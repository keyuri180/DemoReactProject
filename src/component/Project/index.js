import React, { useState } from "react";
import data from "../../data.json";
import Photo from "./Photo.js";
import "./Project.scss";
import { Button } from "react-bootstrap";

const Project = () => {
  const [selectedType, setSelectedType] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filteredData =
    selectedType === "All"
      ? data
      : data.filter((item) => item.type === selectedType);

  const totalPages = Math.ceil(filteredData.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const filterDataByType = (type) => {
    setSelectedType(type);
    setCurrentPage(1); 
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="project-main-container">
      <div>
        <h1>Projects</h1>
        <ul>
          <li onClick={() => filterDataByType("All")}>All</li>
          <li onClick={() => filterDataByType("commercial")}>Commercial</li>
          <li onClick={() => filterDataByType("residential")}>Residential</li>
          <li onClick={() => filterDataByType("other")}>Other</li>
        </ul>
      </div>

      <div className="main-container-box">
        <div className="project-grid-box">
          {currentProjects.length > 0 &&
            <>
              {currentProjects.map((item, i) => <Photo data={item} key={i} />)}

            </>
          }
        </div>
        {selectedType === "All" && (
          <div className="pagination">
            <Button
              className="btn"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button
              className="btn"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </div>
   
    </div>
  );
};

export default Project;
