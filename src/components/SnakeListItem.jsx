import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function SnakeListItem(props) {
  const numHeadings = props.numHeadings;

  useEffect(() => {
    //add a listener to snake class that moves a .box class within the list-item class when snake class is mouse entered
    const snake = document.querySelector(".snake");
    const headingContainer = document.querySelector(".heading-container");
    const heading = document.querySelector(".projects-heading");
    const subheading = document.querySelector(".projects-subheading");
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    let boxesLarge = document.querySelectorAll(".box-large");
    let boxesSmall = document.querySelectorAll(".box-small");

    let timelineSnake = gsap.timeline({
      defaults: { ease: "linear" },
    });

    let timelineSnakeSmall = gsap.timeline({
      defaults: { ease: "linear" },
    });

    snake.addEventListener("mouseenter", () => {
      timelineSnake.clear();
      timelineSnakeSmall.clear();
      tl.clear();
      timelineSnake.to(boxesLarge, {
        duration: 1,
        x: 400,
        y: 0,
        ease: "power1.out",
        yoyo: true,
      });
      timelineSnakeSmall.to(boxesSmall, {
        duration: 1,
        x: 0,
        y: 200,
        ease: "power1.out",
        yoyo: true,
      });
      tl.to(
        headingContainer,
        {
          ease: "Power2.easeOut",
          duration: 0.5,
          backgroundColor: "#060606",
          color: "#f3f3f3",
        },
        "-=0.5"
      );
      tl.to(
        heading,
        { ease: "Power2.easeOut", duration: 0.5, color: "#f3f3f3" },
        "-=0.5"
      );
      tl.to(
        subheading,
        { ease: "Power2.easeOut", duration: 0.5, color: "#f3f3f3" },
        "-=0.5"
      );
    });
    snake.addEventListener("mouseleave", () => {
      tl.clear();
      timelineSnake.clear();
      timelineSnakeSmall.clear();
      timelineSnake.to(boxesLarge, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power1.out",
      });
      timelineSnakeSmall.to(boxesSmall, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: "power1.out",
      });
      tl.to(
        headingContainer,
        {
          ease: "Power2.easeOut",
          duration: 0.5,
          backgroundColor: "#f3f3f3",
          color: "#060606",
        },
        "-=0.5"
      );
      tl.to(
        heading,
        { ease: "Power2.easeOut", duration: 0.5, color: "#060606" },
        "-=0.5"
      );
      tl.to(
        subheading,
        { ease: "Power2.easeOut", duration: 0.5, color: "#f3f3f3" },
        "-=0.5"
      );
    });
  }, []);

  return (
    <div className="list-item">
      <div className="box box-large"></div>
      <div className="box box-large"></div>
      <div className="box box-large"></div>
      <div className="box box-large"></div>
      <div className="food food-large"></div>
      <div className="box box-small"></div>
      <div className="box box-small"></div>
      <div className="box box-small"></div>
      <div className="box box-small"></div>
      <div className="food food-small"></div>
      <div className="heading-container snake">{numHeadings(10, "snake")}</div>
      <h2 className="projects-subheading">HTML, CSS & Javascript</h2>
    </div>
  );
}
