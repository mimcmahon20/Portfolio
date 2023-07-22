import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function JammmingListItem(props) {
  const numHeadings = props.numHeadings;

  useEffect(() => {
    //add a listener to snake class that moves a .box class within the list-item class when snake class is mouse entered
    const jammming = document.querySelector(".jammming");
    const headingContainerJammming =
      document.querySelectorAll(".heading-container")[1];
    const headingJammming = document.querySelectorAll(".projects-heading")[1];
    const subheadingJammming = document.querySelectorAll(
      ".projects-subheading"
    )[1];
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    let jammmingLeft = document.querySelectorAll(".jammming-left");
    let jammmingRight = document.querySelectorAll(".jammming-right");

    let timelineJammmingLeft = gsap.timeline({
      defaults: { ease: "linear" },
    });

    let timelineJammmingRight = gsap.timeline({
      defaults: { ease: "linear" },
    });

    jammming.addEventListener("mouseenter", () => {
      timelineJammmingLeft.clear();
      timelineJammmingRight.clear();
      tl.clear();
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
      tl.to(
        headingContainerJammming,
        {
          ease: "Power2.easeOut",
          duration: 0.5,
          backgroundColor: "#060606",
          color: "#f3f3f3",
        },
        "-=0.5"
      );
      tl.to(
        headingJammming,
        { ease: "Power2.easeOut", duration: 0.5, color: "#f3f3f3" },
        "-=0.5"
      );
      tl.to(
        subheadingJammming,
        { ease: "Power2.easeOut", duration: 0.5, color: "#f3f3f3" },
        "-=0.5"
      );
    });
    jammming.addEventListener("mouseleave", () => {
      tl.clear();
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
      tl.to(
        headingContainerJammming,
        {
          ease: "Power2.easeOut",
          duration: 0.5,
          backgroundColor: "#f3f3f3",
          color: "#060606",
        },
        "-=0.5"
      );
      tl.to(
        headingJammming,
        { ease: "Power2.easeOut", duration: 0.5, color: "#060606" },
        "-=0.5"
      );
      tl.to(
        subheadingJammming,
        { ease: "Power2.easeOut", duration: 0.5, color: "#f3f3f3" },
        "-=0.5"
      );
    });
  }, []);

  return (
    <div className="list-item">
      <div className="heading-container jammming" style={{top: '0'}}>
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
        <div className="spotify-svg-container" style={{top: '30%'}}>
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
        {numHeadings(11, "jammming")}
      </div>
      
    </div>
  );
}
