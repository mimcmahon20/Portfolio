import React from "react";
import "../styles/Projects.css";
import ProjectsIntro from "./ProjectsIntro";
import ProjectsList from "./ProjectsList";
import '../fonts/fonts.css';

export default function Projects() {
  return (
    <div className="projects">
        <ProjectsIntro/>
        <ProjectsList/>
    </div>
  );
}
