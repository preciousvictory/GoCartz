import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import { Newsletter } from '../components/Blog'
import AllProducts from '../components/AllProducts';
import { Nav2 }  from '../components/Nav';


function Home() {
  return (
    <Container fluid className="App p-0">
      {/* <Row>
        <Col xs={2} id="filter-wrapper">
          <Search />
          <Filters />
        </Col>
        <Col xs={10} id="products-wrapper">
          <AllProducts />
        </Col>
      </Row> */}
    
      <Nav2 />
      <AllProducts />

      
      <Blog />
      <Newsletter />
      <Footer />
    </Container>

  );
}

export default Home;
