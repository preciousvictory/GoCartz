import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import Nav1 from './components/Nav';
import { Nav2 } from './components/Nav';
import Footer from './components/Footer'
import Blog from './components/Blog'
import { Newsletter } from './components/Blog'
import AllProducts from './components/AllProducts';
import { Filters } from './components/Search';
import Search from './components/Search';


function App() {
  return (
    <Container fluid className="App p-0">
      <Nav1 />
      <Nav2 />

      <Row>
        <Col xs={2} id="filter-wrapper">
          <Search />
          <Filters />
        </Col>
        <Col xs={10} id="products-wrapper">
          <AllProducts />
        </Col>
      </Row>
      
      
      <Blog />
      <Newsletter />
      <Footer />
    </Container>

  );
}

export default App;
