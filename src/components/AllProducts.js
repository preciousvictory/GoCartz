import React from "react";
// import useFetch from "./useFetch";
import { useContext  } from "react";
// import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { PRODUCTS } from '../data/data.js'
import '../css/AllProducts.css'

const AllProducts = () => {
    // const navigate = useNavigate()

    const { filteredData, loadUserData } = useContext(CartContext);
    if (!filteredData) {
        console.log('not', filteredData)
        loadUserData();
    }
    console.log('filter', filteredData);    

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
                    // lg={2.5} xs={6} md={4}
                    );
                }))
                }
            </Row>
        </Container>
    );
}

export default AllProducts;