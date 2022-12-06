import React, { Component } from "react";
import header from "./Header.module.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Image,
  Nav,
} from "react-bootstrap";
import Logo from "../Img/logo.svg";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
  render() {
    return (
      <Navbar
        className={header.header}
        collapseOnSelect="md"
        bg={"dark"}
        variant={"dark"}
      >
        <Container>
          <Navbar.Brand href={"/home"} className={""}>
            <Image className={header.logo} src={Logo} alt={"logo"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className={header.collapse}
            id="responsive-navbar-nav"
          >
            <Nav className={"mr-auto"}>
              <NavLink
                to={"/home"}
                className={(navData) =>
                  navData.isActive ? header.active : header.item
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/slider"}
                className={(navData) =>
                  navData.isActive ? header.active : header.item
                }
              >
                Slider
              </NavLink>
              <NavLink
                to={"/contacts"}
                className={(navData) =>
                  navData.isActive ? header.active : header.item
                }
              >
                Contacts
              </NavLink>
              <NavLink
                to={"/cards"}
                className={(navData) =>
                  navData.isActive ? header.active : header.item
                }
              >
                Cards
              </NavLink>
              <NavLink
                to={"/about"}
                className={(navData) =>
                  navData.isActive ? header.active : header.item
                }
              >
                About us
              </NavLink>
            </Nav>
            <Form>
              <FormControl placeholder={"Search"} type={"text"} />
            </Form>
            <div className={header.button}>
              <Button>Push</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
