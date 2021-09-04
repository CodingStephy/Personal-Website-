import { Paper } from "@material-ui/core";
import React from "react";
import { Fade, Rotate } from "react-reveal";
import timeline from "../../data/timeline";
import Wave from "../../utils/Wave";

const Timeline = () => {
  return (
    <section className="py-5 gradient" id="timeline">
      <Wave />
      <div className="text-center">
        <h1 className="display-4 pb-3 text-center mb-4 section-title text-white mt-5 pt-5">
          My Timeline
        </h1>
      </div>
      <div className="container" style={{ maxWidth: 680 }}>
        <div className="timeline">
          {timeline.map((item) => (
            <Paper
              className={`timeline-container bg-transparent text-white ${item.name}`}
              key={item.name}
            >
              <Paper className="timeline-icon text-white">
                <i className={`fas fa-${item.icon}`} />
              </Paper>
              <div className="overflow-hidden">
                <Fade left>
                  <div className="timeline-body">
                    <h4 className="timeline-title">
                      <Paper
                        component="span"
                        className="badge righteous text-white"
                      >
                        {item.title}
                      </Paper>
                    </h4>
                    <p>{item.para}</p>
                    <p className="timeline-subtitle" />
                  </div>
                </Fade>
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
