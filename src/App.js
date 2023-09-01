import React, {useEffect } from "react";
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Snake from "./pages/Snake";
import Jammming from "./pages/Jammming";
import Bits from "./pages/Bits";
import PFive from "./pages/PFive";
import Portfolio from "./pages/Portfolio";
import McFlix from "./pages/McFlix";

import "./styles/App.css";

export default function App() {

  useEffect(() => {
    window.addEventListener('error', e => {
        if (e.message === 'ResizeObserver loop limit exceeded') {
            const resizeObserverErrDiv = document.getElementById(
                'webpack-dev-server-client-overlay-div'
            );
            const resizeObserverErr = document.getElementById(
                'webpack-dev-server-client-overlay'
            );
            if (resizeObserverErr) {
                resizeObserverErr.setAttribute('style', 'display: none');
            }
            if (resizeObserverErrDiv) {
                resizeObserverErrDiv.setAttribute('style', 'display: none');
            }
        }
    });
}, []);
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="snake" element={<Snake />} />
        <Route path="jammming" element={<Jammming />} />
        <Route path="bits" element={<Bits />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="pfive" element={<PFive />} />
        <Route path="mcflix" element={<McFlix />} />
      </Route>
    )
  );

  return (

    <RouterProvider router={router}>

    </RouterProvider>
  );
}
