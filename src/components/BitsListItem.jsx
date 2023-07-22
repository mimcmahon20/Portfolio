import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function BitsListItem(props) {
  const numHeadings = props.numHeadings;

  function create0s1s() {
    let divs = [];
    for (let numDivs = 0; numDivs < 10; numDivs++) {
      let div = "";
      for (let i = 0; i < 400; i++) {
        let random = Math.floor(Math.random() * 2);
        div += random;
      }
      divs.push(
        <div key={numDivs} className="bits">
          {div}
        </div>
      );
    }
    return divs;
  }

  useEffect(() => {
    //add a listener to bits class that moves a .box class within the list-item class when bits class is mouse entered
    const bitsList = document.querySelector(".bitsList");
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    let bitsEven = document.querySelectorAll(".bits:nth-child(even)");
    let bitsOdd = document.querySelectorAll(".bits:nth-child(odd)");

    bitsList.addEventListener("mouseenter", () => {
      tl.clear();
      tl.to(bitsEven, {
        duration: 0.5,
        x: 400,
        ease: "power1.out",
      });
      tl.to(
        bitsOdd,
        {
          duration: 0.5,
          x: -400,
          ease: "power1.out",
        },
        "<"
      );
    });

    bitsList.addEventListener("mouseleave", () => {
      tl.clear();
      tl.to(bitsEven, {
        duration: 0.5,
        x: 0,
        ease: "power1.out",
      });
      tl.to(
        bitsOdd,
        {
          duration: 0.5,
          x: 0,
          ease: "power1.out",
        },
        "<"
      );
    });
  }, []);

  return (
    <div className="list-item">
      <div className="heading-container bitsList">
        <div className="bits-container">{create0s1s()}</div>
        {numHeadings(10, "bits n bytes")}
        <div className="projects-subheading bits-svgs svgs">
          <div className="react-svg language-svg" alt="react"></div>
          <div className="node-svg language-svg" alt="node"></div>
        </div>
      </div>
    </div>
  );
}
