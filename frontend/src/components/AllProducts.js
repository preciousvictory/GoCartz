import React from "react";
import useFetch from "./useFetch";
// import { Nav } from "react-bootstrap";
// import "../css/Nav.css";

export function ProductData() {
    const {isLoading, error, data} = useFetch('https://fakestoreapi.com/products/1', []);

    if (isLoading) return 'Is Loading';
    if (error) return 'error';
    return (
        <p>{data}</p>
    );
}

// npm i -S use-http

const AllProducts = () => {
    return (
        <>
            <ProductData />
        </>
    );
}

export default AllProducts;