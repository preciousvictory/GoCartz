import React from "react";
import { useContext  } from "react";
import { CartContext } from '../context/Context';
import { Button, Form, InputGroup,} from "react-bootstrap";
import {  MdSearch } from "react-icons/md";
import "../css/SearchBar.css";
import { PRODUCTS } from '../data/data.js';

export function SearchBar() {
    const { searchValue, setSearchValue, data, setData } = useContext(CartContext);
    // const { productQuery,  } = useContext(CartContext);

    console.log(searchValue);

    const handleSearch = (e) => {
        e.preventDefault();
        const filterdata = [];
        PRODUCTS.map((product) => {
            const query = product.title.toLowerCase();
            if (query.includes(searchValue.toLowerCase())) {
              filterdata.push(product);
            }
        })
        console.log('filter', filterdata)
        setData(filterdata);
        console.log('data', data);
        setSearchValue("");
    }

    return (
    <Form action="/" method="get" className="SearchBar" onSubmit={handleSearch}>
      <InputGroup className="input-group">
        <Form.Control
          placeholder="Find your products"
          aria-label="Search"
          className="s"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button className="searchbtn s" id="button-addon2" type="submit">
          <MdSearch />
        </Button>
      </InputGroup>
    </Form>
    
  );
}  

export default SearchBar;