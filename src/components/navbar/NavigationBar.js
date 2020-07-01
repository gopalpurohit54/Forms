import React from "react";
import { Link } from "react-router-dom";

function NavigationBar(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="  navbar-brand">
            Registration
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/view">View</Link>
          </li>
          <li>
            <Link to="/pattern">Pattern</Link>
          </li>
          <li>
            <Link to="/array">Array</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
