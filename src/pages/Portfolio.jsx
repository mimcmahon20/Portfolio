import React, { useEffect } from "react";
import Nav from "../components/Nav";
import TransitionToProject from "../components/TransitionToProject";
import "../styles/Project.css";
import "../styles/ProjectsList.css";
import "../fonts/fonts.css"
import OldPortfolio from "../components/OldPortfolio";
import ProjectMedia from "../components/ProjectMedia";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescription";
import ProjectFramework from "../components/ProjectFramework";
import ProjectLinks from "../components/ProjectLinks";
import BackButton from "../components/BackButton";

export default function Portfolio() {
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
    <ProjectTitle title={"Old Portfolio"} />
    <ProjectDescription
      description={
        "My original portfolio website. I created this website to showcase my projects and my skills. I used HTML, CSS, and Javascript to create it, choosing not to use any libraries or frameworks. I created the old logo, and favicon, and learned the value of a framework as a project scales up. I used Git to keep track of the various versions, and deployed it using Github Pages."
      }
    />
  </div>);

    let frameworkSection = (<div className="project-section framework-section">
    <h2>Framework</h2>
    <ProjectFramework languages={["HTML", "CSS", "Javascript", "Git"]} />
    <ProjectLinks className="outgoing-links" github={"google.com"} live={"google.com"}/>
  </div>);

    let descriptionSection = (<div className="project-section">
    <h2>Lessons</h2>
    <ProjectDescription
      description={
        "I learned countless lessons from this portfolio project. Though I knew I needed to learn React and continue learning new technologies, I developed a very strong foundation of Javascript and CSS that has helped me easily learn new frameworks and libraries. My favorite part of this design that didn't make it into this one was the implementation of my snake 'AI' running in the background of the Hero section. You can see it in action on my Github Pages version of the site."
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
        <OldPortfolio numHeadings={numHeadings} />
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
