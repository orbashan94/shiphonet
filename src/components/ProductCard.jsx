import React from "react";
import defaultImage from "../assets/images/logo.png";

const ProductCard = (props) => {
  const price = `₪${props.price.toFixed(2)}`;

  return (
    <div className="product-card">
      <img
        src={props.image}
        alt=""
        src={props?.image ? props.image : defaultImage}
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
        <div>
          <span>כמות</span>
          <input type="number" min={1} max={5} defaultValue={1} />
        </div>

        <input
          className="notes-input"
          type="text"
          placeholder="הערות/שינויים"
        />

        <button>הוסף</button>
      </div>
    </div>
  );
};

export default ProductCard;
