import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import { Card, Row, Col } from "react-bootstrap";
import "../css/SavedCard.css";
import { FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt  } from "react-icons/fa";

const SavedCard = ({ item }) => {
  const { moveToCart, removeFavoriteItem } = useContext(CartContext);
  return (
      <Card className="h-100 card">
        <Card.Img variant="top" src={item.image} className="card-img-top"/>
        <Card.Body className="p-2">
          <Card.Title className="title">{item.title}</Card.Title>
          <Card.Text className="price">${item.price}</Card.Text>
          <div className="rating">
            {Array.from({ length: 5 }).map((_, idx) => (
                Rating(item.rating, idx)
            ))}
            <span>   {item.rating.count} reviews</span>
          </div>
          <Row className="add-row">
            <Col className="p-0">
              <button className="move_to_cart" onClick={() => moveToCart(item.id)}><FaShoppingCart className="cart-icon"/>Move to cart</button>
            </Col>
          </Row>
          <Row className="add-row mt-2">
            <Col className="p-0">
              <button className="remove_saved" onClick={() => removeFavoriteItem(item.id)}><FaShoppingCart className="cart-icon"/>Remove from saved</button>
            </Col>
          </Row>
         
        </Card.Body>
      </Card>
  );
};

function Rating(rating, idx) {
  if (idx < rating.rate && !(idx === Math.floor(rating.rate))) return <FaStar key={idx} className='star'/>;
  else if (idx < rating.rate && idx === Math.floor(rating.rate)) return <FaStarHalfAlt key={idx} className='star'/>;
  return <FaRegStar key={idx} className='star'/>;
}

export default SavedCard;