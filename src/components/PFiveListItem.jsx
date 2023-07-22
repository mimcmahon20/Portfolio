import React from 'react';
import '../styles/ListItem.css';

export default function PFiveListItem(props) {
    const numHeadings = props.numHeadings;

    return (
        <div className="list-item pFive">
          <div className="heading-container">{numHeadings(10, "pFive")}</div>
          <div className="projects-subheading pFive-svgs svgs">
            <div className="js-svg language-svg" alt="js"></div>
            
          </div>
        </div>
      );
}