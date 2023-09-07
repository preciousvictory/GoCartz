import React from "react";
import { Row, Col, InputGroup, Form, Button, Card } from "react-bootstrap";
import "../css/Blog.css";
import Image from '../images/hamburger2.jpg';

export function Blog() {
  return (
    <div className="Blog">
      <Row xs={1} md={3} className="g-4 justify-content-center">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              {/* <Card.Title>Card title</Card.Title> */}
              <Card.Link href="#/action" className="Title">Best restuarant Hambuger is sold in Nigeria</Card.Link>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
}

export function Newsletter() {
  return (
    <div className="Newsletter">
      <Row xs={1} lg={2} className="align">
        <Col>
          <h1>Newsletter & Updates</h1>
          <p>Sign up for our newsletter to get up-to-date from us</p>
        </Col>
        <Col>
          <InputGroup className="input-group">
            <Form.Control
              placeholder="Enter your mail here..."
              aria-label="Mail"
              className="mail"
            />
            <Button className="submitbtn mail" id="button-addon2">
              Submit
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}

export default Blog;