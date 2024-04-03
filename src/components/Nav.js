import React from "react";
import { useContext } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { CartContext } from '../context/Context';
import { Nav, Navbar, Container } from "react-bootstrap";
import { MdFavorite, MdShoppingCart, MdAccountCircle } from "react-icons/md";
import "../css/Nav.css";
import SearchBar from "./SearchBar";

const Nav1 = () => {
  const { cartItems, favoriteItems, loadUserData } = useContext(CartContext);

  const countItems = (Items) => {
    let c = 0;
    for (let i in Items) {
      if (Items[i] > 0) c += 1;
    }
    return c;
  }

  return (
    <Navbar expand="lg" className="Nav1">
      <Container>
        <LinkContainer onClick={loadUserData} to="/GoCartz">
          <Navbar.Brand href="#home" className="logo">
            <span style={{ color: "white" }}>Go</span>
            <span style={{ color: "#F88A24" }}>Cartz</span>
          </Navbar.Brand>
        </LinkContainer>

        <SearchBar />
        
        <Nav activeKey="/">
          <Nav.Item>
            <LinkContainer to="/GoCartz/likes">
              <Nav.Link className="count_icon">
                <MdFavorite size={24} className="icons"/>
                {countItems(favoriteItems) > 0 ? <span>{countItems(favoriteItems)}</span> : ""}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>

          <Nav.Item>
            <LinkContainer to="/GoCartz/cart">
              <Nav.Link className="count_icon">
                <MdShoppingCart size={24} className="icons"/>
                {countItems(cartItems) > 0 ? <span>{countItems(cartItems)}</span> : ""}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>

          <Nav.Item>
            <LinkContainer to="/GoCartz">
              <Nav.Link><MdAccountCircle size={24} className="icons"/></Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Nav1;
// #F88A24
// black - 1F1F25
