import React from "react";
import abSec from "./AboutSecond.module.css";
import { Button } from "bootstrap";

const AboutSecond = (props) => {
  return (
    <div>
      <div className={abSec.brand}>{props.brand}</div>
      <div className={abSec.year}>{props.year}</div>
      <Button onClick={props.onChangeHandler}>click132</Button>
    </div>
  );
};

export default AboutSecond;
