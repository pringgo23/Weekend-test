import React from "react";
import "../styles/home.css";
import person from "../assets/Bitmap-2.png";
import { Navbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <div className="header">
      <div className="logo">
        <div className="person">
          <img className="person" src={person} width="33px" height="33px" />
        </div>
        <div className="text-logo">
          <p className="sentence-1"> Good Morning</p>
          <p className="sentence-2"> Fellas</p>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
