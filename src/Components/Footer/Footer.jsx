import React, {Component} from 'react';
import footer from "./Footer.module.css"
import {Container} from "react-bootstrap";

class Footer extends Component {
    render() {
        return (
            <div className={footer.footer}>
                <Container>
                    <p>Footer</p>
                </Container>
            </div>
        );
    }
}

export default Footer;