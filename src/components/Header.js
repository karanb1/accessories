import React from "react";
import Back from "../Images/back.svg";
import Heart from "../Images/heart.svg";
import Cart from "../Images/cart.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="icon-container">
        <img src={Back} alt="back" style={{ marginLeft: 8 }} />
      </div>
      <div style={{ display: "flex" }}>
        <div className="icon-container">
          <img src={Heart} alt="heart" />
        </div>
        <div className="icon-container" style={{ marginLeft: 10 }}>
          <img src={Cart} alt="cart" />
        </div>
      </div>
    </div>
  );
};

export default Header;
