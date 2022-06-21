/** @format */

import { Component } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

class MyNav extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Books" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Fantasy Books
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sci-Fi Books
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                History Books
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Horror Books
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Romance Books
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">LogIn</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              SignUp
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNav;
