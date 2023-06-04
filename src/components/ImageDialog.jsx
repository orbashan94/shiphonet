import React from "react";
import defaultImage from "../assets/images/logo.png";

const ImageDialog = ({ image, setDisplayDialog }) => {
  return (
    <div className="dialog-container" onClick={() => setDisplayDialog(false)}>
      <div className="dialog">
        <img src={image ? `./${image}` : defaultImage} alt="the image" />
        <h1>sdvdsvds</h1>
      </div>
    </div>
  );
};

export default ImageDialog;
