import { useContext } from "react";
import { CartContext } from '../context/Context';
import { PRODUCTS } from '../data/data.js';

const filterdata = [];

const Filter = () => {
    const { selected } = useContext(CartContext);
    // const filterdata = [];

    // e.preventDefault();
    PRODUCTS.map((product) => {
        const query = product.category.toLowerCase();
        for (let i = 0; i < selected.length; i++) {
            console.log(i, selected);
            if (query.indexOf(selected[i].toLowerCase()) !== -1) {
                filterdata.push(product);
                console.log('filter', filterdata)
            }
        }
    });
    console.log('filter', filterdata);

    return (filterdata);
}

export default Filter;