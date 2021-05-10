import React from "react";
import LikeBtn from "./LikeBtn";

const Card = ({ product, index }) => {
  return (
    <div className="card">
      <div>
        <img
          src={product?.featured_image?.src}
          style={{
            height: 200,
            width: "100%",
            borderRadius: 22,
          }}
          alt="product"
        />
        <LikeBtn />
      </div>

      <div className="info" style={{ right: index % 2 !== 0 ? 0 : null }}>
        <div
          className="tag"
          style={{
            right: index % 2 !== 0 ? 0 : null,
            left: index % 2 === 0 ? 0 : null,
            borderRadius:
              index % 2 !== 0 ? "8px 0px 0px 8px" : "0px 8px 8px 0px",
          }}
        >
          <span>{product?.brand_info?.name}</span>
        </div>
        <p className="product-name">{product?.name}</p>
        <p>
          ₹{product?.base_price?.value}{" "}
          <strike>₹{product?.retail_price?.value}</strike>
          <span>(0% off)</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
