import React from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import { useContext, useState } from "react";
import { TextField } from "@mui/material";

import emailjs from "emailjs-com";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);

  const totalAmount = `₪${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          note={item.note}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
          image={item.image}
        />
      ))}
    </ul>
  );

  const renderProductTable = () => {
    let output = "";
    for (let i = 0; i < cartCtx.items.length; i++) {
      output += `<tr>
                  <th>${i + 1}</th>
                  <th>${cartCtx.items[i].name}</th>
                  <th>${cartCtx.items[i].note}</th>
                  <th>${cartCtx.items[i].amount}</th>
                  <th>${cartCtx.items[i].price}</th>
                </tr>`;
    }
    let table = `
                          <table>
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Note</th>
                                    <th>Qty</th>
                                    <th>Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                ${output}
                                </tbody>
                                </table>
                                `;

    console.log(table);
    return table;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (cartCtx.items.length == 0) return;
    let table = renderProductTable();
    let formData = new FormData();
    formData.append("user_name", userName);
    formData.append("user_phone", phone);
    formData.append("order_date", date);
    formData.append("table", table);
    formData.append("total_order", cartCtx.totalAmount.toFixed(2));
    console.log(formData);

    const form = document.createElement("form");
    formData.forEach((value, key) => {
      const field = document.createElement("input");
      field.setAttribute("type", "hidden");
      field.setAttribute("name", key);
      field.setAttribute("value", value);
      form.appendChild(field);
    });

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form,
        process.env.REACT_APP_PUBLIC_KEY,
        table
      )
      .then(
        setIsOrderSubmitted(true),
        (result) => console.log(result.text),
        (error) => console.log(error.text)
      );

    e.target.reset();
  };

  return (
    <>
      {isOrderSubmitted ? (
        <div>
          <h2>!תודה על הזמנתך</h2>
          <h3> :) יצרו עמך קשר בשעות הקרובות</h3>
        </div>
      ) : (
        <div
          className="cart-popup-overlay"
          onClick={() => {
            props.setCartIsShown(false);
          }}
        >
          <div
            className="cart-container"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="cart-products-list">{cartItems}</div>
            <div>
              <span> סך הזמנה </span>
              <span>{totalAmount}</span>
              <form onSubmit={sendEmail}>
                <div className="input-group">
                  <label>שם מלא</label>
                  <input
                    className="input"
                    type="text"
                    name="user_name"
                    required
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>מס' טלפון</label>
                  <input
                    className="input"
                    type="number"
                    name="user_phone"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <input type="hidden" name="table" />
                <div className="input-group">
                  <label>למתי הזמנה?</label>
                  <select
                    className="input"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  >
                    <option value={"חמישי 8/6"}>חמישי 8/6</option>
                  </select>
                </div>

                <div className="cart-btn">
                  <button onClick={props.onClose}>סגור</button>
                  <button id="submit-btn" type="submit">
                    הזמן
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
