import React, { useContext } from 'react';
import { useNavigate} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { PRODUCTS } from '../data/data.js'
import { Row, Col, Image, Container } from 'react-bootstrap';
import "../css/CartCard.css";
import { FaMinusSquare, FaPlusSquare, FaTrash, FaArrowLeft } from 'react-icons/fa';
import { CartContext } from '../context/Context';


const CartCard = ({ item }) => {
  const { cartItems, addToCart, removeFromCart, deleteCart, updateCartItemCount } = useContext(CartContext);

  return (
    <Row className='cartcard'>
      <Col>
        <Image src={item.image} className='image'/>
      </Col>
      <Col>{item.title}</Col>
      <Col>${item.price}</Col>
      <Col lg={2} xs={2} className="counthandler">
        <FaMinusSquare onClick={() => removeFromCart(item.id)} className='counticon'/>
        <input value={cartItems[item.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), item.id)} className='count'/>
        <FaPlusSquare onClick={() => addToCart(item.id)} className='counticon'/>
      </Col>
      <Col lg={1} xs={1}>
        <FaTrash onClick={() => deleteCart(item.id)} size={16} className='delete'/>
      </Col>
    </Row>
  );
};


const AllCart = () => {
  const { cartItems, gettotalPrice } = useContext(CartContext);

  const navigate = useNavigate()

  const countitems = (cartItems) => {
    let c = 0;
    for (let i in cartItems) {
      if (cartItems[i] > 0) c += 1;
    }
    return c;
  }

  let totalAmount = gettotalPrice(PRODUCTS, cartItems);
  return (
    <Container className='Cart'>
      <Row>
        <Col className='shopping-cart'>
          <Row className='heading'>
            <Col className='p-0'>Your Cart</Col>
            <Col className='tc'><span className='totalcart'>{countitems(cartItems)}</span><span> items in you cart</span></Col>        
          </Row>

          <Row className='cartheading'>
            <Col lg={6} xs={6}>Product</Col>
            <Col>Price</Col>
            <Col lg={3} xs={3}>Quantity</Col>
          </Row>

          <Row>
            {PRODUCTS.map((product) => {
              if (cartItems[product.id] > 0) {
                return <Col key={product.id} lg={12} xs={12} ><CartCard key={product.id} item={product} /></Col>;
              }
            })}
          </Row>
          
          <Row>
            <Col className='p-0 mt-4'>
              <button className='shopping' onClick={() => navigate("/")}><FaArrowLeft /><span> continue shopping</span></button>
            </Col>
          </Row>
        </Col>

        <Col lg={3} className='summary'>
          <div className='ti'>Summary</div>
          <div>
            (<span className='totalcart'>{countitems(cartItems)}</span>) items
          </div>
          <div className='total'>
            <p>Total</p>
            <p className='total-price'>${totalAmount}</p>
          </div>
          <div className='checkout'>
            <LinkContainer to="/">
              <button className='checkoutbtn'>Checkout</button>
            </LinkContainer>
          </div>
          
        </Col>
      </Row>
    </Container>
  );
}

export default AllCart;