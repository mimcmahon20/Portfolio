import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Snake from "./pages/Snake";
import Layout from "./pages/Layout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Snake" element={<Snake />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
