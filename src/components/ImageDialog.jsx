import React from "react";
import defaultImage from "../assets/images/logo.png";

const ImageDialog = ({ image, setDisplayDialog }) => {

  let img = "./meals/";

  if (!image) {
    img = defaultImage;
  }

  return (
    <div className="dialog-container" onClick={() => setDisplayDialog(false)}>
      <div className="dialog">
        <img src={image ? img + image : img} alt="the image" />
      </div>
    </div>
  );
};

export default ImageDialog;
