import React from "react";
import "../styles/ListItem.css";

export default function JammmingListItem(props) {
  const numHeadings = props.numHeadings;
  return (
    <div className="list-item">
      <div className="heading-container">
        <div className="spotify-svg"></div>
        {numHeadings(10, "jammming")}
      </div>
      {/* <h2 className="projects-subheading">HTML, CSS & Javascript</h2> */}
    </div>
  );
}
