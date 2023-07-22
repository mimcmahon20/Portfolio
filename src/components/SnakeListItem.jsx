import React from "react";
import "../styles/ListItem.css";

export default function SnakeListItem(props) {
    const numHeadings = props.numHeadings;
    return (
        <div className="list-item">
            <div className="heading-container">
            {numHeadings(10, "snake")}

            </div>
            {/* <h2 className="projects-subheading">HTML, CSS & Javascript</h2> */}
        </div>
    );
}