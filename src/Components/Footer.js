import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Footer.module.css";
import logo from "../Images/logo-2.png";

export default function TheNavbar() {
  return (
    <Navbar expand="md" className={classes.container}>
      <Container>
        <Navbar.Brand href="#logo">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={classes.text}>
              Home
            </Nav.Link>
            <Nav.Link href="#About Us" className={classes.text}>
              About Us
            </Nav.Link>
            <Nav.Link href="#Tokenomics" className={classes.text}>
              Tokenomics
            </Nav.Link>
            <Nav.Link href="#Roadmap" className={classes.text}>
              Roadmap
            </Nav.Link>
            <Nav.Link href="#FAQ" className={classes.text}>
              FAQ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
