import React, { useRef, useEffect } from "react";
import Nav from "./Nav";
import HeroText from "./HeroText";
// import MouseFollower from "./MouseFollower";
import "../styles/Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Scroller from "./Scroller";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const HeroRef = useRef(null);

  //animating the arrows
  useEffect(() => {
    const scroller = HeroRef.current.querySelector(".scroller");
    const firstLine = HeroRef.current.querySelector(".first-line");
    const secondLine = HeroRef.current.querySelector(".second-line");

    let HeroTimeline = gsap.timeline({});

    if (window.scrollY < 100) {
      //animating lines of text
      HeroTimeline.fromTo(
        firstLine,
        { opacity: 0, skewX: 15,skewY: 15, x: -10, text: "" },
        { opacity: 1, skewX: 0,skewY: 0, x: 0, text: "You just found your", duration: 0.4, delay: 0.6 }
      );
      //animate the letters to fall in one at a time
        

      HeroTimeline.fromTo(
        secondLine,
        { opacity: 0, skewX: 15, skewY: 15, x: -10, text: "" },
        { opacity: 1, skewX: 0, skewY: 0, x: 0, text: 'next', duration: 0.4, delay: 0.2 },
        "<"
      );

      //animating arrows
      HeroTimeline.fromTo(
        scroller,
        { opacity: 0 },
        { delay: 0.4, opacity: 1, duration: 0.2 }
      );

      //animating small scroll to projects in bottom right
      HeroTimeline.fromTo(
        ".scroll-to-projects",
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.5 },
        "-=2"
      );

      HeroTimeline.fromTo(
        scroller,
        { y: 0 },
        {
          y: 250,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".hero",
            start: "50% 50%",
            end: "bottom 50%",
            scrub: true,
            markers: false,
          },
        }
      );
    }
  }, []);

  //animating the cursor
  useEffect(() => {
    gsap.to(".cursor", {
      opacity: 0,
      ease: "linear",
      repeat: -1,
      duration: 0.5,
    });
  }, []);

  //animating the words
  const words = [
    "Developer",
    "Engineer",
    "Friend",
    "Designer",
    "Creator",
    "Programmer",
  ];
  useEffect(() => {
    let tlMasterText = gsap.timeline({ repeat: -1, delay: 1.2 });
    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 0.4 });
      tlText.to(".words", {
        duration: 1,
        text: word,
        ease: "power2.inOut",
      });
      tlMasterText.add(tlText);
    });
  });

  // function calcArrows(height) {
  //   let arrows = [];
  //   for (let i = 0; i < 8; i++) {
  //     arrows.push(<HeroArrow key={i} width={height - i * 100 + 50} />);
  //   }
  //   return arrows;
  // }

  return (
    <div ref={HeroRef} className="hero">
      <Nav />
      <HeroText />
      <div className="arrows-container">
        {/* {calcArrows(height)} */}
        <Scroller></Scroller>
        <h3 className="scroll-to-projects">Scroll for projects</h3>
      </div>
    </div>
  );
}
