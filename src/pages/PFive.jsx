import React, { useEffect } from "react";
import Nav from "../components/Nav";
import TransitionToProject from "../components/TransitionToProject";
import "../styles/Project.css";
import "../styles/ProjectsList.css";
import "../fonts/fonts.css"
import PFiveListItem from "../components/PFiveListItem";
import ProjectMedia from "../components/ProjectMedia";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescription";
import ProjectFramework from "../components/ProjectFramework";
import ProjectLinks from "../components/ProjectLinks";
import BackButton from "../components/BackButton";

export default function PFive() {
  function numHeadings(num, name) {
    let headings = [];
    for (let i = 0; i < num; i++) {
      headings.push(
        <h1 key={i * 132} className="projects-heading">
          {name}
        </h1>
      );
    }
    return headings;
  }

  function generateProject() {
    let titleSection = (<div className="project-section">
    <ProjectTitle title={"P5 Fun :)"} />
    <ProjectDescription
      description={
        "I've always had a fascination with math and visualizations in coding. My first projects when I got my hands on GUIs in Java were all implementing physics equations I had learned in my class that year. I've since discovered the P5.js library, and have been having a blast creating visualizations and animations."
      }
    />

<ProjectDescription
      description={
        "I've followed along with Codetrain's Coding Challenge serious on Youtube, following a few of his projects and expanding where he ends off. Specifically, I have implemented a genetic algorithm that allows the user to create a population of dots that learn to reach a goal."
      }
    />
  </div>);

    let frameworkSection = (<div className="project-section framework-section">
    <h2>Framework</h2>
    <ProjectFramework languages={["Javascript", "P5"]} />
    <ProjectLinks className="outgoing-links" github={"google.com"} live={"google.com"}/>
  </div>);

    let descriptionSection = (<div className="project-section">
    <h2>Plans for the future</h2>
    <ProjectDescription
      description={
        "I'm hoping to continue to learn more about P5 and other visualization libraries, specifically WEBGL. I'm also hoping to learn more about the math behind the visualizations, and how to implement more complex algorithms that I learn about in my studies."
      }
    />
    
  </div>);


    if(window.innerWidth < 1000) {
        return (
            <>
            {titleSection}
            {frameworkSection}
            {descriptionSection}
            </>
        )
    } else {
        return (
            <>
            {frameworkSection}
            {titleSection}
            {descriptionSection}
            </>
        )
    }
  }

  //we will just set the window y to the top of the page
  useEffect(() => {
    let thirtyVh = window.innerHeight * 0.3;
   window.scrollTo(0, thirtyVh);

  }, []);
  return (
    <div style={{backgroundColor: '#0a0a0a', position: 'relative'}}>
      <Nav />
        <BackButton />
      <TransitionToProject>
        <PFiveListItem numHeadings={numHeadings} />
        <div className="media-carousel">
          <ProjectMedia url={""} type={"video"} />
        </div>
        <div className="project-layout">
          {generateProject()}
        </div>
      </TransitionToProject>
    </div>
  );
}
