import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Topbar.css";
import { NavLink } from "react-router-dom";

const Topbar = () => {
  return (
    <Navbar expand="lg" className="nav-color">
      <Container>
        <Navbar.Brand>Basic crud with API</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav>
          <NavLink to="/">Home</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Topbar;
