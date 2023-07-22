import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactLenis } from '@studio-freight/react-lenis';
import Home from "./pages/Home";
import Snake from "./pages/Snake";
import Jammming from "./pages/Jammming";
import Nav from "./components/Nav";


import "./styles/App.css";

export default function App() {
 
  

  return (
    <BrowserRouter>
      <ReactLenis root>
      <Routes>
      {/* <Route path="/" element={<Nav />}> */}
          <Route path="/" index element={<Home />} />
          <Route path="snake" element={<Snake />} />
          <Route path="jammming" element={<Jammming />} />
          
        {/* <Route path="/" element={<Home />}></Route>
        <Route path="/Snake" element={<Snake />} /> */}
      </Routes>
      </ReactLenis>
    </BrowserRouter>
  );
}
