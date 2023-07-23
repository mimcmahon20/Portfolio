import React from "react";

export default function ProjectDescription(props) {
    const { description } = props;
    return (
        <div className="project-description">
            <p>{description}</p>
        </div>
    );
}
