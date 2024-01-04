import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classes from "./Navbar.module.css";
import logo from "../Images/logo.png";
import PrimaryButton from "./PrimaryButton";

export default function TheNavbar() {
  return (
    <Navbar>
      <Container className={classes.container}>
        <Nav.Link href="#logo">
          <img src={logo} alt="Logo" />
        </Nav.Link>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About Us">About Us</Nav.Link>
        <Nav.Link href="#Tokenomics">Tokenomics</Nav.Link>
        <Nav.Link href="#Roadmap">Roadmap</Nav.Link>
        <Nav.Link href="#FAQ">FAQ</Nav.Link>
        <Nav.Link href="btn">
          <PrimaryButton buttonText="Buy Token" />
        </Nav.Link>
      </Container>
    </Navbar>
  );
}
