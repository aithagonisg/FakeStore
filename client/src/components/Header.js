import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#03002f" }}
    >
      <div className="container-fluid">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: "24px" }}
            to="/"
          >
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
          <div
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{
              marginLeft: "60px",
              display: "flex",
              gap: "25px",
              fontSize: "20px",
            }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
            <Link
              to="/contact"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contact
            </Link>
            <Link
              to="/login"
              style={{ color: "white", textDecoration: "none" }}
            >
              Login/Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
