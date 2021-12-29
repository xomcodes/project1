import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="top-footer">Nigeria</div>

      {/* <hr></hr> */}
      <div className="down-footer">
        <div className="left-footer">
          <a href="#" class="search">
            About
          </a>
          <a href="#" class="search">
            Advertising
          </a>
          <a href="#" class="search">
            Business
          </a>
          <a href="#" class="search">
            How search works
          </a>
        </div>

        <div className="middle-footer">
          <p>Carbon neutral since 2007</p>
        </div>

        <div className="right-footer">
          <a href="#" class="search">
            Privacy
          </a>
          <a href="#" class="search">
            Terms
          </a>
          <a href="#" class="search">
            Setting
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
