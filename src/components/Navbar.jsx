import React from "react";
import "../styles/home.css";
import person from "../assets/Bitmap-2.png";
import { Navbar } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar className="p-1">
      <img className="person" src={person} width="33px" height="33px" />
      <div className="d-flex flex-column ps-2 mt-3">
        <p className="sentence-1"> Good Morning</p>
        <p className="sentence-2"> Fellas</p>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
