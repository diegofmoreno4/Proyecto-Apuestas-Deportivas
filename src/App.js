import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Predictions from "./Components/Predictions/Predictions";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/predictions/:id" element={<Predictions />} />
      </Routes>
    </div>
  );
}

export default App;
