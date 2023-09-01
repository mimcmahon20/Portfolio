import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import { ReactLenis } from "@studio-freight/react-lenis";
import TransitionFromProject from "../components/TransitionFromProject";

export default function Home() {

  

  return (
    <div style={{backgroundColor: '#f3f3f3', position: 'relative'}}>
      <ReactLenis root>
        <Hero />
        <TransitionFromProject>
          <Projects />
        </TransitionFromProject>
        <About />
      </ReactLenis>
    </div>
  );
}
