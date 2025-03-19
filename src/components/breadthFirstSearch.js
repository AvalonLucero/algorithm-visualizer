import React from "react";
import { Link } from "react-router-dom";

const breadthFirstSearch = () => {
  return (
    <div className="breath-first-search-page">
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

export default breadthFirstSearch;
