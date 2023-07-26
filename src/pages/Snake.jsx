import React, { useEffect, useState } from "react";
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

let shownCarouselIndex = 0;
let xOffset = 0;
let mediaTl = gsap.timeline({ease: "power2.out",
repeat: 0,
yoyo: true,});
export default function Snake() {
  const [buttonsActive, setButtonsActive] = useState(true);
  const [mediaCarousel, setMediaCarousel] = useState(null);
  const [animating, setAnimating] = useState(false);



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

  console.log(xOffset);

  function leftActive(e) {
    e.preventDefault();
    
    if (buttonsActive) {
      shownCarouselIndex--;
      if (shownCarouselIndex === -1) {
        shownCarouselIndex = 2;
      }
     xOffset = window.innerWidth * shownCarouselIndex - 10 * shownCarouselIndex;
      setButtonsActive(false);
      setAnimating(true);
      setTimeout(() => {
        setButtonsActive(true);
        setAnimating(false);
      }, 775);
    }
  }

  function rightActive(e) {
    e.preventDefault();

    if (buttonsActive) {
      shownCarouselIndex++;
      if (shownCarouselIndex === mediaCarousel.children.length) {
        shownCarouselIndex = 0;
      }
       xOffset = window.innerWidth * shownCarouselIndex - 10 * shownCarouselIndex;
      setButtonsActive(false);
      setAnimating(true);
      setTimeout(() => {
        setButtonsActive(true);
        setAnimating(false);
      }, 775);
    }
  }

  //we will just set the window y to the top of the page
  useEffect(() => {
    let thirtyVh = window.innerHeight * 0.3;
    window.scrollTo(0, thirtyVh);
    //making a carousel for the media using GSAP
    setMediaCarousel(document.querySelector(".media-carousel"));
  }, []);

  if(!mediaTl.isActive() && !animating) {
    mediaTl.to(mediaCarousel, {
        opacity: 0,
        duration: 0.25,
      });
      mediaTl.to(mediaCarousel, {
        x: -xOffset,
        duration: 0.25, 
      });
      mediaTl.to(mediaCarousel, {
        opacity: 1,
        duration: 0.25,
      })
  }
  console.log(mediaCarousel);
  
  

  return (
    <div style={{ backgroundColor: "#0a0a0a", position: "relative" }}>
      <Nav />
      <BackButton />
      <TransitionToProject>
        <SnakeListItem numHeadings={numHeadings} />
        <div className="media-carousel">
          <ProjectMedia url={"/Videos/snakevideo.mp4"} type={"video"} />
          <ProjectMedia url={"/Videos/snakevideo.mp4"} type={"video"} />
          <ProjectMedia url={"/Videos/snakevideo.mp4"} type={"video"} />
        </div>
        <div className="carousel-controls">
          <div className="carousel-control-left">
            <button className="carousel-button" onClick={leftActive} disabled={!buttonsActive}>
              LEFT
            </button>
          </div>
          <div className="carousel-control-right">
            <button className="carousel-button" onClick={rightActive} disabled={!buttonsActive}>
              RIGHT
            </button>
          </div>
        </div>
        <div className="project-layout">{generateProject()}</div>
      </TransitionToProject>
    </div>
  );
}
