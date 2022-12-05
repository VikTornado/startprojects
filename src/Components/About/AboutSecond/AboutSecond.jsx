import { Button } from "bootstrap";
import React from "react";
import abSec from "./AboutSecond.module.css";

const AboutSecond = (props) => {
  return (
    <div>
      <div className={abSec.brand}>{props.brand}</div>
      <Button>click</Button>
      <div className={abSec.year}>{props.year}</div>
      <Button>click</Button>
    </div>
  );
};

export default AboutSecond;
