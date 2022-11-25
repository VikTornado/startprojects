import React, {Component} from 'react';
import home from "./Home.module.css"
import {Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <div className={home.home}>
                <Container>
                    <p>home</p>
                </Container>
            </div>
        );
    }
}

export default Home;