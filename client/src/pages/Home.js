import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoutesBasic from "./Routes";

import "./Home.css";

export default function Home() {
  const height = window.screen.height;
  console.log(height);
  return (
    <div id="wrapper" style={{ display: "flex", flexDirection: "column" }}>
      <div className="header">
        <Header />
      </div>
      <div id="content">
        <RoutesBasic />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
