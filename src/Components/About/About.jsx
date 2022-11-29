import React from "react";
import {Container} from "react-bootstrap";

const About = () => {
    return (
        <div>
            <Container>
                <div>
                    <h3> Car Name: {"Car_name"}</h3>
                    <span>Number: <strong>{Math.round(Math.random() * 100)}</strong></span>
                </div>
                <div>
                    <h3> Car Name: {"Car_name"}</h3>
                    <span>Number: <strong>{Math.round(Math.random() * 100)}</strong></span>
                </div>
            </Container>
        </div>
    )
}

export default About
