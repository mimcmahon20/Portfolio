import React, { useEffect, useRef } from "react";
import "../styles/ProjectsList.css";
import SnakeListItem from "./SnakeListItem";
import JammmingListItem from "./JammmingListItem";
import BitsListItem from "./BitsListItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsList() {
  const projListRef = useRef(null);
  //
  useEffect(() => {
    let el = projListRef.current;
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
          markers: true,
        },
      }
    );
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
      <Link to="/Snake">
        <SnakeListItem numHeadings={numHeadings} name={"snake"}/>
      </Link>
        <div className="flex">
            <div className="projects-divider"></div>
        </div>
      <Link>
        <JammmingListItem numHeadings={numHeadings} name={"jammming"}/>
      </Link>
        <div className="flex">
            <div className="projects-divider"></div>
        </div>
      <Link>
        <BitsListItem numHeadings={numHeadings} name={"bits"}/>
      </Link>
    </div>
  );
}
