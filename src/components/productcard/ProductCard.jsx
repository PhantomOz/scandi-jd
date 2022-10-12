import React from "react";
import "./ProductCard.scss";

const ProductCard = () => {
  return (
    <div className="card">
      <div className="box">
        <input
          type="checkbox"
          name="delete"
          id="delete"
          className="delete-checkbox"
        />
      </div>
      <div className="info">
        <p id="sku">JVC00276</p>
        <p className="name">Acme DISC</p>
        <p id="price">1.00 $</p>
        <p id="size">700 MB</p>
      </div>
    </div>
  );
};

export default ProductCard;
