import { Paper } from "@material-ui/core";
import React from "react";
import skills from "../../data/skills";
import Wave from "../../utils/Wave";
import { Reveal } from "react-reveal";

const Skills = () => {
  return (
    <section className="py-5 skills" id="skills">
      <Wave className=" wave-colored" />
      <div className="container py-5 my-5">
        <div className="col-12">
          <div className="text-center mb-4">
            <h1 className="text-center pb-2 display-4 section-title">Skills</h1>
          </div>
        </div>
        <Paper className="skill-bars w-100 row">
          {skills.map((el) => {
            return (
              <div className="col-lg-6">
                <div className="bar">
                  <div className="info">
                    <Reveal effect="info-show">
                      <span>
                        <b>{el.name}</b>
                      </span>
                    </Reveal>
                  </div>
                  <Reveal effect="animate-bar">
                    <div
                      className="progress-line"
                      style={{ "--percentage": el.percentage }}
                    >
                      <span data-percentage={`${el.percentage}%`}></span>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </Paper>
      </div>
    </section>
  );
};

export default Skills;
