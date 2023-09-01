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
import bitsscreenshot1 from "../media/bitsscreenshot1.png";
import bitsscreenshot2 from "../media/bitsscreenshot2.png";
import gsap from "gsap";

export default function Bits() {
  function generateProject() {
    let titleSection = (
      <div className="project-section">
        <ProjectTitle title={"Bits n Bytes"} />
        <ProjectDescription
          description={
            "My first project developing alongside another programmer. We created a clicker game based around bits and bytes as a currency/measurement. Taylor, the other dev, focused on implementing user authentication and other backend features, while I focused on the front end. I created the UI, the game logic, and the animations. I also created the logo and the favicon."
          }
        />
      </div>
    );

    let frameworkSection = (
      <div className="project-section framework-section">
        <h2>Framework</h2>
        <ProjectFramework languages={["React", "Git"]} />
        <ProjectLinks
          className="outgoing-links"
          github={"https://github.com/taylor-b-02/bits-n-bytes"}
          live={"https://github.com/taylor-b-02/bits-n-bytes"}
        />
      </div>
    );

    let descriptionSection = (
      <div className="project-section">
        <h2>Challenges</h2>
        <ProjectDescription
          description={
            "The biggest challenge we faced through developing Bits n Bytes was conceptualizing the idea and planning ahead of time before writing any code. We had to make sure we were on the same page and had the same vision for the project. We used Git to collaborate, adding new features with branches and always reviewing pull requests."
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
  useEffect(() => {
    setTimeout(window.scrollTo({top: 0, behavior: 'smooth'}), 5000);
    console.log("bits loaded");
  }, []);

  //GSAP CAROUSEL
  let carousel = useRef(null);
  let xPos = 0;
  let amountMedia = 3;
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
        {/* <BitsListItem numHeadings={numHeadings} /> */}
        <div className="project-layout">{generateProject()}</div>

        <div className="center-carousel">
          <div className="carousel-container">
            <div className="media-carousel" ref={(el) => (carousel = el)}>
              <ProjectMedia url={"/Videos/bitsvideo.mp4"} type={"video"} thumbnail={bitsscreenshot2} />
              <ProjectMedia url={bitsscreenshot1} type={"image"} />
              <ProjectMedia url={bitsscreenshot2} type={"image"} />
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
