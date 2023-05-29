import React from "react";
import mealImage from "../assets/images/meals/cosmin.jpeg";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={mealImage} alt="" />

      <div className="product-card-info">
        <div>
          <h3>לחם מחמצת כוסמין</h3>
          <p>
            תוספות לבחירה: זיתים, עגבניות מיובשות, זרעים וגרעינים, שומשום,
            צימוקים ואגוזים. לאחר ההזמנה ניצור קשר לבחירת תוספות.
          </p>
        </div>
        <h6>₪35.00</h6>
      </div>

      <div>
        <input type="text" placeholder="הערות/שינויים" />
        <div>
          <span>כמות</span>
          <input type="number" />
        </div>
        <button>הוסף</button>
      </div>
    </div>
  );
};

export default ProductCard;
