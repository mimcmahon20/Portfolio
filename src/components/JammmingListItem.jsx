import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function JammmingListItem(props) {
  const numHeadings = props.numHeadings;

  useEffect(() => {
    //add a listener to snake class that moves a .box class within the list-item class when snake class is mouse entered
    const jammming = document.querySelector(".jammming");
    let jammmingLeft = document.querySelectorAll(".jammming-left");
    let jammmingRight = document.querySelectorAll(".jammming-right");

    let timelineJammmingLeft = gsap.timeline({});

    let timelineJammmingRight = gsap.timeline({});

    jammming.addEventListener("mouseenter", () => {
      timelineJammmingLeft.clear();
      timelineJammmingRight.clear();
      timelineJammmingLeft.to(jammmingLeft, {
        duration: 1,
        x: 400,
        y: 20,
        ease: "power1.out",
        yoyo: true,
      });
      timelineJammmingRight.to(jammmingRight, {
        duration: 1,
        x: -400,
        y: -20,
        ease: "power1.out",
        yoyo: true,
      });
    });

    jammming.addEventListener("mouseleave", () => {
      timelineJammmingLeft.clear();
      timelineJammmingRight.clear();
      timelineJammmingLeft.to(jammmingLeft, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power1.out",
      });
      timelineJammmingRight.to(jammmingRight, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power1.out",
      });
    });
  }, []);

  return (
    <div className="list-item">
      <div className="heading-container jammming" style={{ top: "0" }}>
        <div className="spotify-svg-container">
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
        </div>
        <div className="spotify-svg-container" style={{ top: "30%" }}>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
          <div className="spotify-svg jammming-left"></div>
          <div className="spotify-svg jammming-right"></div>
        </div>
        {numHeadings(7, "jammming ")}
        <div className="projects-subheading svgs jammming-svgs">
          <div className="react-svg language-svg" alt="react"></div>
          <div className="node-svg language-svg" alt="node"></div>
        </div>
      </div>
    </div>
  );
}
