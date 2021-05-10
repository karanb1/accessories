import React from "react";
import Heart from "../Images/heart.svg";

const LikeBtn = () => {
  return (
    <div className="like">
      <img src={Heart} alt="heart" />
    </div>
  );
};

export default LikeBtn;
