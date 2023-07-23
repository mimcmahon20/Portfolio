import React, {useEffect} from "react";
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
                start: "center center",
                end: "bottom center",
                scrub: true,
                markers: false,
            },
        });
    }, []);

   let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    return (
        <div className="about-transition">
            <SketchTransition style={{width: windowWidth, height: windowHeight}} className="sketchy"/>
        </div>
    )
}