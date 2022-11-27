import React, {Component} from 'react';
import header from "./Header.module.css"
import {Button, Container, Form, FormControl, Image} from "react-bootstrap";
import Logo from "../Img/logo.svg"
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import {NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'

class Header extends Component {
    render() {
        return (
            <Navbar className={header.header} collapseOnSelect="md" bg={"dark"} variant={"dark"}>
                <Container>
                    <Navbar.Brand href={"/"} className={""}>
                        <Image className={header.logo} src={Logo} alt={"logo"}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <NavbarCollapse id={"responsive-navbar-nav"}>
                        <div className={"mr-auto"}>
                            <NavLink to={"/home"}
                                     className={navData => navData.isActive ? header.active : header.item}>Home</NavLink>
                            <NavLink to={"/slider"}
                                     className={navData => navData.isActive ? header.active : header.item}>Slider</NavLink>
                            <NavLink to={"/contacts"}
                                     className={navData => navData.isActive ? header.active : header.item}>Contacts</NavLink>
                            <NavLink to={"/about"}
                                     className={navData => navData.isActive ? header.active : header.item}>About
                                us</NavLink>
                        </div>
                        <div className={header.form}>
                            <Form >
                                <FormControl
                                    placeholder={"Search"}
                                    type={"text"}
                                />
                            </Form>
                            <div className={header.button}>
                                <Button>Push</Button>
                            </div>
                        </div>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;