import React from "react";
import AppBar from "../Common/AppBar/AppBar";
import Banner from "../Common/Banner/Banner";
import Footer from "../Common/Footer/Footer";
import Galleery from "../Common/Gallery/Galleery";
import License from "../Common/License/License";

const Images = () => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <License />
      <AppBar />
      <Banner text="Images" />
      <Galleery />
      <div style={{ width: "100%", justifySelf: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Images;
