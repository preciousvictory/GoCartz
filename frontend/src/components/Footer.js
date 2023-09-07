import React from "react";
import { Row, Col, Navbar, Dropdown } from "react-bootstrap";
import { FaInstagramSquare, FaTwitterSquare, FaFacebookSquare, FaLinkedin  } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Row xs={1} lg={4}>
        <Col xs={4}>
          <Navbar.Brand href="#home" className="logo">
            <span style={{ color: "white" }}>Go</span>
            <span style={{ color: "#F88A24" }}>Cartz</span>
          </Navbar.Brand>
        </Col>

        <Col>
          <h6>Navigation</h6>
          <div>
            <a href="#/action-1">Home</a>
          </div>
          <div>
            <a href="#/action-1">Blog</a>
          </div>
          <div>
            <a href="#/action-1">Reservations</a>
          </div>
          <Dropdown>
            <Dropdown.Toggle className="shop">Shops</Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>

            <div>
              <a href="#/action-1">About us</a>
            </div>
            <div>
              <a href="#/action-1">Contact us</a>
            </div>
          </Dropdown>
        </Col>

        <Col>
          <h6>Account</h6>
          <div>
            <a href="#/action-1">My Account</a>
          </div>
          <div>
            <a href="#/action-1">My Cart</a>
          </div>
          <div>
            <a href="#/action-1">My Favorite</a>
          </div>
          <div>
            <a href="#/action-1">Order History</a>
          </div>
        </Col>

        <Col xs={2}>
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