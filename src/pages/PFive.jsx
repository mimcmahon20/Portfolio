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
import { gsap } from "gsap";
import geneticThumbnail from "../media/geneticThumbnail.png";
import phyloThumbnail from "../media/phyloThumbnail.png";
import shmThumbnail from "../media/shmThumbnail.png";

export default function PFive() {
  function generateProject() {
    let titleSection = (
      <div className="project-section">
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
      </div>
    );

    let frameworkSection = (
      <div className="project-section framework-section">
        <h2>Framework</h2>
        <ProjectFramework languages={["Javascript", "P5"]} />
        <ProjectLinks
          className="outgoing-links"
          github={"https://github.com/mimcmahon20/Ecosystem"}
          live={"https://mimcmahon20.github.io/Ecosystem/"}
        />
      </div>
    );

    let descriptionSection = (
      <div className="project-section">
        <h2>Plans for the future</h2>
        <ProjectDescription
          description={
            "I'm hoping to continue to learn more about P5 and other visualization libraries, specifically WEBGL. I'm also hoping to learn more about the math behind the visualizations, and how to implement more complex algorithms that I learn about in my studies."
          }
        />
      </div>
    );

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
  // useEffect(() => {
  //   window.scrollTo({top: 0, behavior: 'smooth'});

  // }, []);

  //GSAP CAROUSEL
  let carousel = useRef(null);
  let xPos = 0;
  let amountMedia = 4;
  let mediaWidth;
  if (window.innerWidth < 1000) {
    mediaWidth = 500;
  } else {
    mediaWidth = 1000;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1000) {
      mediaWidth = 500;
    } else {
      mediaWidth = 1000;
    }
  });

  //gsap helper functions

  useEffect(() => {
    window.addEventListener("error", (e) => {
      console.log(e);
      if (
        e.message ===
        "ResizeObserver loop completed with undelivered notifications."
      ) {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);

  const slideRight = () => {
    if (xPos < -mediaWidth * (amountMedia - 2)) {
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
  };

  const slideLeft = () => {
    if (xPos > -mediaWidth) {
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
  };

  return (
    <div className="project-wrapper">
      <Nav />
      <BackButton />
      <TransitionToProject>
        {/* <PFiveListItem numHeadings={numHeadings} /> */}
        <div className="project-layout">{generateProject()}</div>

        <div className="center-carousel">
          <div className="carousel-container">
            <div className="media-carousel" ref={(el) => (carousel = el)}>
              <ProjectMedia
                url={"/Videos/simulationvideo.mp4"}
                type={"video"}
              />
              <ProjectMedia url={"/Videos/geneticvideo.mp4"} type={"video"} thumbnail={geneticThumbnail}/>
              <ProjectMedia url={"/Videos/phyllovideo.mp4"} type={"video"} thumbnail={phyloThumbnail}/>
              <ProjectMedia url={"/Videos/shmvideo.mp4"} type={"video"} thumbnail={shmThumbnail}/>
            </div>
            <div className="carousel-buttons">
              <button
                className="left-carousel carousel-button"
                onClick={slideLeft}
              ></button>
              <button
                className="right-carousel carousel-button"
                onClick={slideRight}
              ></button>
            </div>
          </div>
        </div>
      </TransitionToProject>
    </div>
  );
}
