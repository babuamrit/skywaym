import React from "react";
import teamcss from "./teamscss.module.css";

const Clients = () => {
  return (
    <div className={teamcss.container}>
      <div className={teamcss.heading}> Our Team</div>
      <div className={teamcss.innercontainer}>
        <Client
          imge="/bhupendra.PNG"
          text1="Bhupendra Khadriya"
          text2="Chairman"
        />
        <Client imge="/manoj.PNG" text1="Bhupendra Khadriya" text2="Chairman" />
        <Client imge="/cd12.PNG" text1="Bhupendra Khadriya" text2="Chairman" />
        <Client
          imge="/tulashi.PNG"
          text1="Bhupendra Khadriya"
          text2="Chairman"
        />
      </div>
    </div>
  );
};

export default Clients;

const Client = (props) => {
  const [ishover, changeHover] = React.useState(false);

  return (
    <div
      style={{
        width: "210px",
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
        style={{ filter: "brightness(70%)", width: "210px", height: "220px" }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: ishover ? "100px" : "160px",
          fontSize: "16px",
        }}
      >
        <div style={{ color: "white" }}>{props.text1}</div>
        <div style={{ color: "white" }}>{props.text2}</div>
      </div>
    </div>
  );
};
