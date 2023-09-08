import React, { useEffect, useRef } from "react";
import "../styles/ProjectsList.css";
import McFlixListItem from "./McFlixListItem";
import SnakeListItem from "./SnakeListItem";
import JammmingListItem from "./JammmingListItem";
import BitsListItem from "./BitsListItem";
import OldPortfolio from "./OldPortfolio";
import PFiveListItem from "./PFiveListItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsList() {
  const projListRef = useRef(null);
  //

  useEffect(() => {
    if (window.innerWidth > 600) {
      gsap.fromTo(
        ".projects-heading",
        {
          x: "0px",
        },
        {
          x: "-1500px",
          opacity: 1,
          scrollTrigger: {
            trigger: ".projects-list",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

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

  //Adding mouse listener to mouse enter and exit on each heading-container
  //that changes the background of the heading-container to a random color

  //   useEffect(() => {
  //     let el = projListRef.current;
  //     let headingContainers = el.querySelectorAll(".heading-container");
  //     headingContainers.forEach((headingContainer) => {
  //       headingContainer.addEventListener("mouseenter", () => {
  //         let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //         headingContainer.style.backgroundColor = "#" + randomColor;
  //         gsap.to(headingContainer, {
  //             duration: 0.5,

  //             ease: "power1.Out",
  //         });
  //       });
  //       headingContainer.addEventListener("mouseleave", () => {
  //         headingContainer.style.backgroundColor = "transparent";
  //       });
  //     });
  //   });

  return (
    <div className="projects-list" ref={projListRef}>
      <Link to="/McFlix">
        <McFlixListItem numHeadings={numHeadings} />
      </Link>
      <div className="flex" style={{ height: "100px" }}>
        <div className="projects-divider"></div>
      </div>
      <Link to="/Snake">
        <SnakeListItem numHeadings={numHeadings} />
      </Link>
      <div className="flex" style={{ height: "100px" }}>
        <div className="projects-divider"></div>
      </div>
      <Link to="/Jammming">
        <JammmingListItem numHeadings={numHeadings} />
      </Link>
      <div className="flex">
        <div className="projects-divider"></div>
      </div>
      <Link to="/Bits">
        <BitsListItem numHeadings={numHeadings} />
      </Link>
      <div className="flex">
        <div className="projects-divider"></div>
      </div>
      <Link to="/Portfolio">
        <OldPortfolio numHeadings={numHeadings} />
      </Link>
      <div className="flex">
        <div className="projects-divider"></div>
      </div>
      <Link to="/PFive">
        <PFiveListItem numHeadings={numHeadings} />
      </Link>
      <div className="flex">
        <div className="projects-divider"></div>
      </div>
    </div>
  );
}
