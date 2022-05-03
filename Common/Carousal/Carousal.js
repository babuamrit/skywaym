import React from "react";
import carousal from "./Carousalcss.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Carousl = () => {
  return (
    <div className={carousal.cantainer} on>
      <Carousel
        style={{ width: "100%", height: "400px" }}
        showThumbs={false}
        axis="horizontal"
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src="/gf.jpg" style={{ width: "100%", height: "460px" }} />
        </div>
        <div>
          {" "}
          <img src="/2d.jpg" style={{ width: "100%", height: "460px" }} />
        </div>
        <div>
          <img src="/d3.jpg" style={{ width: "100%", height: "460px" }} />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousl;
