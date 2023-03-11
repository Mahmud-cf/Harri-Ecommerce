import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from '../../image/logo-black.de19b08e.svg'
import { useCart } from "react-use-cart";
import { useQuery } from "@tanstack/react-query";
import { getFashionProduct } from "../../Services";

function BasicExample() {
  const [upArrow, setUpArrow] = useState(false);
  const {totalItems} = useCart();

  const handler = () => {
    setUpArrow(!upArrow);
  };

  return (
    <Navbar expand="lg" className="position-fixed container-fluid navbar-fixed-class">
      <div className="main-logo" >
        <Navbar.Brand href="/">
          <img className="nav-image" src={logo} alt="logo" />
        </Navbar.Brand>
      </div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <div
              onClick={handler}
              className={upArrow ? "d-flex up-arrow for-color" : "d-flex down-arrow no-color"}
              style={{ alignItems: "center" }}
            >
              <NavDropdown title="SHOP" id="basic-nav-dropdown">
                <NavDropdown.Item href="/cloth-product">CLOTH</NavDropdown.Item>
                <NavDropdown.Item href="/fashion-product">
                  FASHION
                </NavDropdown.Item>
                <NavDropdown.Item href="tech-product">
                  TECHNOLOGY
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <IoChevronDownSharp className="main-down-arrow drop-arrow" />
              <IoChevronUpSharp className="main-up-arrow drop-arrow" />
            </div>
            <Nav.Link href="/about">ABOUT US</Nav.Link>
            <Nav.Link href="/contact">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      <div className="d-flex cart-icon">
        <div>
          <Link to='/cart' >
            <div className="cart-icon" ><BsCart3 /></div>
            <div className="cart-item-number d-flex">{totalItems}</div>
          </Link>
        </div>
        <div className="buy-now" ><a href="/">Bye now</a></div>
      </div>
      
    </Navbar>
  );
}

export default BasicExample;
