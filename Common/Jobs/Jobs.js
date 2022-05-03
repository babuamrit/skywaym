import React from "react";
import job from "./jobscss.module.css";
const Jobs = () => {
  return (
    <div className={job.container}>
      <div className={job.heading}>Job Opening </div>
      <div className={job.innercontainer}>
        <JobOpen imge="/j1.jpg" text="Constructions Industries" />
        <JobOpen imge="/j2.jpg" text="Security Company" />
        <JobOpen imge="/j3.jpg" text="Hotels/Resorts/Restaurant" />
      </div>

      <div className={job.innercontainer}>
        <JobOpen imge="/j4.PNG" text="Constructions Industries" />
        <JobOpen imge="/j5.jpg" text="Security Company" />
        <JobOpen imge="/j6.jpg" text="Hotels/Resorts/Restaurant" />
      </div>

      <div className={job.innercontainer}></div>
    </div>
  );
};

export default Jobs;

const JobOpen = (props) => {
  const [ishover, changeHover] = React.useState(false);

  return (
    <div
      style={{
        width: "310px",
        height: "220px",
        positionn: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "22px",
        fontWeight: "700",
        color: "white",
        backgroundBlendMode: "darken",
      }}
      onMouseOver={() => {
        changeHover(true);
      }}
      onMouseOut={() => {
        changeHover(false);
      }}
    >
      <img
        src={props.imge}
        style={{ filter: "brightness(70%)", width: "310px", height: "220px" }}
      />
      <div
        style={{ position: "absolute", marginTop: ishover ? "100px" : "160px" }}
      >
        <div style={{ color: "white" }}>{props.text}</div>
        {ishover && (
          <div
            style={{
              width: "100px",
              height: "25px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "normal",
              borderRadius: "25px",
              fontSize: "13px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            View Jobs
          </div>
        )}
      </div>
    </div>
  );
};
