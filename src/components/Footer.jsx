import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>יעל מרקברייט 052-3770921</p>
        <a className="instagram" href="https://www.instagram.com/yaelmark/">
          <InstagramIcon />
        </a>
      </div>
      <div className="creator">
        <h6>Made by Or Bashan 2023</h6>
      </div>
    </footer>
  );
};

export default Footer;
