import React from "react";
import AppBar from "../Common/AppBar/AppBar";
import Banner from "../Common/Banner/Banner";
import Footer from "../Common/Footer/Footer";
import License from "../Common/License/License";
import WhyUs from "../Common/WhyUs/WhyUs";

const WhyS = () => {
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
      <Banner text="Why Us" />
      <WhyUs />
      <div style={{ width: "100%", justifySelf: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};

export default WhyS;
