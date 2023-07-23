import React, { useEffect, useRef } from "react";
import "../styles/About.css";
import "../fonts/fonts.css";
import AboutContent from "./AboutContent";
import AboutTransition from "./AboutTransition";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function About() {
  const aboutRef = useRef(null);

    useEffect(() => {
        let el = aboutRef.current;
        let timelineAbout = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "center center",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        });

        timelineAbout.to(".about-name", {
            duration: 1,
            text: "Meet Maguire...",
            ease: "none",
            scrollTrigger: {
                trigger: ".about-name",
                start: "center bottom",
                end: "center center",
                scrub: true,
                markers: false,
            },
        });

        timelineAbout.to(".headshot", {
            duration: 1,
            y: -250,
            borderRadius: "50%",
            ease: "none",
            scrollTrigger: {
                trigger: ".about-name",
                start: "center bottom",
                end: "center center",
                scrub: true,
                markers: false,
            },
        });
       
    }, [aboutRef]);

  return (
    <div className="about">
        <AboutTransition/>
      <div className="about-intro">
        <h1 className="about-name" alt="Meet Maguire"> </h1>
        <div className="headshot"></div>
      </div>
        <AboutContent/>
    </div>
  );
}
