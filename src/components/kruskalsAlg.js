import React from "react";
import { Link } from "react-router-dom";

const kruskalsAlg = () => {
  return (
    <div className="kruskals-page">
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

export default kruskalsAlg;
