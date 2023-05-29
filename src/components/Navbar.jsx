import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo}></img>
        <div className="cart-badge">
          <span className="badge">1</span>
          <ShoppingCartIcon style={{ fontSize: "30px" }} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
