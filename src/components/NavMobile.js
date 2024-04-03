import React from "react";
import { useContext, useState, useRef } from "react";
import { useClickAway } from "react-use";
import { LinkContainer } from 'react-router-bootstrap';
import { AnimatePresence, motion } from "framer-motion";
import { useDimensions } from "./useDimensions";
import { CartContext } from '../context/Context';
import { Nav, Navbar, Container } from "react-bootstrap";
import { MdFavorite, MdShoppingCart, MdAccountCircle } from "react-icons/md";
import "../css/NavMobile.css";
import SearchBar from "./SearchBar";
import SideBar from '../components/SideBar';
import { Squash as Hamburger } from "hamburger-react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const { cartItems, favoriteItems } = useContext(CartContext);

  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  // using framer motion for animation
  const containerRef = useRef(null);
  const { innerHeight } = useDimensions(containerRef);

  const countItems = (Items) => {
    let c = 0;
    for (let i in Items) {
      if (Items[i] > 0) c += 1;
    }
    return c;
  }

  return (
    <>
      <Navbar ref={ref} expand="lg" className="NavMobile lg:hidden">
        <Container>
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          <AnimatePresence>
          {isOpen && (
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={innerHeight}
                ref={containerRef}
                className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
              >
              <motion.div className="background" variants={sidebar} />
              <SideBar />
              {/* <MenuToggle toggle={() => toggleOpen()} /> */}
            </motion.nav>
          )}
          </AnimatePresence>

          <LinkContainer to="/GoCartz">
            <Navbar.Brand href="#home" className="logo">
              <span style={{ color: "white" }}>Go</span>
              <span style={{ color: "#F88A24" }}>Cartz</span>
            </Navbar.Brand>
          </LinkContainer>

          <Nav activeKey="/">
            <Nav.Item>
              <LinkContainer to="/GoCartz/likes">
                <Nav.Link className="count_icon">
                  <MdFavorite size={24} className="icons" />
                  {countItems(favoriteItems) > 0 ? <span>{countItems(favoriteItems)}</span> : ""}
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to="/GoCartz/cart">
                <Nav.Link className="count_icon">
                  <MdShoppingCart size={24} className="icons" />
                  {countItems(cartItems) > 0 ? <span>{countItems(cartItems)}</span> : ""}
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>

            <Nav.Item>
              <LinkContainer to="/GoCartz">
                <Nav.Link><MdAccountCircle size={24} className="icons" /></Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Container>

      </Navbar>

      <div className="smSearch">
        <SearchBar />
      </div>
    </>
  );
};

// const menu = () => {
//     <SideBar />
// }

export default NavMobile;
// #F88A24
// black - 1F1F25
