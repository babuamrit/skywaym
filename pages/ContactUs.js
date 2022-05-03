import React from "react";
import AppBar from "../Common/AppBar/AppBar";
import Footer from "../Common/Footer/Footer";
import License from "../Common/License/License";

const ContactUs = () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <License />
          <AppBar />
        </div>
        <div style={{ width: "100%", justifySelf: "flex-end" }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
