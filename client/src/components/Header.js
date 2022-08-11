import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container-fluid">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link className="navbar-brand" to="/">
            Fake Store
          </Link>
          <form
            className="d-flex"
            style={{ width: "480px", marginLeft: "190px" }}
          >
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Products"
              aria-label="Search"
            />
          </form>
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ marginLeft: "60px" }}
          >
            <li className="nav-item">
              <Link className="navbar-brand" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="navbar-brand" to="/login">
                Login/Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
