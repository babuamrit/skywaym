import React from "react";
import AppBar from "../Common/AppBar/AppBar";
import Banner from "../Common/Banner/Banner";
import Footer from "../Common/Footer/Footer";
import License from "../Common/License/License";
import Services from "../Common/Services/Services";

const Servic = () => {
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
      <Banner text="Services" />
      <Services noheading={true} />
      <div style={{ width: "100%", justifySelf: "flex-end" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Servic;
