import React from "react";
import Wave from "../../utils/Wave";
import { ReactComponent as S } from "../../icon/icon.svg";
import { Fade, Zoom } from "react-reveal";
const Footer = () => {
  return (
    <footer className="bg-dark position-relative text-white py-5">
      <Wave />
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-lg-3">
            <Fade left>
              <h1>
                <span className="great-vibes">
                  <S width={28} fill="#fff" />
                  tephanie Liu
                </span>
              </h1>
            </Fade>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <div className="w-100 my-4" />
              <div className="col-lg-4 col-6 my-4">
                <h6 className="text-white-50 fw-bold">Start a Conversation</h6>
                <div>
                  <a
                    href="mailto:yliu04@uchicago.edu"
                    className="font-weight-bold text-white footer_link header_link active d-inline-block"
                    style={{ fontSize: "0.9rem" }}
                  >
                    yliu04@uchicago.edu
                  </a>
                </div>
                <div>
                  <a
                    href="tel:+14439951686"
                    className="font-weight-bold text-white footer_link header_link active d-inline-block"
                    style={{ fontSize: "0.9rem" }}
                  >
                    +1 443-995-1686
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-6 my-4">
                <h6 className="text-white-50 fw-bold">For More Information</h6>
                <div>
                  <a
                    href="/"
                    className="fw-bold text-white footer_link header_link active d-inline-block"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Portfolio
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-12 my-4">
                <div className="row text-white-50">
                  <div className="col-12">
                    <h6 className="fw-bold mb-4">Contact Me</h6>
                  </div>
                  <div className="w-100" />
                  <div className="col">
                    <a
                      href="https://github.com/CodingStephy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <i className="fab fa-github" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.linkedin.com/in/yuan-stephanie-liu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.instagram.com/stephyliu48/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="col">
                    <a
                      href="https://www.facebook.com/liu.stephanie.7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center pt-3 mb-0">Copyright &copy; Stephanie Liu</p>
      </div>
    </footer>
  );
};

export default Footer;
