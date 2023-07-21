import React, { useRef, useEffect } from "react";
import Nav from "./Nav";
import HeroText from "./HeroText";
import HeroArrow from "./HeroArrow";
import "../styles/Hero.css";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const HeroRef = useRef(null);

//Animating the arrows
  useEffect(() => {
    let el = HeroRef.current;
    gsap.to(".arrow", {
      y: -150,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: el,
        start: "bottom bottom",
        end: "bottom 50%",
        scrub: true,
        markers: false,
      },
    });
  }, []);

//Animating the text
    // useEffect(() => {
    //     let el = HeroRef.current;
    //     gsap.to(".congratulations", {
    //         duration: 1,
    //         x: -150,
    //         opacity: 0,
    //         scrollTrigger: {
    //             trigger: el,
    //             start: "bottom+=100 bottom",
    //             end: "bottom center",
    //             scrub: 1,
    //             markers: false
    //         }
    //     });
    // });

    useEffect(() => {
        let el = HeroRef.current;
        gsap.to(".first-line", {
            duration: 1,
            x: 150,
            opacity: 0,
            scrollTrigger: {
                trigger: el,
                start: "bottom+=100 bottom",
                end: "bottom center",
                scrub: 1,
                markers: false
            }
        });
    });

    useEffect(() => {
        let el = HeroRef.current;
        gsap.to(".second-line", {
            duration: 1,
            x: -150,
            opacity: 0,
            scale: 0,
            scrollTrigger: {
                trigger: el,
                start: "bottom+=100 bottom",
                end: "bottom center",
                scrub: 1,
                markers: false
            }
        });
    });

    //animating the cursor and then switching between words
    const words = ['Developer', 'Friend', 'Engineer'];

    useEffect(() => {
        let el = HeroRef.current;
        gsap.to(".cursor", {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1,
            duration: 0.5,
        });
    }, []);

    useEffect(() => {
        let el = HeroRef.current;
        let tlMasterText = gsap.timeline({repeat: -1});
        words.forEach(word => {
            let tlText = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1});
            tlText.to(".words", {
                duration: 1,
                text: word,
                ease: "power2.inOut",
            });
            tlMasterText.add(tlText);
        });
    }, []);

  return (
    <div ref={HeroRef} className="hero">
      <Nav />
      <HeroText />
      
      <HeroArrow width={500} />
      <HeroArrow width={400} />
      <HeroArrow width={300} />
      <HeroArrow width={200} />
      <HeroArrow width={100} />
      <div style={{ height: "200vh" }}></div>
    </div>
  );
}
