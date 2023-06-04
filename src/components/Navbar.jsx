import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../assets/images/logo.png";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const Navbar = ({ setCartIsShown }) => {
  const cartCtx = useContext(CartContext);
  let totalItems = 0;

  cartCtx.items.forEach((item) => {
    totalItems += item.amount;
  });

  return (
    <header>
      <nav className="navbar">
        <img className="logo" src={logo}></img>
        <button
          className="cart-badge"
          onClick={() => {
            if (totalItems > 0) {
              setCartIsShown(true);
            }
          }}
        >
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
          <ShoppingCartIcon style={{ fontSize: "30px" }} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
