import React, { useContext } from 'react';
import { useNavigate} from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';
import SavedCard from './SavedCard.js';
import { PRODUCTS } from '../data/data.js'
import { Row, Col, Container } from 'react-bootstrap';
import "../css/CartCard.css";
import { FaArrowLeft } from 'react-icons/fa';
import { CartContext } from '../context/Context';

const AllLikes = () => {
  const { favoriteItems } = useContext(CartContext);

  const navigate = useNavigate()

  const countitems = (favoriteItems) => {
    let c = 0;
    for (let i in favoriteItems) {
      if (favoriteItems[i] > 0) c += 1;
    }
    return c;
  }

  return (
    <Container className='Likes'>
      <Row>
        <Col className='shopping-cart'>   
          <Row className='heading'>
            <Col className='p-0'>Your Saved Items</Col>
            <Col className='tc'><span className='totalcart'>{countitems(favoriteItems)}</span><span> saved Items</span></Col>        
          </Row> 

          <Row>
            {PRODUCTS.map((product) => {
              if (favoriteItems[product.id] > 0) {
                return <Col key={product.id} lg={2.5} xs={6} md={4} className="p-3 h-100"><SavedCard key={product.id} item={product} /></Col>;
              }
            })}
          </Row>    

          <Row>
            <Col className='p-3 mt-4'>
              <button className='shopping' onClick={() => navigate("/GoCartz")}><FaArrowLeft /><span> continue shopping</span></button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AllLikes;