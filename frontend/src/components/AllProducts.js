import React from "react";
import useFetch from "./useFetch";
import ProductCard from "./ProductCard";

export function ProductData() {
    const { data, Loading, error } = useFetch('https://fakestoreapi.com/products');
    
    if (Loading) return 'Is Loading...';
    if (error) return 'Error';
    return (
        <>
        {data &&
        data.map((item) => {
          return (
        //   <p key={item.id}>{item.title}</p>);
        <ProductCard key={item.id} item={item}  />);
        })}
        </>
    
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