import React, { useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { CartContext } from '../context/Context';
import { Row, Col, Container } from 'react-bootstrap';
import AllCart from '../components/CartCard';
import { PRODUCTS } from '../data/data.js'
import { FaArrowLeft } from 'react-icons/fa';



function Cart() {
  const navigate = useNavigate()
  const { cartItems, gettotalPrice } = useContext(CartContext);

  let totalAmount = gettotalPrice(PRODUCTS, cartItems);

  return (
    <Container className='Cart p-0'>
      {totalAmount > 0 ?
        <AllCart  />
      :
        <Row className='empty'>
          <Col>
            <h1 className='text'>Your Cart is empty</h1>
            <button className='shopping' onClick={() => navigate("/GoCartz")}><FaArrowLeft /><span> continue shopping</span></button>
          </Col>
        </Row>
      }
    </Container>
  );
}

export default Cart;