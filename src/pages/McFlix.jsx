import React, { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import TransitionToProject from "../components/TransitionToProject";
import "../styles/Project.css";
import "../styles/ProjectsList.css";
import "../fonts/fonts.css";
import ProjectMedia from "../components/ProjectMedia";
import ProjectTitle from "../components/ProjectTitle";
import ProjectDescription from "../components/ProjectDescription";
import ProjectFramework from "../components/ProjectFramework";
import ProjectLinks from "../components/ProjectLinks";
import BackButton from "../components/BackButton";
import mcflixscreenshot from "../media/mcflixscreenshot.png";

import gsap from "gsap";

export default function McFlix() {

  function generateProject() {
    let titleSection = (
      <div className="project-section">
        <ProjectTitle title={"McFlix"} />
        <ProjectDescription
          description={
            "A clone of the frontend homepage of Netflix using React and GSAP for animations. The goal of this project was to create a clone of the Netflix homepage that was as close to the original as possible. I used GSAP to create the animations for the movie rows, and React to create the components."
          }
        />
      </div>
    );

    let frameworkSection = (
      <div className="project-section framework-section">
        <h2>Framework</h2>
        <ProjectFramework
          languages={["React", "Dev Tools", "CSS"]}
        />
        <ProjectLinks
          className="outgoing-links"
          github={"https://github.com/mimcmahon20/McFlix"}
          live={"https://mimcmahon20.github.io/snake/"}
        />
      </div>
    );

    let descriptionSection = (
      <div className="project-section">
        <h2>Challenges</h2>
        <ProjectDescription
          description={
            "The biggest challenge of this project was creating the carousel animation for the movie rows. I wanted to mirror the micro-details that happen while using netflix traditionally, and in the current state I am proud of how close I am. A benefit of this project was learning how to effectively use chrome dev tools. I found many settings I didn't know about before, including the animation timeline, which was a huge help in debugging."
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
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  //GSAP CAROUSEL
  let carousel = useRef(null);
  let xPos = 0;
  let amountMedia = 2;
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
    <div className="project-wrapper">
      <Nav />
      <BackButton />
      <TransitionToProject>
        {/* <SnakeListItem numHeadings={numHeadings} /> */}
        <div className="center-carousel">
          <div className="carousel-container">
            <div className="media-carousel" ref={(el) => (carousel = el)}>
              <ProjectMedia url={"/Videos/mcflixvideo.mp4"} type={"video"} />
              <ProjectMedia url={mcflixscreenshot} type={"image"} />
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
