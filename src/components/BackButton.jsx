import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

export default function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    let backBar = document.querySelector(".back-bar");

    let backButton = document.querySelector(".back-button");

    let backTl = gsap.timeline({});

    backButton.addEventListener(
      "mouseenter",
      () => {
        backTl.clear();

        backTl.to(backBar, {
          duration: 1,
          width: "25px",
          y: 0,
          ease: "power1.out",
          yoyo: true,
          repeat: -1,
        });
      },
      []
    );

    backButton.addEventListener("mouseleave", () => {
      backTl.clear();
      backTl.to(backBar, {
        duration: 0.5,
        width: "0px",
        y: 0,
        ease: "power1.out",
      });
    });
  }, []);

  return (
    <button className="back-button" onClick={goBack}>
      <div className="back-bar"></div>
    </button>
  );
}
