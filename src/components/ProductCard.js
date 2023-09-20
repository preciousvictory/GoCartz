import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import { Card, Row, Col } from "react-bootstrap";
import "../css/ProductCard.css";
import { FaHeart, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt  } from "react-icons/fa";
// import { MdFavoriteBorder } from "react-icons/md";


const ProductCard = ({ item }) => {
  const { addToCart, cartItems, addFavoriteItem} = useContext(CartContext);
  return (
      <Card className="h-100 card">
        <Card.Img variant="top" src={item.image} className="card-img-top"/>
        <Card.Body>
          <Card.Title className="title">{item.title}</Card.Title>
          <Card.Text className="price">${item.price}</Card.Text>
          <div className="rating">
            {Array.from({ length: 5 }).map((_, idx) => (
                Rating(item.rating, idx)
            ))}
            <span>{item.rating.count} reviews</span>
          </div>
          <Row className="add-row">
            <Col xs={10}>
              <button className="add_to_cart" onClick={() => addToCart(item.id)}><FaShoppingCart className="cart-icon"/>Add to cart {checkInCart(item.id, cartItems)}</button>
            </Col>
             <Col xs={2} className="p-0">
              <button className="add_to_favourite" onClick={() => addFavoriteItem(item.id)}><FaHeart className="heart-icon"/></button>
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

function checkInCart(id, cartItems) {
  if (cartItems[id] > 0) {
    return <span>({cartItems[id]})</span>;
  }
}

export default ProductCard;