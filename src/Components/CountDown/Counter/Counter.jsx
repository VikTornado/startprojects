import React, {Fragment} from "react";
import {Container} from "react-bootstrap";
import counter from './Counter.module.css'

const Counter = ({day, hour, minute, second}) => {
    return (
        <Container>
            <Fragment>
                <section className={counter.counter}>
                    <div className={counter.dayBlock}>
                        <p>We will be closing in</p>
                        <p>{day}</p>
                        <span>Days</span>
                    </div>
                    <div className={counter.timerBlock}>
                        <p>{hour < 10 ? "0" + hour : hour}</p>
                        <span>:</span>
                        <p>{minute < 10 ? "0" + minute : minute}</p>
                        <span>:</span>
                        <p>{second < 10 ? "0" + second : second}</p>
                    </div>
                </section>
            </Fragment>
        </Container>
    );
};
Counter.defaultProps = {
    day: "10",
    hour: 0,
    minute: 0,
    second: 0,
};

export default Counter;
