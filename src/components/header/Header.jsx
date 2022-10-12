import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ frm }) => {
  return (
    <header>
      <p className="heading">Product {frm ? "Add" : "List"}</p>
      {frm ? (
        <div className="actions">
          <button id="save-product-btn">Save</button>
          <Link to={"/"}>
            <button>Cancel</button>
          </Link>
        </div>
      ) : (
        <div className="actions">
          <Link to={"add-product"}>
            <button>ADD</button>
          </Link>
          <button id="delete-product-btn">MASS DELETE</button>
        </div>
      )}
    </header>
  );
};

export default Header;
