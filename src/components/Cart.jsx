import React from "react";

const Cart = ({ setCartIsShown }) => {
  return (
    <div
      className="cart-popup-overlay"
      onClick={() => {
        setCartIsShown(false);
      }}
    >
      <div
        className="cart-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="cart-products-list">products</div>
        <div>
          <span>סך הזמנה</span>
          <span>59₪</span>
          <form action="">
            <label>שם מלא</label>
            <input
              type="text"
              name="user_name"
              required
              // onChange={(e) => setUserName(e.target.value)}
            />
            <label>מס' טלפון</label>
            <input
              type="number"
              name="user_phone"
              required
              // onChange={(e) => setPhone(e.target.value)}
            />
            <input type="hidden" name="table" />
            <label>למתי הזמנה?</label>
            <select
            // onChange={(e) => {
            //   setDate(e.target.value);
            // }}
            >
              <option value={"חמישי 18/5"}>חמישי 1/6</option>
              <option value={"שישי 19/5"}>שישי 2/6</option>
            </select>
            <div>
              <button>סגור</button>
              <button type="submit">הזמן</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
