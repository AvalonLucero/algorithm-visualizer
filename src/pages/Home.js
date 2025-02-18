import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1>Algorithm Visualizer</h1>
      <p>Select an algorithm to visualize.</p>
      <Link to="/insertion-sort" className="nav-button">
        Insertion Sort
      </Link>
    </div>
  );
};

export default Home;
