import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function PFiveListItem(props) {
  const numHeadings = props.numHeadings;

  useEffect(() => {
    const pFive = document.querySelector(".pFive");

    let timelinepFive = gsap.timeline({
      defaults: { ease: "linear" },
    });

    pFive.addEventListener("mouseenter", () => {
      timelinepFive.clear();
      timelinepFive.to(".plus-svg", {
        duration: 1,
        rotation: 0,
        stagger: .1,
        x: 150,
        y: -150,
        ease: "power1.out",
      });
      timelinepFive.to(
        ".equal-svg",
        {
          duration: 1,
          rotation: 0,
          stagger: .2,
          x: -150,
          y: 150,
          ease: "power1.out",
        },
        "<"
      );
      timelinepFive.to(
        ".minus-svg",
        {
          duration: 1,
          rotation: 0,
          stagger: .3,
          x: -150,
          y: -150,
          ease: "power1.out",
        },
        "<"
      );
      timelinepFive.to(
        ".percent-svg",
        {
          duration: 1,
          rotation: 0,
          stagger: .4,
          x: 150,
          y: 150,
          ease: "power1.out",
        },
        "<"
      );
    });
    pFive.addEventListener("mouseleave", () => {
      timelinepFive.clear();
      timelinepFive.to(".plus-svg", {
        duration: 0.5,
        rotation: -45,
        x: 0,
        y: 0,
        ease: "power1.out",
      });
      timelinepFive.to(
        ".equal-svg",
        {
          duration: 0.5,
          rotation: -45,
          x: 0,
          y: 0,
          ease: "power1.out",
        },
        "<"
      );
      timelinepFive.to(
        ".minus-svg",
        {
          duration: 0.5,
          rotation: 45,
          x: 0,
          y: 0,
          ease: "power1.out",
        },
        "<"
      );
      timelinepFive.to(
        ".percent-svg",
        {
          duration: 0.5,
          rotation: 45,
          x: 0,
          y: 0,
          ease: "power1.out",
        },
        "<"
      );
    });
  }, []);

  return (
    <div className="list-item pFive">
      <div className="pFive-large-container">
        <div className="pFive-container">
          <div className="plus-svg five-svg"></div>
          <div className="equal-svg five-svg"></div>
          <div className="minus-svg five-svg"></div>
          <div className="percent-svg five-svg"></div>
        </div>
        <div className="pFive-container">
          <div className="plus-svg five-svg"></div>
          <div className="equal-svg five-svg"></div>
          <div className="minus-svg five-svg"></div>
          <div className="percent-svg five-svg"></div>
        </div>
        <div className="pFive-container">
          <div className="plus-svg five-svg"></div>
          <div className="equal-svg five-svg"></div>
          <div className="minus-svg five-svg"></div>
          <div className="percent-svg five-svg"></div>
        </div>
      </div>
      <div className="heading-container">{numHeadings(10, "pFive")}</div>
      <div className="projects-subheading pFive-svgs svgs">
        <div className="js-svg language-svg" alt="js"></div>
      </div>
    </div>
  );
}
