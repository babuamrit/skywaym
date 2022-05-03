import { useRouter } from "next/router";
import React from "react";
import appbar from "./app-bar.module.css";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Dropdown, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AppBar = () => {
  const router = useRouter();
  return (
    <div className={appbar.container}>
      <div className={appbar.logocontainer}>
        <img
          src="/logo.png"
          className={appbar.logo}
          style={{ height: "55px" }}
        />
        <div className={appbar.logodesc}>
          <div className={appbar.logoheading}> SKY-WAY </div>MANAGMENT PVT LTD
        </div>
      </div>
      <div className={appbar.servicecontainer}>
        <Button
          text="HOME"
          handler={() => {
            router.push("/");
          }}
        />
        <Button
          text="ABOUT US"
          handler={() => {
            router.push("AboutUs");
          }}
        />
        <Button
          text="SERVICES"
          handler={() => {
            router.push("/Services");
          }}
        />
        <Button
          text="WHY US"
          handler={() => {
            router.push("/WhyUs");
          }}
        />
        <Button
          text="CLIENT"
          handler={() => {
            router.push("/");
          }}
        />
        <Button text="GALERY" gallery={true} handler={() => {}} />
        <Button
          text="JOB OPENING"
          handler={() => {
            router.push("/");
          }}
        />
        <Button
          text="CONTACT US"
          handler={() => {
            router.push("/ContactUs");
          }}
        />
      </div>
      <div className={appbar.apply}>APPLY </div>
    </div>
  );
};

export default AppBar;

const Button = (props) => {
  const gale = React.useRef();

  const [show, setshow] = React.useState(false);

  const handleChange = (event) => {
    setshow((prev) => !prev);
  };
  const router = useRouter();

  return (
    <div
      onClick={props.handler}
      className={appbar.button}
      style={{ cursor: "pointer", userSelect: "none", MozUserSelect: "none" }}
    >
      {!props.gallery && props.text}
      {props.gallery && (
        <div
          style={{ display: "flex", alignItems: "center" }}
          onClick={handleChange}
        >
          {" "}
          <div>{props.text}</div>
          <NavDropdown
            show={show}
            renderMenuOnMount={true}
            ref={gale}
            id="nav-dropdown-dark-example"
            menuVariant="black"
          >
            <NavDropdown.Item
              onClick={() => {
                router.push("/Images");
              }}
            >
              Images
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={() => {
                router.push("/Images");
              }}
            >
              Videos
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      )}
    </div>
  );
};
