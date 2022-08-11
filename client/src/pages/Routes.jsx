import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import hero3 from "./images/hero-3.jpg";

const Body = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 h-80" src={hero3} alt="First slide" />
        </div>
      </div>
    </div>
  );
};

function RoutesBasic() {
  return (
    <Routes>
      <Route path="/" element={<Body />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default RoutesBasic;
