import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Algorithm Visualizer</h1>
      <p>Asymptotic notation</p>
      <p>Select an algorithm to visualize.</p>
      <Link to="/insertion-sort" className="nav-button">
        Insertion Sort
      </Link>
      <Link to="/binary-search" className="nav-button">
        Binary Search
      </Link>
      <div>Divide and Conquer</div>
      <Link to="/merge-sort" className="nav-button">
        Merge Sort
      </Link>
      <Link to="/quick-sort" className="nav-button">
        Quick Sort
      </Link>
      <Link to="/bubble-sort" className="nav-button">
        Bubble/Selection Sort
      </Link>
      <div>Greedy Algorithm</div>
      <Link to="/dijkstras-alg" className="nav-button">
        Dijkstra's Algorithm
      </Link>
      <Link to="/kruskals-alg" className="nav-button">
        Kruskal's Algorithm
      </Link>
      <div>Graph Traversals</div>
      <Link to="/breadth-first-search" className="nav-button">
        Breadth-first Search
      </Link>
      <Link to="/depth-first-search" className="nav-button">
        Depth-first Search
      </Link>
    </div>
  );
};

export default Home;
