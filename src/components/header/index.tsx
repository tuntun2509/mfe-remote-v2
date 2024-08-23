import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>home</Link>
          </li>
          <li>
            <Link to={`/test1`}>Test 1</Link>
          </li>
          <li>
            <Link to={`/test2`}>Test 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
