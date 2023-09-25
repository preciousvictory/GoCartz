import React from "react";
import "../css/SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <Category />
      <Price />
      <Colors />
    </div>
  )
};

export function Category() {
    return (<>
      <h1>Category</h1>
    </>)
}

export function Price() {
    return (<>
      <h1>Category</h1>
    </>)
}

export function Colors() {
    return (<>
      <h1>Category</h1>
    </>)
}

export default SideBar;
