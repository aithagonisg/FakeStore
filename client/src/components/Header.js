import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserInfo from "./userInfo/UserInfo";
import { Link, Redirect } from "react-router-dom";
import Cart from "./cart/Cart";

export default function Header() {
  const token = localStorage.getItem("token");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [authToken, setAuthToken] = useState("");
  const [info, setInfo] = useState({});
  const userData = useSelector((state) => state.userInfo);
  useEffect(() => {
    setAuthToken(token);
    setInfo(userInfo);
  }, [token, userData]);

  return (
    <nav
      style={{
        backgroundColor: "#03002f",
        height: "48px",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            flexBasis: "25%",
          }}
          to="/"
        >
          Fake Store
        </Link>
        <form className="d-flex" style={{ flexBasis: "35%" }}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Products"
            aria-label="Search"
          />
        </form>
        <div
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "20px",
            justifyContent: "flex-end",
          }}
        >
          {authToken ? (
            <>
              <Cart />
              <UserInfo info={info} />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
