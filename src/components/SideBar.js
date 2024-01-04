import React from "react";
import { useContext } from "react";
import { CartContext } from '../context/Context';
import "../css/SideBar.css";
import { Form, Button } from "react-bootstrap";
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
  const { selected, addToSelected, removeFromSelected } = useContext(CartContext);
  console.log('gender', selected);

  const handleChange = (e) => {
    console.log(e);
    console.log('value', e.target.defaultValue);

    e.target.checked === true ? addToSelected(e.target.defaultValue) : removeFromSelected(e.target.defaultValue);
  }

  return (<>
    <h4 className="mt-2">Gender</h4>
    <Form className="gender">
      <Form.Check type={'checkbox'} id={`box_All`} label={`All`} value={'All'} className="check" defaultChecked="true" onChange={handleChange} />
      {['Women', 'Men', 'Kid'].map((gender) => (
        <Form.Check type={'checkbox'} id={`box_${gender}`} label={`${gender}`} value={`${gender}`} className="check" onChange={handleChange} />
      ))}
    </Form>
  </>)
}

export function Category() {
  const { selectedCategory, addSelectedCategory,  } = useContext(CartContext);
  console.log('category', selectedCategory);

  const handleChange = (e) => {
    console.log(e);
    console.log('value', e.target.innerText);

    addSelectedCategory(e.target.innerText);
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
        <Button className="category_btn s" value={category.cate} id="button-addon1"  onClick={handleChange}>
          <category.icon />
          <p>{category.cate}</p>
        </Button>
      ))}
    </div>
  </>)
}

export function Price() {
  const { selected, addToSelected, removeFromSelected } = useContext(CartContext);
  console.log('gender', selected);

  const handleChange = (e) => {
    console.log(e);
    console.log('value', e.target.defaultValue);

    e.target.checked === true ? addToSelected(e.target.defaultValue) : removeFromSelected(e.target.defaultValue);
  }

  const prices = [
    // id: [lowerbound, upperbound]
    {upperPrice: 0, lowerPrice: 100},
    {upperPrice: 100, lowerPrice: 300},
    {upperPrice: 300, lowerPrice: 500},
    {upperPrice: 500, lowerPrice: 1000},
    {upperPrice: 1000, lowerPrice: null}
  ]

  return (<>
    <h4 className="pt-3">Price</h4>
    <Form className="Price">
      {prices.map((price) => (
        <Form.Check type={'checkbox'} id={`box_${price.upperPrice}`} label={`$${price.upperPrice} - $${price.lowerPrice}`} value={[price.upperPrice, price.lowerPrice]} className="check"  onChange={handleChange} />
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
