import React from "react";
import "../styles/Nav.css";

export default function Nav() {
    return (
        <div className="nav">
            <a className="navLink" href='Projects'>Projects</a>
            <a className="navLink" href='Resume'>Resume</a>
        </div>
    );
}