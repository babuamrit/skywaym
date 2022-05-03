import React from "react";
import gallery from "./gallery.module.css";

const Galleery = () => {
  return (
    <div className={gallery.container}>
      <div className={gallery.linecontainer}>
        <img src="/1dubai.jpg" className={gallery.image} />
        <img src="/c1.jpg" className={gallery.image} />
        <img src="/d6d.jpg" className={gallery.image} />
        <img src="/d3.jpg" className={gallery.image} />
      </div>
      <div className={gallery.linecontainer}>
        <img src="/dubai.jpg" className={gallery.image} />
        <img src="/d6d.jpg" className={gallery.image} />
        <img src="/1dubai.jpg" className={gallery.image} />
        <img src="/dubai.jpg" className={gallery.image} />
      </div>
    </div>
  );
};

export default Galleery;
