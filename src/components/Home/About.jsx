import React from "react";
import { Fade, Roll, Zoom } from "react-reveal";
const About = () => {
  return (
    <section
      className="py-5 d-flex justify-content-center align-items-center"
      id="about"
    >
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-5">
            <Zoom>
              <img
                style={{ maxWidth: 300 }}
                className="w-100 rounded-3 shadow d-block mx-auto"
                src="https://res.cloudinary.com/dt5zbnwvr/image/upload/v1626106831/1322815307_xrlyfz.jpg"
                alt="Stephanie Liu"
              />
            </Zoom>
          </div>
          <div className="col-lg-7 py-3 overflow-hidden d-flex justify-content-center align-items-center flex-column">
            <div className="w-100">
              <Fade left cascade>
                <h1 className="display-3 great-vibes fw-bold section-title">
                  Hi,
                </h1>
              </Fade>
            </div>
            <div className="w-100">
              <h1 className="fw-bold">
                <span>I am </span>
                <Roll top cascade>
                  <span className="great-vibes fw-normal d-inline-flex justify-content-center align-items-center">
                    Stephanie Liu!
                  </span>
                </Roll>
              </h1>
            </div>
            <Fade left>
              <div className="w-100">
                <p>
                  Although coming from a humanities-focused background, I have
                  always been passionate about technologies and hope to explore
                  the intersection of technology, humanities and art. <br></br>
                  <br></br>
                  Therefore, I am learning to code and training to be a Front-end web developer & Product designer.<br></br>
                  <br></br>
                  If you would like to learn more about me, please follow me on
                  my journey...
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
