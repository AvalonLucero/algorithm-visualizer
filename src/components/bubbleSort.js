import React from "react";
import { Link } from "react-router-dom";

const bubbleSort = () => {
  return (
    <div className="bubble-sort-page">
      <div>
        <Link to="/" className="nav-button">
          ⬅️ Back to Home
        </Link>
      </div>
      <div className="explanation">
      </div>
    </div>
  );
};

export default bubbleSort;
