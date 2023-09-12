import React from "react";
// import useFetch from "./useFetch";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import products from '../data/data.json'

const AllProducts = () => {
    // const { data, Loading, error } = useFetch('https://fakestoreapi.com/products');
    
    // if (Loading) return 'Is Loading...';
    // if (error) return 'Error';

    // const rows = [];
    
    // for (const product in data) {
    //     rows.push(
    //     <Col key={product.id} lg={3} xs={6}><ProductCard key={product.id} item={product}  /></Col>
    // );
    // }

    return (
        <Container>
            <Row md={3} lg={{ cols: 5, gutter: 2}}>
                {products.map((product) => {
                    return (
                    <Col key={product.id} lg={3} xs={6} md={4} className="p-3 h-100"><ProductCard key={product.id} item={product} /></Col>
                    );
                })}
            </Row>
        </Container>
    );
}

export default AllProducts;