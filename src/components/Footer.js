import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Row, Col, Navbar, Dropdown } from "react-bootstrap";
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare, FaLinkedin  } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Row xs={2} lg={4}>
        <Col xs={12} className="logo">
          <LinkContainer to="/GoCartz">
            <Navbar.Brand href="#home" className="logo">
              <span style={{ color: "white" }}>Go</span>
              <span style={{ color: "#F88A24" }}>Cartz</span>
            </Navbar.Brand>
          </LinkContainer>
        </Col>

        <Col className="navigation">
          <h6>Navigation</h6>
            <LinkContainer to="/GoCartz">
              <button className="links">Home</button>
            </LinkContainer>
            <LinkContainer to="/GoCartz">
              <button className="links">Blog</button>
            </LinkContainer>
            
            <Dropdown>
            <Dropdown.Toggle className="shop">Shops</Dropdown.Toggle>

            <Dropdown.Menu className="dropdown">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            <LinkContainer to="/GoCartz">
              <button className="links">About Us</button>
            </LinkContainer>
            <LinkContainer to="/GoCartz">
              <button className="links">Contact Us</button>
            </LinkContainer>
        </Col>

        <Col className="account">
          <h6>Account</h6>
            <LinkContainer to="/GoCartz">
              <button className="links">My Account</button>
            </LinkContainer>
            <LinkContainer to="/GoCartz/cart">
              <button className="links">My Cart</button>
            </LinkContainer>
            <LinkContainer to="/GoCartz/likes">
              <button className="links">My Favorite</button>
            </LinkContainer>
            <LinkContainer to="/GoCartz">
              <button className="links">Order History</button>
            </LinkContainer>
        </Col>

        <Col xs={12} md={4} className="followUs">
          <h6>Follow Us</h6>
          <a href="https://www.facebook.com/victoria.abiodunomoniyi"><FaFacebookSquare className='socials'/></a>
          <a href="#/instagram"><FaInstagramSquare className='socials'/></a>
          <a href="https://twitter.com/preciousvicky_"><FaTwitterSquare className='socials'/></a>
          <a href="https://www.linkedin.com/in/victory-a-17a11b231"><FaLinkedin className='socials'/></a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;