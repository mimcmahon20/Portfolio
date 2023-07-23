import React, { useEffect } from "react";
import Nav from "../components/Nav";
import "../styles/Snake.css";

export default function Snake() {
  //we will just set the window y to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Nav />
      <h1>Snake</h1>
      
    </div>
  );
}
