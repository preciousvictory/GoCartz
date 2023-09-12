import React from "react";
import { Card } from "react-bootstrap";
import "../css/ProductCard.css";
import { FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt  } from "react-icons/fa";


const ProductCard = ({ item }) => {
  return (
      <Card className="h-100">
        <Card.Img variant="top" src={item.image} className="card-img-top"/>
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text className="price">${item.price}</Card.Text>
          <div className="rating">
            {Array.from({ length: 5 }).map((_, idx) => (
                Rating(item.rating, idx)
            ))}
            <span>{item.rating.count} reviews</span>
          </div>
          <button className="add_to_cart"><FaShoppingCart className="cart"/>Add to cart</button>
        </Card.Body>
      </Card>
  );
};

function Rating(rating, idx) {
  if (idx < rating.rate && !(idx === Math.floor(rating.rate))) return <FaStar key={idx} className='star'/>;
  else if (idx < rating.rate && idx === Math.floor(rating.rate)) return <FaStarHalfAlt key={idx} className='star'/>;
  return <FaRegStar key={idx} className='star'/>;
}

export default ProductCard;