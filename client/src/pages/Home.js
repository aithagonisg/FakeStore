import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RoutesBasic from "./Routes";
import "./Home.css";
import SnackbarToast from "../utils/SnackbarToast";
import Progress from "../utils/Progress";

export default function Home() {
  return (
    <div id="wrapper" style={{ display: "flex", flexDirection: "column" }}>
      <Progress />
      <SnackbarToast />
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
