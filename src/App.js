import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import InsertionSort from "./components/insertionSort";
import BinarySearch from "./components/binarySearch";
import MergeSort from "./components/mergeSort";
import QuickSort from "./components/quickSort";
import BubbleSort from "./components/bubbleSort";
import DijkstrasAlg from "./components/dijkstrasAlg";
import KruskalsAlg from "./components/kruskalsAlg";
import BreadthFirstSearch from "./components/breadthFirstSearch";
import DepthFirstSearch from "./components/depthFirstSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insertion-sort" element={<InsertionSort />} />
        <Route path="/binary-search" element={<BinarySearch />} />
        <Route path="/merge-sort" element={<MergeSort />} />
        <Route path="/quick-sort" element={<QuickSort />} />
        <Route path="/bubble-sort" element={<BubbleSort />} />
        <Route path="/dijkstras-alg" element={<DijkstrasAlg />} />
        <Route path="/kruskals-alg" element={<KruskalsAlg />} />
        <Route path="/breadth-first-search" element={<BreadthFirstSearch />} />
        <Route path="/depth-first-search" element={<DepthFirstSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
