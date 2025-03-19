import React from "react";
import { Link } from "react-router-dom";
import "./pageStyler.css";

const MergeSort = () => {
  return (
    <div className="merge-sort-page">
      <div>
        <Link to="/" className="nav-button">
          ⬅️ Back to Home
        </Link>
      </div>
      <div className="explanation">
        <h2>Merge Sort</h2>
        <p>
          Merge sort is a divide-and-conquer algorithm that sorts an array by
          recursively splitting it into halves, sorting each half, and then
          merging the sorted halves back together.
        </p>
        <p>
          It has a time complexity of O(n log n) and is stable, making it
          efficient for large datasets.
        </p>
      </div>
      <div className="explanation"></div>
      <div className="visualization"></div>
    </div>
  );
};

export default MergeSort;
