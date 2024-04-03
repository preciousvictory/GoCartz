import React, { useContext } from 'react';
import { CartContext } from '../context/Context';
import { Row, Col } from 'react-bootstrap';
import { PRODUCTS } from '../data/data.js'
import { useParams } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { FaHeart, FaRegStar, FaShoppingCart, FaStar, FaStarHalfAlt } from "react-icons/fa";
import '../css/SingleProduct.css'

function SingleProduct() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === parseInt(id));

  const { addToCart, addFavoriteItem } = useContext(CartContext);

  return (
    <div className='singleProduct' style={{ margin: 50 }}>
      <Row style={{ gap: 10 }}>
        <MediaQuery minWidth={600}>
          <Col className='image_group'>
            <Row className='img'>
              <img src={product.image} className='image-1' alt='product' />
            </Row>
            <Row className='other_images' style={{ gap: 10 }}>
              <Col className='img_' style={{ border: '2px solid #F88A24' }}><img src={product.image} className='image-2' alt='product' /></Col>
              <Col className='img_' style={{ border: '1px solid #1f1f2552' }}><img src={product.image} className='image-3' alt='product' /></Col>
              <Col className='img_' style={{ border: '1px solid #1f1f2552' }}><img src={product.image} className='image-4' alt='product' /></Col>
            </Row>
          </Col>
        </MediaQuery>

        <MediaQuery maxWidth={600}>
          <div className='image_group'>
            <Row className='img'>
              <img src={product.image} className='image-1' alt='product' />
            </Row>
            <Row className='other_images' style={{ gap: 10 }}>
              <Col className='img_' style={{ border: '2px solid #F88A24' }}><img src={product.image} className='image-2' alt='product' /></Col>
              <Col className='img_' style={{ border: '1px solid #1f1f2552' }}><img src={product.image} className='image-3' alt='product' /></Col>
              <Col className='img_' style={{ border: '1px solid #1f1f2552' }}><img src={product.image} className='image-4' alt='product' /></Col>
            </Row>
          </div>
        </MediaQuery>


        <Col className='product_info'>
          <h1>{product.title}</h1>
          <div className="rating">
            {Array.from({ length: 5 }).map((_, idx) => (
              Rating(product.rating, idx)
            ))}
            <span>  {product.rating.count} reviews</span>
          </div>
          <p className='desc'>{product.description}</p>
          <h2 className='price'><span style={{ textDecoration: 'line-through', fontSize: 20, color: '#1f1f2578' }}>${product.prevPrice}</span>  ${product.price}</h2>
          <div><button className="add_to_cart" onClick={() => addToCart(product.id)}><FaShoppingCart className="cart-icon" />Add to cart</button></div>
          <div><button className="add_to_favourite" onClick={() => addFavoriteItem(product.id)}><FaHeart className="heart-icon" /></button></div>
        </Col>
      </Row>
    </div>
  )
}

export default SingleProduct;

function Rating(rating, idx) {
  if (idx < rating.rate && !(idx === Math.floor(rating.rate))) return <FaStar key={idx} className='star' />;
  else if (idx < rating.rate && idx === Math.floor(rating.rate)) return <FaStarHalfAlt key={idx} className='star' />;
  return <FaRegStar key={idx} className='star' />;
}