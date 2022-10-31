import React, { useRef } from "react";
import "./ProductCard.scss";

const ProductCard = ({ product, sSelected, selected }) => {
  const boxRef = useRef(false);
  const handleChange = () => {
    if (boxRef.current.checked) {
      let newSelected = selected;
      newSelected.push(product.sku);
      sSelected(newSelected);
    } else {
      let newSelected = selected.filter((item) => item !== product.sku);
      sSelected(newSelected);
    }
  };
  return (
    <div className="card">
      <div className="box">
        <input
          type="checkbox"
          name="delete"
          id="delete"
          className="delete-checkbox"
          ref={boxRef}
          onChange={handleChange}
        />
      </div>
      <div className="info">
        <p id="sku">{product?.sku}</p>
        <p className="name">{product?.name}</p>
        <p id="price">{parseInt(product?.price).toFixed(2)} $</p>
        {product?.type === "DVD" && <p id="size">Size: {product?.size} MB</p>}
        {product?.type === "book" && (
          <p id="weight">Weight: {product?.weight}KG</p>
        )}
        {product?.type === "furniture" && (
          <p id="weight">
            Dimension: {product?.height}x{product?.width}x{product?.length}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
