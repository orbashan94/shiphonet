import React from "react";

import ProductCard from "./ProductCard";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "לחם מחמצת כוסמין",
    description:
      "תוספות לבחירה: זיתים, עגבניות מיובשות, זרעים וגרעינים, שומשום, צימוקים ואגוזים. לאחר ההזמנה ניצור קשר לבחירת תוספות.",
    price: 35,
    image: "meals/cosmin.jpeg",
  },
  {
    id: "m2",
    name: "פרסבורגר פרג",
    description: "לאוהבי הפרג עוגה קלאסית מפנקת ומפוצצת בפרג לימוני",
    price: 60,
    image: "/meals/pereg.jpeg",
  },

  {
    id: "m3",
    name: "סטיקי באן",
    description:
      "מאפה נימוח ואוורירי בטעמי קינמון ודבש עם פקאנים קלויים (מומלץ להזמין לפחות שתיים).",
    price: 10,
    // image: "meals/ban.jpeg",
  },

  {
    id: "m4",
    name: " שמרים שוקולד ",
    description: "עשירה בשוקולד איכותי",
    price: 55,
    // image: "meals/shmarim-shoko.jpeg",
  },

  {
    id: "m5",
    name: "שמרים ריקוטה",
    description: "בצק שמרים במילוי גבינה וצימוקים",
    price: 55,
    // image: "meals/shmarim-rikota.jpeg",
  },

  {
    id: "m6",
    name: "בחושה מייפל פקאן",
    description: "אוורירית ורכה עם מעטה קריספי של סוכר חום ופקאנים קלויים",
    price: 45,
    // image: "meals/pekan.jpeg",
  },

  {
    id: "m7",
    name: "פוגאס אישי",
    description:
      "מאפה מבוסס קמחים מלאים ומחמצת 100% בתוספת גבינות ועשבי תיבול/אריסה",
    price: 15,
    // image: "meals/fugas.jpeg",
  },
  {
    id: "m8",
    name: "עוגיית פאדג שוקולד",
    description: "עשירה ונימוחה לאוהבי השוקולד (העוגייה גדולה יותר מהתמונה)",
    price: 10,
    // image: "meals/fadg-shokolad.jpeg",
  },
  {
    id: "m9",
    name: "בחושה קוקוס תפוז",
    description: "עסיסית ועשירה בטעמי תפוז",
    price: 45,
  },
  {
    id: "m10",
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
