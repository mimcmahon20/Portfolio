import React, { useEffect } from "react";
import Nav from "../components/Nav";
import TransitionToProject from "../components/TransitionToProject";
import "../styles/Project.css";
import "../styles/ProjectsList.css";
import "../fonts/fonts.css"
import JammmingListItem from "../components/JammmingListItem";
import ProjectMedia from "../components/ProjectMedia";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescription";
import ProjectFramework from "../components/ProjectFramework";
import ProjectLinks from "../components/ProjectLinks";
import BackButton from "../components/BackButton";

export default function Jammming() {
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
    <ProjectTitle title={"Jammming"} />
    <ProjectDescription
      description={
        "Jammming is a React app that uses the Spotify API to search for songs, create a playlist, and save it to your Spotify account. I also had to learn how to use the Spotify API to authenticate the user's account. This initially was a project for my Codecademy course, but I evolved it to allow users to also add their most listened to songs to the playlist, and create multiple playlists in one instance."
      }
    />
  </div>);

    let frameworkSection = (<div className="project-section framework-section">
    <h2>Framework</h2>
    <ProjectFramework languages={["React"]} />
    <ProjectLinks className="outgoing-links" github={"google.com"} live={"google.com"}/>
  </div>);

    let descriptionSection = (<div className="project-section">
    <h2>Challenges</h2>
    <ProjectDescription
      description={
        "The biggest challenge I faced with this project was learning how to use the Spotify API. This was my first experience using an API, and had the most complications getting the user authentication to work."
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
        <JammmingListItem numHeadings={numHeadings} />
        <div className="media-carousel">
          <ProjectMedia url={"/Videos/jammmingvideo.mp4"} type={"video"} />
        </div>
        <div className="project-layout">
          {generateProject()}
        </div>
      </TransitionToProject>
    </div>
  );
}
