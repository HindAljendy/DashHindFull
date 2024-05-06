import React from "react";
import { Link } from "react-router-dom";
import "./StyleSidebar.css";

const TheSidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/projects"> products</Link>
        </li>
        <li>
          <Link to="/messages">Messages</Link>
        </li>
      </ul>
    </div>
  );
};

export default TheSidebar;
