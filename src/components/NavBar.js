import React from "react";
import {
  Navbar,
  Button,
  ButtonGroup,
  Form,
  FormControl,
  Nav
} from "react-bootstrap";
export default function NavBar() {
  let navMenuItems = [
    { text: "Patreon", url: "#home" },
    { text: "Opportunities", url: "#home" },
    { text: "Other", url: "#home" }
  ];
  let brandName = "Demo";
  let logoUrl = "https://telegra.ph/file/6e9753801d40ea29b2852.png";

  return (
    <Navbar bg="light" variant="light" sticky="top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#home" className="mr-auto ml-auto">
        <b>SkillNerve</b>
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {navMenuItems.map((menuItem) => (
            <Nav.Link href={menuItem.url}>{menuItem.text}</Nav.Link>
          ))}
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-md-2" />
        </Form>
        <Button variant="secondary">Donate</Button>
        &ensp;
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Login</Button>
          <Button variant="secondary">Sign Up</Button>
        </ButtonGroup>
      </Navbar.Collapse>
      <Form.Group className="d-lg-none search-nav">
        <Form.Control type="text" placeholder="Search" />
      </Form.Group>
    </Navbar>
  );
}
