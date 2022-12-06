import React, { Component } from "react";
import home from "./Home.module.css";
import { Container } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className={home.home}>
        <Container>
          <h1 className={home.title}>Home</h1>
        </Container>
      </div>
    );
  }
}

export default Home;
