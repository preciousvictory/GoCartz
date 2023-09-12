import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar, Container, Button, Form, NavDropdown, InputGroup,} from "react-bootstrap";
import { MdFavorite, MdShoppingCart, MdAccountCircle } from "react-icons/md";
import "../css/Nav.css";

const Nav1 = () => {
  return (
    <Navbar expand="lg" className="Nav1">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className="logo">
            <span style={{ color: "white" }}>Go</span>
            <span style={{ color: "#F88A24" }}>Cartz</span>
          </Navbar.Brand>
        </LinkContainer>
        
        <Nav className="justify-content-end" activeKey="/">
          <Nav.Item>
            <Nav.Link href="/shops">Shops</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/likes"><MdFavorite size={24} className="icons"/></Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/cart"><MdShoppingCart size={24} className="icons"/></Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/shops"><MdAccountCircle size={24} className="icons"/></Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

/* <Nav.Item>
          <NavDropdown
              id="nav-dropdown-dark-example"
              title="Shops"
              menuVariant="dark"
            >
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
          </Nav.Item> */

export function Nav2() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary Nav2">
      <Container fluid>
        <InputGroup className="input-group">
          <Form.Control
            placeholder="Find your products"
            aria-label="Search"
            // aria-describedby="basic-addon2"
            className="s"
          />
          <Button className="searchbtn s" id="button-addon2">
            Search
          </Button>
        </InputGroup>

        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="left" lg={12}>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="WOMEN"
              menuVariant="dark"
            >
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

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="MEN"
              menuVariant="dark"
            >
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

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="KIDS"
              menuVariant="dark"
            >
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

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="GADGETS"
              menuVariant="dark"
            >
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

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="GROCERIES"
              menuVariant="dark"
            >
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Nav1;
// #F88A24
// black - 1F1F25
