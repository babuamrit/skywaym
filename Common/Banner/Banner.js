import React from "react";
import banner from "./banner.module.css";
const Banner = (props) => {
  return <div className={banner.container}>{props.text}</div>;
};

export default Banner;
