import React from "react";
import header from "./header.module.css";
const Header = () => {
  return (
    <div className={header.container}>
      <div className={header.logocontainer}>
        <img
          src="/logo.PNG"
          className={header.logo}
          style={{ height: "55px" }}
        />
        <div className={header.logodesc}>
          <div className={header.logoheading}> SKY-WAY </div>MANAGMENT PVT LTD
        </div>
      </div>

      <div className={header.socialmedia}>
        <img src="/facebook.png" style={{ height: "16px" }} />
        <img src="/instagram.jpg" style={{ height: "16px" }} />
        <img src="/youtube.jpg" style={{ height: "16px", width: "20px" }} />
      </div>
    </div>
  );
};

export default Header;
