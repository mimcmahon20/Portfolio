import React from "react";
import "../styles/Projects.css";
import ProjectsIntro from "./ProjectsIntro";
import ProjectsList from "./ProjectsList";

export default function Projects() {
  return (
    <div className="projects">
        <ProjectsIntro/>
        <ProjectsList/>
    </div>
  );
}
