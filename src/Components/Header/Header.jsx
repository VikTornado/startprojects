import React, {Component} from 'react';
import header from "./Header.module.css"
import {Container, Image, Nav, Navbar} from "react-bootstrap";
import Logo from "../Img/logo.svg"
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Navbar className={header.header} collapseOnSelect="md" bg={"dark"} variant={"dark"}>
                <Container>
                    <Navbar.Brand className={""} >
                        <Image className={header.logo} src={Logo} alt={"logo"}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
                    <NavbarCollapse id={"responsive-navbar-nav"}>
                        <Nav className={"mr-auto"}>
                            <NavLink to={"/home"} className = { navData => navData.isActive ? header.active : header.item }>Home</NavLink>
                            <NavLink to={"/contacts"} className = { navData => navData.isActive ? header.active : header.item }>Contacts</NavLink>
                            <NavLink to={"/about"} className = { navData => navData.isActive ? header.active : header.item }>About us</NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;