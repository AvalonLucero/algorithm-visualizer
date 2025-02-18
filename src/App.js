import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import InsertionSort from "./components/insertionSort";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insertion-sort" element={<InsertionSort />} />
      </Routes>
    </Router>
  );
}

export default App;
