import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import about from "./About.module.css"

class About extends Component {
    render() {
        return (
            <div className={about.about}>
                <Container>
                    About us
                </Container>
            </div>
        );
    }
}

export default About;