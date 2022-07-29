import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import { Button, Row, Col } from "react-bootstrap";

import astronout from "../assets/Bitmap-1.png";
import sloopingAstronout from "../assets/Group-4.png";
import circle from "../assets/Oval-1.svg";
import before from "../assets/arrow-before.svg";
import after from "../assets/arrow-after.svg";
import image1 from "../assets/image-2.jpg";
import image2 from "../assets/image-1.jpg";
import image3 from "../assets/image-3.jpg";
import ornament from "../assets/Path-3.svg";
import backAstronout from "../assets/Group-3.png";

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
        <div>
          <h2 className="res-title">Resources</h2>
          <p className="res-paragraph">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
        </div>

        <div>
          <h2 className="help-title">Help & Tips</h2>
          <Row>
            <Col>
              <div>
                <img className="help-image" src={image1} alt="gambar1" />
              </div>
              <div>
                <div className="rec-opaque">
                  <div className="d-flex p-2">
                    <p className="box-content">
                      {" "}
                      Start quickly with simple steps
                    </p>
                    <img className="ms-5 arrow-help" src={after} alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <img className="help-image2" src={image2} alt="gambar2" />
              </div>
              <div>
                <div className="rec-opaque2">
                  <div className="d-flex p-2">
                    <p className="box-content">
                      Run smoothly at vero eos et accusamus
                    </p>
                    <img className="ms-5 arrow-help" src={after} alt="" />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <img className="ornament" src={ornament} alt="ornament" />
              </div>
              <div>
                <img className="help-image3" src={image3} alt="gambar3" />
              </div>
              <div>
                <div className="rec-opaque3">
                  <div className="d-flex p-2">
                    <p className="box-content">
                      Denounce with righteous indignation
                    </p>
                    <img className="ms-5 arrow-help" src={after} alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div>
          <h2 className="allset">You're all set. </h2>
          <p className="content-allset">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>

        <div>
          <img
            className="back-astronout"
            src={backAstronout}
            alt="backward-astronout"
          />
        </div>
        <div className="footer">
          <Row>
            <Col>
              <p className="foot-note">wknd@2020</p>
            </Col>
            <Col>
              <Button className="oval" variant="outline-light">
                <p className="foot-alpha">alpha version 0.1</p>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
