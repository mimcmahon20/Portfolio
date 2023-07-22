import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function OldPortfolio(props) {
  const numHeadings = props.numHeadings;

  useEffect(() => {
    const oldPortfolio = document.querySelector(".oldPortfolio");

    let timelineoldPortfolio = gsap.timeline({
      defaults: { ease: "linear" },
    });


    oldPortfolio.addEventListener("mouseenter", () => {
      timelineoldPortfolio.clear();
      timelineoldPortfolio.to(".gear-svg", {
        duration: 1,
        rotation: 360,
        ease: "power1.out",
        yoyo: true,
        repeat: -1,
      });
      timelineoldPortfolio.to(".exclamation-svg", {
        duration: 1,
        rotation: 10,
        x: 0,
        y: -60,
        ease: "power1.out",
        yoyo: true,
        repeat: -1,
      }, "<");
      
    });
    oldPortfolio.addEventListener("mouseleave", () => {
      timelineoldPortfolio.clear();
      timelineoldPortfolio.to(".gear-svg", {
        duration: 0.5,
        rotation: 0,
        ease: "power1.out",
      });
      timelineoldPortfolio.to(".exclamation-svg", {
        duration: 0.5,
        x: 0,
        y: 0,
        rotation: 0,
        ease: "power1.out",
      }, "<");
    });
  }, []);

  return (
    <div className="list-item oldPortfolio">
      <div className="svg-container">
        <div className="gear-svg portSvg"></div>
        <div className="desktop-svg portSvg"></div>
        <div className="phone-svg portSvg"></div>
        <div className="exclamation-svg portSvg"></div>
      </div>
      
      <div className="heading-container ">{numHeadings(10, "Portfolio")}</div>
      <div className="projects-subheading portfolio-svgs svgs">
        <div className="html-svg language-svg" alt="html"></div>
        <div className="css-svg language-svg" alt="css"></div>
        <div className="js-svg language-svg" alt="js"></div>
      </div>
    </div>
  );
}
