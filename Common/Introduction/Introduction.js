import React from "react";
import intro from "./introductioncss.module.css";
const Introduction = () => {
  return (
    <div className={intro.container}>
      <div className={intro.innercontainer}>
        <img
          src="../intrologo.jpg"
          style={{ maxHeight: "340px", alignSelf: "center" }}
        />

        <div className={intro.text}>
          <div className={intro.intro}>About Us</div>
          Sky-Way Management Pvt. Ltd. has a main objective to deliver high
          quality, efficient manpower to our valued clients and mobilize
          Nepalese Job seekers to the world. The same time resolving the
          unemployment crisis in the country. And we like to ensure the healthy
          economy sound by earning the foreign currency from abroad to Nepal.
          <br /> In your personalized business, a valuable employee is the
          backbone of your establishment and without that element our link
          becomes non-effective. This is impressed in our objectives and gols in
          serving your human resources objectives.
          <br /> We personally want to extend our service with confidence to
          better serve you in your employee needs and requirements. We evaluate
          your employee standards. Dedicatation-commitment-communication and
          punctuality- Lets work together as a permanent team for a common goal.{" "}
          <br /> We can assure you of complete satisfaction with our style of
          operation confidently as well as with fruitful results. Sky-Way
          Management Pvt. Ltd. has resolved to bring about a change in the lives
          of our own fellowmen in Nepal, as well as companies who need their
          assistance.
        </div>
      </div>
    </div>
  );
};

export default Introduction;
