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

  // useLayoutEffect(() => {
  //   const ctx = gsap.context((self) => {
  //       self.HeroRef = HeroRef;
  //   })
  // }, HeroRef);

  //Animating the arrows
  useEffect(() => {
    let el = HeroRef.current;


    gsap.to(".first-line", {
      duration: 1,
      opacity: 1,
    })

    gsap.to(".second-line",{
      duration: 1,
      opacity: 1,
      delay: 1,
    })

    gsap.to(".arrow", {
      opacity: 1,
      duration: 1,
      delay: 1,
      stagger: 0.1,
    });

    let timelineHero = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false,
      },
    });
    //arrows
    timelineHero.to(".arrow", {
      y: -500,
      opacity: 0,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: el,
        start: "bottom bottom",
        end: "bottom 50%",
        scrub: true,
        markers: false,
      },
    });
    //animating the hero text
    timelineHero.to(".first-line", {
      duration: 1,
      x: -1300,
      scrollTrigger: {
        trigger: el,
        start: "bottom+=100 bottom",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    timelineHero.to(".second-line", {
      duration: 1,
      x: 1300,
      delay: 2,
      scrollTrigger: {
        trigger: el,
        start: "bottom+=100 bottom",
        end: "bottom center",
        scrub: 1,
        markers: false,
      },
    });

    timelineHero.to(
      ".scroll-to-projects",
      {
        duration: 1,
        opacity: 0,
        scrollTrigger: {
          trigger: el,
          start: "bottom+=100 bottom",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
      },
      ">3"
    );
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
  const words = [
    "Developer",
    "Friend",
    "Engineer",
    "Designer",
    "Creator",
    "Programmer",
  ];
  //animating the words
  useEffect(() => {
    let tlMasterText = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tlText = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tlText.to(".words", {
        duration: 1,
        text: word,
        ease: "power2.inOut",
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
