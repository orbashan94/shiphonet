import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/images/logo.png";

const Navbar = ({ setCartIsShown }) => {
  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo}></img>
        <button
          className="cart-badge"
          onClick={() => {
            setCartIsShown(true);
          }}
        >
          <span className="badge">1</span>
          <ShoppingCartIcon style={{ fontSize: "30px" }} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
