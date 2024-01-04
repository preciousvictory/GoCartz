import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import { Newsletter } from '../components/Blog'
import AllProducts from '../components/AllProducts';
import SideBar from '../components/SideBar';


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
      </Row>
      <SearchBar /> */}

      <Row>
        <Col xs={4} md={3} lg={2}>
          <SideBar />
        </Col>
        <Col >
          <AllProducts />
        </Col>
      </Row>
  
      <Blog />
      <Newsletter />
      <Footer />
    </Container>

  );
}

export default Home;
