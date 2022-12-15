import React, { Component } from "react";
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import contacts from "./Contacts.module.css";
import Slider from "../Slider/Slider";

class Contacts extends Component {
  render() {
    return (
      <div>
        <Container>
          <TabContainer
            className={contacts.tabBlock}
            id="ledt-tabs-example"
            defaultActiveKey={"first"}
          >
            <Row className={contacts.row}>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mt=2">
                  <NavItem>
                    <NavLink eventKey={"first"}>Design</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey={"second"}>Party</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey={"third"}>Contacts</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey={"fourth"}>Cart</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={9}>
                <TabContent>
                  <TabPane eventKey={"first"}>
                    <img
                      className={contacts.img}
                      alt="img"
                      src="https://img.freepik.com/free-vector/world-map-with-global-technology-or-social-connection-network-with-nodes-and-links-vector-illustration_1284-1968.jpg?w=2000&t=st=1670316902~exp=1670317502~hmac=f8a0c44f572bc80353967f157a6e23475f9ebd77ce62a54963235d4411bcfca9"
                    />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nesciunt harum itaque fugiat quisquam praesentium
                      exercitationem consequuntur, alias sunt beatae repellendus
                      aut illum reiciendis ipsa dicta provident quas unde nam
                      rem.
                    </p>
                  </TabPane>
                  <TabPane eventKey={"second"}>
                    <img
                      className={contacts.img}
                      alt="img"
                      src="https://img.freepik.com/premium-photo/html5-in-editor-for-website-development-website-html-code-on-the-laptop-display-closeup-photo-modern-tech-innovative-startup-project_372999-618.jpg"
                    />
                    <p>
                      Lorem ipsum dolor, praesentium exercitationem
                      consequuntur, alias sunt beatae repellendus aut illum
                      reiciendis ipsa dicta provident quas unde nam rem.
                    </p>
                  </TabPane>
                  <TabPane eventKey={"third"}>
                    <img
                      className={contacts.img}
                      alt="img"
                      src="https://img.freepik.com/premium-vector/world-binary-circuit-board-future-technology-blue-hud-cyber-security-concept-background_42077-13979.jpg?w=2000"
                    />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nesciunt harum itaque fugiat quisquam praesentium
                      exercitationem consequuntur, alias sunt beatae repellendus
                      aut illum reiciendis ipsa dicta provident quas unde nam
                      rem. Lorem ipsum dolor, sit amet consectetur adipisicing
                      elit. Nesciunt harum itaque fugiat quisquam praesentium
                      exercitationem consequuntur, alias sunt beatae repellendus
                      aut illum reiciendis ipsa dicta provident quas unde nam
                      rem.
                    </p>
                  </TabPane>
                  <TabPane eventKey={"fourth"}>
                    <Slider />
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Nesciunt harum itaque fugiat quisquam praesentium
                      exercitationem consequuntur, alias sunt beatae repellendus
                      aut illum reiciendis ipsa dicta provident quas unde nam
                      rem.
                    </p>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </div>
    );
  }
}

export default Contacts;
