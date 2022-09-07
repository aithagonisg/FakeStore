import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import hero3 from "./images/hero-2.jpg";
import Products from "./Products/Products";
export const Body = () => {
  const [isTokenAvilable, setTokenAvailable] = useState("");
  const token = localStorage.getItem("token");
  const data = useSelector((state) => state.userInfo);
  useEffect(() => {
    setTokenAvailable(token);
  }, [token, data]);

  return (
    <>
      {isTokenAvilable ? (
        <>
          <Products />
        </>
      ) : (
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100"
                style={{ height: "520px" }}
                src={hero3}
                alt="First slide"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
