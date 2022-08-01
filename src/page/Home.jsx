import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import { Button } from "react-bootstrap";
import axios from "axios";

import astronout from "../assets/Bitmap-1.png";
import sloopingAstronout from "../assets/Group-4.png";
import circle from "../assets/Oval-1.svg";
import after from "../assets/arrow-after.svg";
import image1 from "../assets/image-2.jpg";
import image2 from "../assets/image-1.jpg";
import image3 from "../assets/image-3.jpg";
import ornament from "../assets/Path-3.svg";
import backAstronout from "../assets/Group-3.png";
import backgroundHeader from "../assets/BG_1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// const dataTestimoni = [
//   {
//     title: "Blue",
//     info: "Places where you can leverage tools and software to free up time to focus on growing the business.",
//   },
//   {
//     title: "Angelus",
//     info: "Places where All those apps took me months to get running. Now the site practically runs itself! can leverage tools and software to free up time to focus on growing the business.",
//   },
//   {
//     title: "SoYoung",
//     info: "Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction",
//   },
//   {
//     title: "Blue",
//     info: "Places where you can leverage tools and software to free up time to focus on growing the business.",
//   },
//   {
//     title: "Angelus",
//     info: "Places where All those apps took me months to get running. Now the site practically runs itself! can leverage tools and software to free up time to focus on growing the business.",
//   },
//   {
//     title: "SoYoung",
//     info: "Unless you have a truly unique product, it will be very hard to differentiate and gain brand traction",
//   },
// ];

// const dataHelp = [
//   {
//     title: "Start quickly with simple steps",
//     image: image1,
//   },
//   {
//     title: "Run smoothly at vero eos et accusamus",
//     image: image2,
//   },
//   {
//     title: "Denounce with righteous indignation",
//     image: image3,
//   },
// ];

const CardHelp = ({ image, title }) => {
  return (
    <div className="card-help">
      <img className="help-image" src={image} alt="gambar1" />
      <div className="rec-opaque">
        <div className="d-flex p-2">
          <p className="box-content">{title}</p>
          <img className="ms-5 arrow-help" src={after} alt="" />
        </div>
      </div>
    </div>
  );
};

const Homepage = () => {
  const [tips, setTips] = useState([]);
  const [testimoni, setTestimoni] = useState([]);

  const renderTestimoni = useMemo(() => {
    return testimoni.map((el, idx) => {
      return (
        <SwiperSlide key={idx} className={"slider-width"}>
          <div className="rectangle">
            <p className="rec-title">{el.by}</p>
            <p className="rec-paragraph">{el.testimony}</p>
          </div>
        </SwiperSlide>
      );
    });
  }, [testimoni]);

  const renderHelp = useMemo(() => {
    return tips.map((el, idx) => {
      return <CardHelp key={idx} title={el.title} image={el.image} />;
    });
  }, [tips]);

  useEffect(() => {
    axios
      .get(`https://wknd-take-home-challenge-api.herokuapp.com/help-tips`)
      .then((data) => {
        const result = data.data;
        setTips(result);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://wknd-take-home-challenge-api.herokuapp.com/testimonial`)
      .then((data) => {
        const result = data.data;
        setTestimoni(result);
      });
  }, []);

  return (
    <div className="body">
      <div className="body-1">
        <div className="header-title">
          <h1 className="title-1">Weekend From Home</h1>
          <p className="title-2">Stay active with a little workout.</p>
        </div>
        <img src={backgroundHeader} alt="bg-header" className="bg-1" />
        <img className="astronout" src={astronout} alt="astronout" />
        <Button className="btn-astro" variant="light">
          Let's Go
        </Button>
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
          <div className="wrap-circle">
            <img id="circle" src={circle} alt="circle" />
          </div>
        </div>
      </div>

      <div className="body-3">
        <div className="testimoni-section">
          <p className="testimonial">Testimonial</p>
          <div className="d-flex justify-content-center">
            <Swiper className="swiper" slidesPerView={2.5}>
              {renderTestimoni}
            </Swiper>
          </div>
        </div>

        <div className="wrap-POV">
          <h2 className="pov-title">POV</h2>
          <p className="pov-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud ullamco laboris nisi ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="wrap-POV mt-5">
          <div className="wrap-pov-title">
            <h2 className="pov-title">Resources</h2>
          </div>
          <p className="pov-paragraph">
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best
          </p>
        </div>

        <div className="wrap-help">
          <img src={ornament} alt="" className="ornament" />
          <h2 className="help-title">Help & Tips</h2>
          <div className="content-help">{renderHelp}</div>
        </div>
        <div className="wrap-all-set">
          <h2 className="pov-all-set">You're all set.</h2>
          <p className="pov-paragraph">
            The wise man therefore always holds in these matters to this
            principle of selection.
          </p>
        </div>
        <img
          className="back-astronout"
          src={backAstronout}
          alt="backward-astronout"
        />
      </div>
      <div className="footer">
        <p className="foot-note">wknd@2020</p>
        <div>
          <Button className="oval" variant="outline-light">
            <p className="foot-alpha">alpha version 0.1</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
