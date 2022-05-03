import React from "react";
import service from "./servicecss.module.css";
const Services = (props) => {
  return (
    <div className={service.container}>
      {!props.noheading && <div className={service.heading}>Services</div>}

      <div className={service.servicecontainer}>
        <Label labelimage="/people.png" text="Human Resource Planning" />
        <Label labelimage="/handshake.png" text="Local Outsourcing " />
        <Label labelimage="/lens.png" text="Overseas Recruitment " />
        <Label labelimage="/orientation.png" text="Orientation and Training" />
      </div>
      <div className={service.servicecontainer}>
        <Label labelimage="/career.png" text="Career Planning" />
        <Label labelimage="/health.png" text="Industrial Relations" />
        <Label labelimage="/law.png" text="Health and Safety" />
        <Label labelimage="/industrial.png" text="Labor Law Compliance" />
      </div>
      <div className={service.servicecontainer}>
        <Label labelimage="/emigration.png" text="Emigration" />
        <Label labelimage="/visa.png" text="Visa Consultation" />
        <div style={{ height: "50px", flex: "2" }} />
      </div>
    </div>
  );
};

export default Services;

const Label = (props) => {
  const [hover, changehover] = React.useState(false);
  return (
    <div
      style={{ display: "flex", flex: "1" }}
      onMouseOver={() => {
        changehover(true);
      }}
      onMouseOut={() => {
        changehover(false);
      }}
    >
      <div
        style={{
          borderRadius: "85px",
          height: "50px",
          width: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: hover ? "red" : "#0a4d8f",
        }}
      >
        <img style={{ width: "40px", height: "40px" }} src={props.labelimage} />
      </div>
      <div
        style={{
          color: hover ? "red" : "#624444",
          alignSelf: "center",
          marginLeft: "10px",
          fontSize: "16px",
          fontWeight: "700",
          textTransform: "uppercase",
        }}
      >
        {props.text}
      </div>
    </div>
  );
};
