import React from "react";
import heroImage from "../assets/images/main-image.jpeg";

const BannerHero = () => {
  return (
    <div className="banner-hero">
      <img className="banner-hero-image" src={heroImage} alt="bread image" />
      <div className="intro">
        <h2>לחמי מחמצת מאפים וקינוחי בוטיק בעבודת יד</h2>
        <br></br>
        <h3>הזמנות ליום חמישי יתקבלו עד רביעי בשעה 09:00.</h3>
        <h3>הזמנות לשישי יתקבלו עד חמישי בשעה 09:00</h3>
        <h3>ניתן להזמין בווטסאפ או דרך האתר.</h3>
      </div>
    </div>
  );
};

export default BannerHero;
