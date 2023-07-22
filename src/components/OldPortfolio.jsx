import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function oldPortfolio(props) {
    const numHeadings = props.numHeadings;

    

    return (
        <div className="list-item oldPortfolio">
          <div className="heading-container ">{numHeadings(10, "Portfolio")}</div>
          <div className="projects-subheading portfolio-svgs svgs">
            <div className="html-svg language-svg" alt="html"></div>
            <div className="css-svg language-svg" alt="css"></div>
            <div className="js-svg language-svg" alt="js"></div>
          </div>
        </div>
      );
}
    