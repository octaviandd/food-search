/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="icon-bar">
        <Link to="/food-search">
          <i className="fas fa-utensils"></i>
        </Link>

        <Link to="/macro-calculator">
          <i className="fas fa-calculator"></i>
        </Link>

        <Link to="/recipes">
          <i className="fas fa-pizza-slice"></i>
        </Link>
      </div>
    </div>
  );
}
