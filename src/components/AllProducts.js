import React from "react";
// import useFetch from "./useFetch";
import { useContext  } from "react";
import { CartContext } from '../context/Context';
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";
import { PRODUCTS } from '../data/data.js'
import '../css/AllProducts.css'

const AllProducts = () => {
    const { filteredData, loadUserData } = useContext(CartContext);
    if (!filteredData) {
        console.log('not', filteredData)
        loadUserData();
    }
    console.log('filter', filteredData);
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
        <Container className="container">
            <Row md={4} lg={{ cols: 5, gutter: 2}} >
                {/* md={3} lg={{ cols: 5, gutter: 2}} */}
                {filteredData ? (filteredData.map((product) => {
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