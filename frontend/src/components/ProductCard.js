import React from "react";
import useFetch from "./useFetch";
import { Card } from "react-bootstrap";
import "../css/Product.css";
import { FaStar  } from "react-icons/fa";


const ProductCard = ({ key, item }) => {
  return (
    <>
      <Card key={key}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
          <Row md={5} className="g-4 justify-content-center">
            {Array.from({ length: 5 }).map((_, idx) => (
                <Col key={idx}><FaStar className='review'/></Col>
            ))}
          </Row>
          <button className="add_to_cart">Add to cart</button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;