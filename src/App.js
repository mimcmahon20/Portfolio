import React from "react";
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home";
import Snake from "./pages/Snake";
import Jammming from "./pages/Jammming";

import "./styles/App.css";

export default function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="snake" element={<Snake />} />
        <Route path="jammming" element={<Jammming />} />
        
      </Route>
    )
  );

  return (

    <RouterProvider router={router}>

    </RouterProvider>


    // <BrowserRouter>
    //   <ReactLenis root>
    //   <Routes>
    //   {/* <Route path="/" element={<Nav />}> */}
    //       <Route path="/" index element={<Home />} />
    //       <Route path="snake" element={<Snake />} />
    //       <Route path="jammming" element={<Jammming />} />
          
    //     {/* <Route path="/" element={<Home />}></Route>
    //     <Route path="/Snake" element={<Snake />} /> */}
    //   </Routes>
    //   </ReactLenis>
    // </BrowserRouter>
  );
}
