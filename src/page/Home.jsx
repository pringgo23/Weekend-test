import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import { Button, Row, Col } from "react-bootstrap";

import astronout from "../assets/Bitmap-1.png";
import sloopingAstronout from "../assets/Group-4.png";
import circle from "../assets/Oval-1.svg";
import before from "../assets/arrow-before.svg";
import after from "../assets/arrow-after.svg";

function Homepage() {
  return (
    <div className="body">
      <div className="body-1">
        <div className="bg-1">
          <div>
            <h1 className="title-1">Weekend From Home</h1>
            <p className="title-2">Stay active with a little workout.</p>
          </div>
          <div>
            <img className="astronout" src={astronout} alt="astronout" />
            <Button className="btn-astro" variant="light">
              Let's Go
            </Button>
          </div>
        </div>
      </div>

      <div className="body-2">
        <div className="d-flex justify-content-end">
          <img
            id="sloop-astronout"
            src={sloopingAstronout}
            alt="Astronout miring"
          />
        </div>
        <div className="wrap-definition">
          <p id="definition">
            <span style={{ color: "blue" }}>Deffinition;</span> a practice or
            exercise to test or improve one's fitness for athletic competition,
            ability, or performance to exhaust (something, such as a mine) by
            working to devise, arrange, or achieve by resolving difficulties.
            Merriam-Webster.com Dictionary.
          </p>
          <p id="commentBy">-weekend team</p>
        </div>
        <img id="circle" src={circle} alt="circle" />
      </div>
      <div>
        <p className="testimonial">Testimonial</p>
      </div>

      <div className="body-3">
        <div className="wrap-rectangle">
          <div className="d-flex justify-content-center">
            <Row className="g-2 g-lg-3">
              <Col xs={2}>
                <img className="before" src={before} alt="before" />
              </Col>
              <Col xs={2} className="rectangle">
                <h2 className="rec-title">Blu Kicks</h2>
                <p className="rec-paragraph">
                  Places where you can leverage tools and software to free up
                  time to focus on growing the business.
                </p>
              </Col>
              <Col xs={2} className="rectangle">
                <h2 className="rec-title">Angelus</h2>
                <p className="rec-paragraph">
                  All those apps took me months to get running. Now the site
                  practically runs itself!
                </p>
              </Col>
              <Col xs={2} className="rectangle">
                <h2 className="rec-title">SoYoung</h2>
                <p className="rec-paragraph">
                  Unless you have a truly unique product, it will be very hard
                  to differentiate and gain brand traction
                </p>
              </Col>
              <Col xs={2}>
                <img className="before" src={after} alt="after" />
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <h2 className="pov-title">POV</h2>
          <p className="pov-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
