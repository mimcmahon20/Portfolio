import React from 'react';
import '../styles/ListItem.css';

export default function PFiveListItem(props) {
    const numHeadings = props.numHeadings;

    return (
        <div className="list-item">
          <div className="heading-container pFive">{numHeadings(10, "pFive")}</div>
          <div className="projects-subheading pFive-svgs svgs">
            <div className="html-svg language-svg" alt="html"></div>
            <div className="css-svg language-svg" alt="css"></div>
            <div className="js-svg language-svg" alt="js"></div>
          </div>
        </div>
      );
}