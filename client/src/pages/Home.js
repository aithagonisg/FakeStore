import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoutesBasic from "./Routes";

export default function Home() {
  const height = window.screen.height;
  console.log(height);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Header />
      </div>
      <div style={{ height: height - 168 }}>
        <RoutesBasic />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
