import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactLenis } from '@studio-freight/react-lenis';
import Home from "./pages/Home";
import Snake from "./pages/Snake";
import "./styles/App.css";

export default function App() {
  return (
    <BrowserRouter>
      <ReactLenis root>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Snake" element={<Snake />} />
      </Routes>
      </ReactLenis>
    </BrowserRouter>
  );
}
