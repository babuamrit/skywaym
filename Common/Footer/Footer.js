import React from "react";
import footercss from "./footercss.module.css";

const Footer = () => {
  return (
    <>
      <div className={footercss.container}>
        <div className={footercss.large}>Contact Us</div>
        <div className={footercss.large}>Organization Name</div>
        <div className={footercss.small}>SkyWay Management PVT Ltd</div>

        <div className={footercss.large}>Email</div>
        <div className={footercss.small}>info@skywaynepal.com</div>

        <div className={footercss.large}>Call Us</div>
        <div className={footercss.small}> +977-1-4460160, 4460697</div>
      </div>
      <div className={footercss.buttom}>
        Gulf Empire | All Rights Reserved © 2019, By: Radiant Infotech
      </div>
    </>
  );
};

export default Footer;
