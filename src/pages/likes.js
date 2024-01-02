import React, { useContext} from 'react';
import { useNavigate} from 'react-router-dom';
import { CartContext } from '../context/Context';
import { Row, Col, Container } from 'react-bootstrap';
import AllLikes from '../components/AllLikes.js';
import { PRODUCTS } from '../data/data.js'
import { FaArrowLeft } from 'react-icons/fa';

function Likes() {
  const navigate = useNavigate()
  const { favoriteItems, gettotalPrice } = useContext(CartContext);

  let totalAmount = gettotalPrice(PRODUCTS, favoriteItems);

  return (
    <Container className='Cart'>
      {totalAmount > 0 ?
        <AllLikes  />
      :
        <Row className='empty'>
          <Col>
            <h1 className='text'>No Saved Item</h1>
            <button className='shopping' onClick={() => navigate("/GoCartz")}><FaArrowLeft /><span> continue shopping</span></button>
          </Col>
        </Row>
      }
    </Container>
  );
}

export default Likes;