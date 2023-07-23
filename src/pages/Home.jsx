import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Home() {

  return (
    <div>
      <ReactLenis root>
        <Hero />
        <Projects />
        <About />
      </ReactLenis>
    </div>
  );
}

