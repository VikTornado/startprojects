import React, {Component} from "react";
import header from "./Header.module.css";
import {Button, Container, Form, Nav, Image} from "react-bootstrap";
import Logo from "../Img/logo.svg";
import {NavLink} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component {
    render() {
        return (<Navbar variant={"dark"} bg="dark" expand="lg">
            <Container className={header.container} fluid>
                <Navbar.Brand href="#">
                    <Image className={header.logo} src={Logo} alt={"logo"}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">
                            <NavLink
                                to={"/home"}
                                className={(navData) =>
                                    navData.isActive ? header.active : header.item}>
                                Home
                            </NavLink>
                            <NavLink
                                to={"/slider"}
                                className={(navData) =>
                                    navData.isActive ? header.active : header.item}>
                                Slider
                            </NavLink>
                            <NavLink
                                to={"/contacts"}
                                className={(navData) =>
                                    navData.isActive ? header.active : header.item}
                            >
                                Contacts
                            </NavLink>
                            <NavLink
                                to={"/cards"}
                                className={(navData) =>
                                    navData.isActive ? header.active : header.item}
                            >
                                Cards
                            </NavLink>
                            <NavLink
                                to={"/about"}
                                className={(navData) =>
                                    navData.isActive ? header.active : header.item}
                            >
                                About us
                            </NavLink>
                            <NavLink
                                to={"/mui"}
                                className={(navData) =>
                                    navData.isActive ? header.active : header.item}
                            >
                                Mui
                            </NavLink>
                            <NavLink
                                to={"/countdown"}
                                className={(navData) =>
                                    navData.isActive ? header.active : header.item}
                            >
                                CountDown
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>);
    }
}

export default Header;
