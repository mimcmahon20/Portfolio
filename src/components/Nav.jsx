import React from "react";
import "../styles/Nav.css";
import Logo from "./Logo";

export default function Nav() {
  return (
    <div className="nav">
      <Logo></Logo>
      {/* <div className="nav-elements">
            <a className="navLink" href='Projects'>Projects</a>
            <a className="navLink" href='Resume'>Resume</a>
            </div> */}
    </div>
  );
}
