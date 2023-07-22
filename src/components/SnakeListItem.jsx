import React, { useEffect } from "react";
import "../styles/ListItem.css";
import { gsap } from "gsap";

export default function SnakeListItem(props) {
  const numHeadings = props.numHeadings;

  useEffect(() => {
    //add a listener to snake class that moves a .box class within the list-item class when snake class is mouse entered
    const snake = document.querySelector(".snake");
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
    });
    snake.addEventListener("mouseleave", () => {
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
    });
  }, []);

  return (
    <div className="list-item snakeList">
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
      <div className="projects-subheading snake-svgs svgs">
        <div className="html-svg language-svg" alt="html"></div>
        <div className="css-svg language-svg" alt="css"></div>
        <div className="js-svg language-svg" alt="js"></div>
      </div>
    </div>
  );
}
