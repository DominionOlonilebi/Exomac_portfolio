import React from "react";
import {
  Button,
  Col,
  Container,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Navbars = () => {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container fluid className="navbars">
        <Navbar.Brand href="#home" className="navbars_brand">
          Exomac
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home" className="mx-2">
              Homepage
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2">
              About Us
            </Nav.Link>
            <Nav.Link href="#services" className="mx-2">
              Services
            </Nav.Link>

            <NavDropdown title="Work" id="basic-nav-dropdown" className="mx-2">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Blog" id="basic-nav-dropdown" className="mx-2">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contact" className="mx-2">
              Contact Us
            </Nav.Link>
            <Nav.Link href="#home" className="mx-3">
              <FaSearch />
            </Nav.Link>

            <Button className="navs_button mx-2">Buy Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
