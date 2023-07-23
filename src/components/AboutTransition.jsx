import React, {useEffect, useState} from "react";
import "../styles/About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SketchTransition from "./SketchTransition";
gsap.registerPlugin(ScrollTrigger);

export default function AboutTransition() {
    
    console.log(document.querySelector(".sketchy"));



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
                start: "center center",
                end: "bottom center",
                scrub: true,
                markers: false,
            },
        });
    }, []);

   let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    console.log(windowHeight);

    function handleMouseClick() {
        console.log("click");
    }

    function windowResized() {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
    }

    return (
        <div className="about-transition">
            <SketchTransition style={{width: windowWidth, height: windowHeight}} className="sketchy"/>
        </div>
    )
}