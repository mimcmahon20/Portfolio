import React from "react";
import "../styles/ProjectsIntro.css";
// import { useRef, useEffect } from "react";
// import { gsap } from "gsap";

export default function ProjectsIntro() {
//     const ProjectsIntroRef = useRef(null);


//     useEffect(() => {
//         let el = ProjectsIntroRef.current;
//         let timelineProjectsIntro = gsap.timeline({
//           scrollTrigger: {
//             trigger: el,
//             start: "center center",
//             end: "bottom bottom",
//             scrub: true,
//             markers: false,
//           },
//         });
//         timelineProjectsIntro.to(".projectsIntro-header", {
//             duration: 1,
//             x: -document.documentElement.clientWidth / 2 - 1,
//             opacity: 1,
//             ease: "power2.Out",
//             scrollTrigger: {
//                 trigger: ".projectsIntro",
//                 start: "top top",
//                 end: "center top",
//                 scrub: true,
//                 markers: true,
//             },
//         });
// }, [ProjectsIntroRef]);

    return (
        <div className="projectsIntro">
            <h2 className="projectsIntro-header">Work & Projects</h2>
        </div>
      );
}