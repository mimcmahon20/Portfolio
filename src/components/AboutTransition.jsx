import React, {useEffect, useState} from "react";
import "../styles/About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SketchTransition from "./SketchTransition";
gsap.registerPlugin(ScrollTrigger);

export default function AboutTransition() {
    
    useEffect(() => {
        let timelineAbout = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-transition",
                start: "center center",
                end: "bottom bottom",
                scrub: true,
                markers: false,
            },
        });

        timelineAbout.to(".about-transition", {
            duration: 1,
            backgroundColor: "#0a0a0a",
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-transition",
                start: "center bottom",
                end: "top top",
                scrub: true,
                markers: true,
            },
        });
    }, []);

   let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    console.log(windowHeight);


    return (
        <div className="about-transition">
            <SketchTransition style={{width: windowWidth, height: windowHeight}}/>
        </div>
    )
}