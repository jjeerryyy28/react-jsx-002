import React from "react";
import logo from "./images/airbnb-logo.png";
import "./css/airbnb.css";

const heading = {
  textAlign: "center",
  fontSize: "4em",
  color: "white",
  marginTop: "100px"
};

const tag = {
  listStyleType: "none",
  color: "white",
  textAlign: "center",
  fontSize: "1.6em",
  marginTop: "80px"
};

const image = {
  height: "40px",
  width: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "600px",
  marginTop: "-20px"
};

class AirBnB extends React.Component {
  render() {
    const el = (
      <div>
        <h1 style={heading}>
          The Evolution of <br /> Airbnb's Frontend
        </h1>
        <p style={tag}>
          <span>@spikebrehm</span>
        </p>
        <img src={logo} alt="Logo" style={image} />
      </div>
    );
    return el;
  }
}

export default AirBnB;
