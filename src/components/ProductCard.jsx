import React from "react";
import { useState, useContext } from "react";
import CartContext from "../store/cart-context";

import defaultImage from "../assets/images/logo.png";

const ProductCard = (props) => {
  //const [amountIsValid, setAmountIsValid] = useState(true);
  const [amount, setAmount] = useState(1);
  const [note, setnote] = useState("");
  const cartCtx = useContext(CartContext);

  const price = `₪${props.price.toFixed(2)}`;

  const addProduct = () => {
    // if (
    //   enteredAmount.trim().length === 0 ||
    //   enteredAmount < 1 ||
    //   enteredAmount > 5
    // ) {
    //   setAmountIsValid(false);
    //   return;
    // }

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      note: note,
    });
  };

  const openImage = () => {
    props.setImage(props.image);
    props.setDisplayDialog(true);
  };

  return (
    <div className="product-card">
      <img
        alt=""
        src={props?.image ? props.image : defaultImage}
        onClick={() => openImage()}
      />

      <div className="product-card-info">
        <div>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
        </div>
        <h6>{price}</h6>
      </div>

      <div className="divider"></div>

      <div className="product-card-actions">
        <div className="qty">
          <span>כמות</span>
          <input
            type="number"
            min={1}
            max={5}
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </div>

        <input
          className="notes-input"
          type="text"
          placeholder="הערות/שינויים"
          onChange={(e) => {
            setnote(e.target.value);
          }}
        />

        <button onClick={addProduct}>הוסף</button>
      </div>
    </div>
  );
};

export default ProductCard;
