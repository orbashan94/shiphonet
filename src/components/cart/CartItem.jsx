import React from "react";
import defaultimage from "../../assets/images/logo.png";

const CartItem = (props) => {
  const price = `₪${props.price.toFixed(2)}`;
  return (
    <div className="cart-item">
      <img src={defaultimage} />

      <div className="cart-item-details">
        <h2>{props.name}</h2>
        <p>{props.note}</p>
        <div className="cart-item-price">
          <span>{price}</span>
          <span>x {props.amount}</span>
        </div>
      </div>

      <div className="cart-item-actions">
        <button onClick={props.onAdd}>+</button>
        <button onClick={props.onRemove}>−</button>
      </div>
    </div>
  );
};

export default CartItem;
