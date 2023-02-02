import React, { useEffect, useState } from "react";
import Counter from "./Counter/Counter";
import { Container } from "react-bootstrap";

const CountDown = (props) => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  // let titleStopTimer = "stop"

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("25 february 2023").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const day = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hour = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minute = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const second = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(day);
        setTimerHours(hour);
        setTimerMinutes(minute);
        setTimerSeconds(second);
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <Container>
      <h1 style={{ color: "green", textAlign: "center" }}>Counter</h1>
      <div style={{ color: "green", textAlign: "center" }}>
        <Counter
          day={timerDays}
          hour={timerHours}
          minute={timerMinutes}
          second={timerSeconds}
        />
      </div>
    </Container>
  );
};

export default CountDown;
