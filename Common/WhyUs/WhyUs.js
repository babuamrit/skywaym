import React from "react";
import whyus from "./whyus.module.css";

const WhyUs = () => {
  return (
    <div
      style={{
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "40px",
        paddingBottom: "40px",
      }}
    >
      <div className={whyus.large}>Why US</div>
      <div className={whyus.small}>
        Quality, Honesty, Sincerity and Reliability are the commitment of the
        Skyway Management Pvt.Ltd. Yes obviously our first preference to provide
        you quality manpower in time and as your convenience. We are committed
        your satisfaction.
        <br />
        The services of our Sincere, Honest, Hardworking and Disciplined
        candidates will help to boost the business to the employer companies as
        well, in terms of proven moral and productivity. Skyway Management
        Pvt.Ltd. has confident that the Nepalese National will fit in and
        contribute to our client company with best.
        <br />
        The region for the provision of Manpower recruiting services to Foreign
        companies, which will help strengthen the financial condition of the
        Nation as well as of the candidates.
        <br />
        To achieve rapid profitable growth by ensuring that our clients needs
        are satisfied in an efficient and cost- effective manner.
      </div>
      <div className={whyus.large}>OUR MISSION</div>
      <div className={whyus.small}>
        To be a leading recruitment agency in the nation in the sector for
        fulfilling the manpower need in One- Go to the valued clients over the
        globe with the the tailored based program for all sectors’ manpower
        recruitment for the best result.
      </div>
      <div className={whyus.large}>OUR VISION</div>
      <div className={whyus.small}>
        we work hard to achieve our goals together as a team with a clear shared
        purpose. We adapt to our clients changing needs as well changes in the
        market to make sure we are a business of growth, success and happiness.
      </div>
    </div>
  );
};

export default WhyUs;
