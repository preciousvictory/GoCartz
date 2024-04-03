import React from "react";
import { useContext  } from "react";
import { CartContext } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { PRODUCTS } from '../data/data.js'
import '../css/AllProducts.css'

const AllProducts = () => {
    const { filteredData, loadUserData } = useContext(CartContext);
    if (!filteredData) {
        loadUserData();
    }
    // console.log('filter', filteredData);    

    return (
        <Container className="container">
            <Row md={4} lg={{ cols: 5, gutter: 2}} >
                {filteredData.lenght !== 0 ? (filteredData.map((product) => {
                    return (
                    <Col key={product.id} lg={2.5} xs={6} md={4} className="p-2"><ProductCard key={product.id} item={product} /></Col>
                    );
                })) :
                (PRODUCTS.map((product) => {
                    return (
                    <Col key={product.id} className="p-3 h-100"><ProductCard key={product.id} item={product} /></Col>
                    );
                }))
                }
            </Row>
        </Container>
    );
}

export default AllProducts;