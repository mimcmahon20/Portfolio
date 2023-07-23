import React, { useEffect } from "react";
import Nav from "../components/Nav";
import SnakeListItem from "../components/SnakeListItem";
import "../styles/Snake.css";
import TransitionToProject from "../components/TransitionToProject";

export default function Snake() {
  function numHeadings(num, name) {
    let headings = [];
    for (let i = 0; i < num; i++) {
      headings.push(
        <h1 key={i * 132} className="projects-heading">
          {name}
        </h1>
      );
    }
    return headings;
  }

  //we will just set the window y to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <TransitionToProject>
        <div className="transition"></div>
        <div className="snake-project-page">
          <SnakeListItem
            numHeadings={numHeadings}
            style={{ position: "absolute", top: "0" }}
          ></SnakeListItem>
          <h1>Snake</h1>
        </div>
      </TransitionToProject>
    </div>
  );
}
