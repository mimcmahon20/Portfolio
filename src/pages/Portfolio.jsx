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
import porfolioscreenshot from "../media/portfolioscreenshot.png";
import portfolioThumbnail from "../media/portfolioThumbnail.png";
import gsap from "gsap";

export default function Portfolio() {
  function generateProject() {
    let titleSection = (
      <div className="project-section">
        <ProjectTitle title={"Old Portfolio"} />
        <ProjectDescription
          description={
            "My original portfolio website. I created this website to showcase my projects and my skills. I used HTML, CSS, and Javascript to create it, choosing not to use any libraries or frameworks. I created the old logo, and favicon, and learned the value of a framework as a project scales up. I used Git to keep track of the various versions, and deployed it using Github Pages."
          }
        />
      </div>
    );

    let frameworkSection = (
      <div className="project-section framework-section">
        <h2>Framework</h2>
        <ProjectFramework languages={["HTML", "CSS", "Javascript", "Git"]} />
        <ProjectLinks
          className="outgoing-links"
          github={"https://github.com/mimcmahon20/My-Portfolio"}
          live={"www.maguiremcmahon.com"}
        />
      </div>
    );

    let descriptionSection = (
      <div className="project-section">
        <h2>Lessons</h2>
        <ProjectDescription
          description={
            "I learned countless lessons from this portfolio project. Though I knew I needed to learn React and continue learning new technologies, I developed a very strong foundation of Javascript and CSS that has helped me easily learn new frameworks and libraries. My favorite part of this design that didn't make it into this one was the implementation of my snake 'AI' running in the background of the Hero section. You can see it in action on my Github Pages version of the site."
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
    setTimeout(window.scrollTo({top: 0, behavior: 'instant'}), 0);
    
  }, []);

  //GSAP CAROUSEL
  let carousel = useRef(null);
  let xPos = 0;
  let amountMedia = 2;
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
        {/* <OldPortfolio numHeadings={numHeadings} /> */}
        <div className="project-layout">{generateProject()}</div>

        <div className="center-carousel">
          <div className="carousel-container">
            <div className="media-carousel" ref={(el) => (carousel = el)}>
              <ProjectMedia url={"/Videos/portfoliovideo.mp4"} type={"video"} thumbnail={portfolioThumbnail}/>
              <ProjectMedia url={porfolioscreenshot} type={"image"} />
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
