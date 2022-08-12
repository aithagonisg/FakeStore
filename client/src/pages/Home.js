import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoutesBasic from "./Routes";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ height: "544px" }}>
        <RoutesBasic />
      </div>
      <Footer />
    </>
  );
}
