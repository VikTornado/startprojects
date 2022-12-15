import React, { Component } from "react";
import home from "./Home.module.css";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    let timerHour = document.querySelector(".hour");
    console.log(timerHour);
    return (
      <div className={home.home}>
        <Container>
          <h1 className={home.title}>Home</h1>
          <div className={home.timerBlock}>
            <div className={home.items}>
              <div className={home.hour}>00</div>
              <span className={home.timerDot}>:</span>
            </div>
            <div className={home.items}>
              <span className={home.minutes}>00</span>
              <span className={home.timerDot}>:</span>
            </div>
            <div className={home.items}>
              <span className={home.second}>00</span>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
