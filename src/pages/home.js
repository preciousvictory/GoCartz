import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer'
import Blog from '../components/Blog'
import { Newsletter } from '../components/Blog'
import AllProducts from '../components/AllProducts';
import SideBar from '../components/SideBar';
import "../css/SearchBar.css";
import MediaQuery from 'react-responsive';

function Home() {
  return (
    <Container fluid className="App">
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
        <MediaQuery minWidth={600}>
          {/* <p>You also have a huge screen</p> */}
          <Col className='p-0' xs={4} md={3} lg={2}>
            <SideBar />
          </Col>
          <Col >
            <AllProducts />
          </Col>
        </MediaQuery>

        <MediaQuery maxWidth={600}>
          {/* <p>You also have a small screen</p> */}
          <AllProducts />
        </MediaQuery>
        
      </Row>
  
      <Blog />
      <Newsletter />
      <Footer />
    </Container>

  );
}

export default Home;
