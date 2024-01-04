import React from "react";
// import products from '../data/data.json'
import { Breadcrumb, Nav, NavDropdown } from "react-bootstrap";
// import { FaAngleRight } from "react-icons/fa";


export function Filters() {
    const groups = {
        'Clothing': ['Shirt', 'Pant/Trouser', 'Skirt', 'Coat & Jackets'],
        'Foot Wear': ['Snickers', 'Heels', 'Flat Shoes', 'Sandals'],         
        'Bags': ['Purse', 'Backpack', 'Handbag'],
        'Cosmetics': ['lipstick', 'lotion', 'cream', 'makeup', 'powder'],
        'Jewelries': ['Necklace', 'Earings', 'Bracelets', 'Bangles'],
        'Wristwatch': ['Wrist-watch'],
        'Accessories': ['Face Cap', 'Scarfs'],
        'gagdet': ['Laptop', 'Phone'],
    }
    const categories = Object.keys(groups);


    return (
        <>
        <div>
        <Breadcrumb style={{fontSize: '10px'}}>
            <Breadcrumb.Item href="#" style={{fontSize: '10px'}}>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Category
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Women</Breadcrumb.Item>
        </Breadcrumb>
        </div>
        
        <h3>Category</h3>
        <Nav>
            {categories.map((category) => {
                return (
                    CategorySection(groups, category)
                );
            })
            
            }     
        </Nav>
        </>
    );
}

function CategorySection(groups, category) {
    const len = groups[category];
    console.log(len);
    return(
        <NavDropdown
            id="nav-dropdown-dark-example"
            title={category}
            menuVariant="dark"
        >
        {len.map((item) => (
            <NavDropdown.Item href="#action/3.1" key={len.indexOf(item)}>{item}</NavDropdown.Item>
            // <li ><FaAngleRight className="cart"/></li>
        ))}
        </NavDropdown>
    );
}

export default Filters;