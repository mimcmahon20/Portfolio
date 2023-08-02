import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function McFlixListItem(props) {
  const numHeadings = props.numHeadings;

  useEffect(() => {
    //add a listener to snake class that moves a .box class within the list-item class when snake class is mouse entered
    const mcflix = document.querySelector(".mcflix");
    const rectangleStraight = document.querySelectorAll(".rectanglestraight");
    const rectangleAngled = document.querySelectorAll(".rectangleangled");
    let timelineMcflix = gsap.timeline();

    mcflix.addEventListener("mouseenter", () => {
      timelineMcflix.clear();
      console.log(rectangleStraight);
      timelineMcflix.to(rectangleStraight, {
        duration: .4,
        y: -200,
        stagger: .6,
        ease: "power2.out",
      });
      timelineMcflix.to(rectangleAngled, {
        delay: .4,
        duration: .4,
        y: -141,
        stagger: .2,
        ease: "power2.out",
      }, "<");
    });
    mcflix.addEventListener("mouseleave", () => {
      timelineMcflix.clear();
      timelineMcflix.to(rectangleAngled, {
        duration: .4,
        y: 0,
        ease: "power2.out",
      });
      timelineMcflix.to(rectangleStraight, {
        duration: .4,
        y: 0,
        ease: "power2.out",
      });
    });
  }, []);

  return (
    <div className="list-item mcflixListitem">
        <div className="recs">
        <div className="first-rec-cover">
          <div className="rectangle first-rec rectanglestraight"></div>
        </div>
        <div className="second-rec-cover">
          <div className="rectangle second-rec rectangleangled"></div>
        </div>
        <div className="third-rec-cover">
            <div className="rectangle third-rec rectangleangled"></div>
        </div>
        <div className="fourth-rec-cover">
          <div className="rectangle fourth-rec rectanglestraight"></div>
        </div>
      </div>
      
      {/* <div className="centeredM">M</div> */}
      <div className="heading-container mcflix">
        {numHeadings(8, "McFlix ")}
      </div>
      <div className="projects-subheading mcflix-svgs svgs">
        <div className="react-svg language-svg" alt="react"></div>
      </div>
    </div>
  );
}
