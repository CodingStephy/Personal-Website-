import { InputBase, Paper } from "@material-ui/core";
import React from "react";
import { Fade, Reveal } from "react-reveal";
import { ReactComponent as S } from "../../icon/icon.svg";
import Wave from "../../utils/Wave";
const Contact = () => {
  return (
    <section
      id="contact"
      className="d-flex py-5 justify-content-center flex-column align-items-center"
    >
      <Wave className=" wave-colored" />
      <div className="py-5 w-100 mt-5">
        <div className="text-center">
          <h1 className="mb-5 section-title display-4 pb-3">Contact Me</h1>
        </div>
        <Paper elevation={3} className="container round calc_height">
          <div className="row h-100">
            <div
              style={{ flexDirection: "column" }}
              className="col-lg-6 colored py-4 clipped d-flex justify-content-center align-items-center"
            >
              <Reveal effect="icon_svg">
                <S width={200} fill="#fff" />
              </Reveal>
              <br />
              <h1 className="great-vibes text-center text-white mt-3">
                Stephanie Liu
              </h1>
            </div>
            <div className="col-lg-6 py-5 position-relative">
              <form
                id="submit_form"
                action="https://formspree.io/f/xqkwdpkw"
                method="POST"
              >
                <Fade right cascade>
                  <div>
                    <label htmlFor="name" className="mt-3">
                      Name:
                    </label>
                    <div style={{ borderRadius: 20 }} className="me-3">
                      <InputBase
                        name="name"
                        className="my_textarea shadow px-3 py-2 rounded-pill"
                        placeholder="Name"
                        id="name"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mt-3">
                      Email:
                    </label>
                    <div style={{ borderRadius: 20 }} className="me-3">
                      <InputBase
                        name="email"
                        className="my_textarea shadow px-3 py-2 rounded-pill"
                        placeholder="Email"
                        id="email"
                        type="email"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="mt-3">
                      Message:
                    </label>
                    <div style={{ borderRadius: 20 }} className="me-3 shadow">
                      <textarea
                        name="message"
                        className="my_textarea px-3"
                        placeholder="Enter Your Feedback"
                        id="message"
                        required
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="submit-button state-0">
                      <span className="pre-state-msg">Submit</span>
                    </button>
                  </div>
                </Fade>
              </form>
            </div>
          </div>
        </Paper>
      </div>
    </section>
  );
};

export default Contact;
