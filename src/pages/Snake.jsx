import React, { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import TransitionToProject from "../components/TransitionToProject";
import "../styles/Project.css";
import "../styles/ProjectsList.css";
import "../fonts/fonts.css";
import SnakeListItem from "../components/SnakeListItem";
import ProjectMedia from "../components/ProjectMedia";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescription";
import ProjectFramework from "../components/ProjectFramework";
import ProjectLinks from "../components/ProjectLinks";
import BackButton from "../components/BackButton";

import gsap from "gsap";

export default function Snake() {


  //HELPER FUNCTIONS
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
    let titleSection = (
      <div className="project-section">
        <ProjectTitle title={"Snake"} />
        <ProjectDescription
          description={
            "A combination of a Djikstra's pathfinding algorithm and the classic game Snake. The snake attempts to avoid its tail and the walls while collecting food thus extending its body. Currently, the snake is able to survive until it surrounds itself and loses vision of the food. I acheived this through first creating a visualizer for Djikstra's algorithm, and then creating the game of Snake. Combining the two is where the true challenge waited..."
          }
        />
      </div>
    );

    let frameworkSection = (
      <div className="project-section framework-section">
        <h2>Framework</h2>
        <ProjectFramework
          languages={["HTML", "CSS", "Javascript", "Djikstra's Algorithm"]}
        />
        <ProjectLinks
          className="outgoing-links"
          github={"https://github.com/mimcmahon20/snake"}
          live={"https://mimcmahon20.github.io/snake/"}
        />
      </div>
    );

    let descriptionSection = (
      <div className="project-section">
        <h2>Challenges</h2>
        <ProjectDescription
          description={
            "The biggest challenge I faced with this project was merging the algorithm into the snake. I faced many data structure issues and started to learned the true power of Javascript."
          }
        />
      </div>
    );
    //Sizing for mobile/desktop
    if (window.innerWidth < 1000) {
      return (
        <>
          {titleSection}
          {frameworkSection}
          {descriptionSection}
        </>
      );
    } else {
      return (
        <>
          {frameworkSection}
          {titleSection}
          {descriptionSection}
        </>
      );
    }
  }



  //we will just set the window y to the top of the page
  useEffect(() => {
    let thirtyVh = window.innerHeight * 0.3;
    window.scrollTo(0, thirtyVh);
  }, []);

  //GSAP CAROUSEL
  let carousel = useRef(null);
  let xPos = 0;
  let mediaWidth;
  if(window.innerWidth < 1000) {
    mediaWidth = 500;
  } else {
    mediaWidth = 1000;
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth < 1000) {
      mediaWidth = 500;
    } else {
      mediaWidth = 1000;
    }
  })
  

  let amountMedia = 3;

  //gsap helper functions

  useEffect(() => {
    window.addEventListener('error', e => {
      console.log(e);
        if (e.message === 'ResizeObserver loop completed with undelivered notifications.') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
}, []);

  const slideRight = () => {
    if(xPos < -mediaWidth * (amountMedia - 2)) {
      gsap.to(carousel, {
        x: 0,
        duration: 0.4,
        ease: "power4.out",
        });
      xPos = 0;
    } else {
      gsap.to(carousel, {
        x: "-=" + mediaWidth,
        duration: 0.4,
        ease: "power4.out",
      });
      xPos -= mediaWidth;
    }
  }

  const slideLeft = () => {
    if(xPos > -mediaWidth) {
      gsap.to(carousel, {
        x: -mediaWidth * (amountMedia - 1),
        duration: 0.4,
        ease: "power4.out",
        });
      xPos = -mediaWidth * (amountMedia - 1);
    } else {
      gsap.to(carousel, {
        x: "+=" + mediaWidth,
        duration: 0.4,
        ease: "power4.out",
      });
      xPos += mediaWidth;
    }
  }


  return (
    <div style={{ backgroundColor: "#0a0a0a", position: "relative" }}>
      <Nav />
      <BackButton />
      <TransitionToProject>
        <SnakeListItem numHeadings={numHeadings} />
        <div className="center-carousel">
          <div className="carousel-container">
            <div className="media-carousel" ref={(el) => (carousel = el)}>
              <ProjectMedia url={"/Videos/snakevideo.mp4"} type={"video"} />
              <ProjectMedia url={"/Videos/snakevideo.mp4"} type={"video"} />
              <ProjectMedia url={"/Videos/snakevideo.mp4"} type={"video"} />
            </div>
            <div className="carousel-buttons">
              <button className="left-carousel carousel-button" onClick={slideLeft}></button>
              <button className="right-carousel carousel-button" onClick={slideRight}></button>
            </div>
          </div>
        </div>
        <div className="project-layout">{generateProject()}</div>
      </TransitionToProject>
    </div>
  );
}
