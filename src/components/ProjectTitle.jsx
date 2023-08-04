import React from "react";
import "../styles/ProjectTitle.css";

export default function ProjectTitle(props) {
    const { title } = props;
    return (
        <div className="project-title">
            <h1>{title}</h1>
        </div>
    );
}
