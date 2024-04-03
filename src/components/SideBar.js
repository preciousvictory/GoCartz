import React from "react";
import { useContext, useRef } from "react";
import { CartContext } from '../context/Context';
import "../css/SideBar.css";
import { Link } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
import { PRODUCTS } from '../data/data.js'
import { MdLaptop } from "react-icons/md";
import { GiClothes, GiRunningShoe, GiLipstick, GiHeartNecklace, GiEarrings } from "react-icons/gi";
import { BsHandbagFill, BsWatch } from "react-icons/bs";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Gender />
      <Category />
      <Price />
      {/* <Colors /> */}
    </div>
  )
};

export function Gender() {
  const { loadUserData, removeFromSelected, filterRemove, filterAdd } = useContext(CartContext);
  const allRef = useRef(null);

  const handleChange = (e) => {
    if (e.target.defaultValue !== 'All') {
      removeFromSelected('All');
      allRef.Check = false; // uncheck all
    }

    // e.target.checked === true ? addToSelected(e.target.defaultValue) : removeFromSelected(e.target.defaultValue);
    e.target.checked === true ? filterAdd(e.target.defaultValue) : filterRemove(e.target.defaultValue);
  }

  return (<>
    <h4 className="mt-2">Gender</h4>
    <Form className="gender">
      <Form.Check type={'checkbox'} key={'All'} id={`box_All`} label={`All`} value={'All'} className="check" defaultChecked="true" ref={allRef} onClick={loadUserData} />
      {['Women', 'Men', 'Kid'].map((gender) => (
        <Form.Check type={'checkbox'} key={gender} id={`box_${gender}`} label={`${gender}`} value={`${gender}`} className="check" onClick={handleChange} />
      ))}
    </Form>
  </>)
}

export function Category() {
  const { selectedCategory, addSelectedCategory, setfilteredData  } = useContext(CartContext);
  console.log('category', selectedCategory);

  const handleChange = (e) => {
    addSelectedCategory(e.target.innerText);

    const filterValue = e.target.innerText;
    const filterdata = [];

    PRODUCTS.map((product) => {
      const query = product.category.toLowerCase();
      if (query.indexOf(filterValue.toLowerCase()) !== -1) {
        filterdata.push(product);
      }
    })
    console.log('filter', filterdata)
    setfilteredData(filterdata);

    // removeSelectedCategory(e.target.innerText);
  }

  const categories = [
    { cate: 'Clothing', icon: GiClothes },
    { cate: 'Shoes', icon: GiRunningShoe },
    { cate: 'Bags', icon: BsHandbagFill },
    { cate: 'Cosmetics', icon: GiLipstick },
    { cate: 'Jewelries', icon: GiHeartNecklace },
    { cate: 'Wristwatch', icon: BsWatch },
    { cate: 'Accessories', icon: GiEarrings },
    { cate: 'Gadgets', icon: MdLaptop },
  ]

  return (<>
    <h4 className="mt-3">Category</h4>
    <div className="category">
      {categories.map((category) => (
        <Link
          className='FilterByCategory'
          to={`/GoCartz/category/${category.cate.toLowerCase()}`}
          style={{textDecoration: 'none'}}
        >
          <Button className="category_btn s" key={category.cate} value={category.cate} id="button-addon1" onClick={handleChange}>
            <category.icon />
            <p>{category.cate}</p>
          </Button>
        </Link>

      ))}
    </div>
  </>)
}

export function Price() {
  const { filterAddPrice, filterRemovePrice } = useContext(CartContext);

  const handleChange = (e) => {
    console.log(e);
    console.log('value', e.target.defaultValue);

    // e.target.checked === true ? addToSelected(e.target.defaultValue) : removeFromSelected(e.target.defaultValue);
    e.target.checked === true ? filterAddPrice(e.target.defaultValue) : filterRemovePrice(e.target.defaultValue);
  }

  const prices = [
    // id: [lowerbound, upperbound]
    { lowerPrice: 0, upperPrice: 20 },
    { lowerPrice: 20, upperPrice: 50 },
    { lowerPrice: 50, upperPrice: 100 },
    { lowerPrice: 100, upperPrice: 500 },
    { lowerPrice: 500, upperPrice: 1000 },
    { lowerPrice: 1000, upperPrice: null }
  ]

  return (<>
    <h4 className="pt-3">Price</h4>
    <Form className="Price">
      {prices.map((price) => (
        <Form.Check type={'checkbox'} id={`box_${price.lowerPrice}`} key={price.lowerPrice} label={`$${price.lowerPrice} - $${price.upperPrice}`} value={[price.lowerPrice, price.upperPrice]} className="check" onChange={handleChange} />
      ))}
    </Form>
  </>)
}

export function Colors() {
  return (<>
    <h1>Category</h1>
  </>)
}

export default SideBar;
