import React from "react";

export default function ProjectLinks(props) {
    let { github, live } = props;
    return (
        <div className="project-links">
            <a href={github} target="_blank" rel="noopener noreferrer" className="github-svg link-svg" alt="Github">
            </a>
            <a href={live} target="_blank" rel="noopener noreferrer" className="live-svg link-svg" alt="Live code">
            </a>
        </div>
    );
}