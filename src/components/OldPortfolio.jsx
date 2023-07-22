import React from "react";
import "../styles/ListItem.css";

export default function oldPortfolio(props) {
    const numHeadings = props.numHeadings;

    

    return (
        <div className="list-item">
          <div className="heading-container oldPortfolio">{numHeadings(10, "oldPortfolio")}</div>
          <div className="projects-subheading oldPortfolio-svgs svgs">
            <div className="html-svg language-svg" alt="html"></div>
            <div className="css-svg language-svg" alt="css"></div>
            <div className="js-svg language-svg" alt="js"></div>
          </div>
        </div>
      );
}
    