import React, { useRef, useEffect } from "react";
import Nav from "./Nav";
import HeroText from "./HeroText";
import HeroArrow from "./HeroArrow";
import "../styles/Hero.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const HeroRef = useRef(null);

  //animating the arrows 
  useEffect(() => {
    const arrows = HeroRef.current.querySelectorAll(".arrow");
    const firstLine = HeroRef.current.querySelector(".first-line");
    const secondLine = HeroRef.current.querySelector(".second-line");

    let HeroTimeline = gsap.timeline({});

    if(window.scrollY < 100) {
      //animating lines of text
      HeroTimeline.fromTo(firstLine, { scale: 0 }, { scale: 1, duration: 1, delay: 0.5});
      HeroTimeline.fromTo(secondLine, { scale: 0 }, { scale: 1, duration: 1, delay: 0.5}, "<");
      
      //animating arrows
      HeroTimeline.fromTo(arrows, { scale: 0, y: -50}, { delay: 0.5, scale: 1, y: 0, stagger: 0.1, duration: .5});
  
      //animating small scroll to projects in bottom right
      HeroTimeline.fromTo(".scroll-to-projects", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.5 }, "-=2");

      HeroTimeline.fromTo(arrows, {y: 0}, { y: -500, duration: 1, stagger: .1, scrollTrigger: {
        trigger: ".hero",
        start: "50% 50%",
        end: "bottom 50%",
        scrub: true,
        markers: false,
      }})
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
    let tlMasterText = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tlText.to(".words", {
        duration: 1,
        text: word,
        ease: "power2.inOut",
        backgroundImage: "linear-gradient(150deg, rgba(0,255,21,1) 25%, rgba(0,255,244,1) 75%)",
      });
      tlMasterText.add(tlText);
    });
  });

  function calcArrows(height) {
    let arrows = [];
    for (let i = 0; i < 8; i++) {
      arrows.push(<HeroArrow key={i} width={height - i * 100 + 50} />);
    }
    return arrows;
  }

  let height = window.innerHeight / 2;

  window.addEventListener("resize", () => {
    height = window.innerHeight / 2;
  });

  return (
    <div ref={HeroRef} className="hero">
      <Nav />
      <HeroText />
      <div className="arrows-container">
        {calcArrows(height)}
        <h3 className="scroll-to-projects">Scroll for projects</h3>
      </div>
    </div>
  );
}
