import React, { useContext } from "react";
import { CartContext } from "../context/Context";
import { Card } from "react-bootstrap";
import "../css/ProductCard.css";
import { FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt  } from "react-icons/fa";
// import { MdFavoriteBorder } from "react-icons/md";


const ProductCard = ({ item }) => {
  const { addToCart, cartItems } = useContext(CartContext);
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
          <button className="add_to_cart" onClick={() => addToCart(item.id )}><FaShoppingCart className="cart"/>Add to cart {checkInCart(item.id, cartItems)}</button>
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