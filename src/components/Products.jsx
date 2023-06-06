import React from "react";

import ProductCard from "./ProductCard";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "לחם מחמצת כוסמין",
    description:
      "תוספות לבחירה: זיתים, עגבניות מיובשות, זרעים וגרעינים, שומשום, צימוקים ואגוזים. לאחר ההזמנה ניצור קשר לבחירת תוספות.",
    price: 35,
    image: "cosmin.jpeg",
  },
  {
    id: "m2",
    name: "פרסבורגר פרג",
    description: "לאוהבי הפרג עוגה קלאסית מפנקת ומפוצצת בפרג לימוני",
    price: 60,
    image: "pereg.jpeg",
  },
  {
    id: "m3",
    name: " שמרים שוקולד ",
    description: "עשירה בשוקולד איכותי",
    price: 55,
    image: "shmarim-shoko.jpeg",
  },
  {
    id: "m4",
    name: "בחושה מייפל פקאן",
    description: "אוורירית ורכה עם מעטה קריספי של סוכר חום ופקאנים קלויים",
    price: 45,
    image: "pekan2.jpeg",
  },

  {
    id: "m5",
    name: "פוגאס אישי",
    description:
      "מאפה מבוסס קמחים מלאים ומחמצת 100% בתוספת גבינות ועשבי תיבול/אריסה",
    price: 15,
    image: "fugas.jpeg",
  },
  {
    id: "m6",
    name: "עוגיית שוקולד צ’יפס",
    description:
      "עוגייה נימוחה מלאה בשלושה סוגי שוקולד",
    price: 10,
    image: "shoko-chips.jpeg",
  },
  {
    id: "m7",
    name: "פרסבורגר אגוזים",
    description: "מאפה שמרים ממולא במלית אגוזי מלך לימונית",
    price: 60,
  },

];

const Products = ({ setDisplayDialog, setImage }) => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <ProductCard
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image ? meal.image : null}
      setDisplayDialog={setDisplayDialog}
      setImage={setImage}
    />
  ));

  return (
    <div className="products">
      <ul>{mealsList}</ul>
    </div>
  );
};

export default Products;
