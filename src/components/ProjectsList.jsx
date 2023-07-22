import React, { useEffect, useRef } from "react";
import "../styles/ProjectsList.css";
import SnakeListItem from "./SnakeListItem";
import JammmingListItem from "./JammmingListItem";
import BitsListItem from "./BitsListItem";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsList() {
  const projListRef = useRef(null);
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
          markers: false,
        },
      }
    );
  }, []);

  function numHeadings(num, name) {
    let headings = [];
    for(let i = 0; i < num; i++) {
        headings.push(<h1 className="projects-heading">{name}</h1>);
    }
    return headings;
    }

  return (
    <div className="projects-list" ref={projListRef}>
      <SnakeListItem numHeadings={numHeadings}/>
      <JammmingListItem numHeadings={numHeadings}/>
      <BitsListItem numHeadings={numHeadings}/>
    </div>
  );
}
