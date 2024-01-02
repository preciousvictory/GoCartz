import React from "react";
import "../css/SideBar.css";
import { Form, Button } from "react-bootstrap";
import { MdLaptop } from "react-icons/md";
import { GiClothes, GiRunningShoe, GiLipstick, GiHeartNecklace } from "react-icons/gi";
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
  return (<>
    <h4 className="mt-2">Gender</h4>
    <Form className="gender">
      <Form.Check  type={'checkbox'} id={`box_All`} label={`All`} className="check" defaultChecked="true"/>
      {['Women', 'Men', 'Kid'].map((gender) => (
        <Form.Check  type={'checkbox'} id={`box_${gender}`} label={`${gender}`} className="check"/>
      ))}
    </Form>
  </>)
}

export function Category() {
  const categories = [
    {cate: 'Clothing', icon: GiClothes},
    {cate: 'Shoes', icon: GiRunningShoe},
    {cate: 'Bags', icon: BsHandbagFill}, 
    {cate: 'Cosmetics', icon: GiLipstick},
    {cate: 'Jewelries', icon: GiHeartNecklace},
    {cate: 'Wristwatch', icon: BsWatch},
    {cate: 'Gadgets', icon: MdLaptop},
  ]

  return (<>
    <h4 className="mt-3">Category</h4>
    <div className="category">   
      {categories.map((category) => (
        <Button className="category_btn s" id="button-addon1" type="submit">
          <category.icon />
          <p>{category.cate}</p>
        </Button>
      ))}
    </div>
    </>)
}

export function Price() {
    return (<>
      <h4 className="pt-3">Price</h4>
      <Form>
        <Form.Check  type={'checkbox'} id="box_1" label={`$0 - $100`} className="check"/>
        <Form.Check  type={'checkbox'} id="box_1" label={`$100 - $500`} className="check"/>
        <Form.Check  type={'checkbox'} id="box_1" label={`$500 - $1000`} className="check"/>
        <Form.Check  type={'checkbox'} id="box_1" label={`$1000 - $5000`} className="check"/>
        <Form.Check  type={'checkbox'} id="box_1" label={`$5000 and above`} className="check"/>
      </Form>
    </>)
}

export function Colors() {
    return (<>
      <h1>Category</h1>
    </>)
}

export default SideBar;
