import React from "react";
import AppBar from "../Common/AppBar/AppBar";
import Banner from "../Common/Banner/Banner";
import Footer from "../Common/Footer/Footer";
import Introduction from "../Common/Introduction/Introduction";
import License from "../Common/License/License";

const AboutUs = () => {
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
      <Banner text="About Us" />
      <Introduction />
      <div style={{ width: "100%", justifySelf: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
