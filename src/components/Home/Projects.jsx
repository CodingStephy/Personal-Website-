import React from "react";
import { Fade } from "react-reveal";
import projects from "../../data/projects";
import ProjectCard from "../../utils/ProjectCard";
import Wave from "../../utils/Wave";

const Projects = () => {
  return (
    <section className="gradient py-5" id="projects">
      <Wave />
      <div className="py-5 mt-5">
        <div className="text-center py-3">
          <h1 className="text-center pb-2 display-4 section-title text-white">
            Projects
          </h1>
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row">
            {projects.map((project, index) => {
              return (
                <div className="col-lg-4 col-md-6 py-2 overflow-hidden">
                  <ProjectCard key={index} {...project} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
