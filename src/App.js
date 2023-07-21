import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Snake from "./pages/Snake";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Snake" element={<Snake />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
