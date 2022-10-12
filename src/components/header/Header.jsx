import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = ({ frm, formRef, selected }) => {
  const handleDelete = () => {
    console.log(selected);
    const deleteProduct = async () => {
      try {
        const res = await axios({
          url: "https://innoxious-extension.000webhostapp.com/productapi/api/deleteProduct.php",
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          data: { selected: selected },
        });
        console.log(res.data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    if (selected.length > 0) {
      deleteProduct();
    }
  };
  return (
    <header>
      <p className="heading">Product {frm ? "Add" : "List"}</p>
      {frm ? (
        <div className="actions">
          <button id="save-product-btn" onClick={() => formRef.current.click()}>
            Save
          </button>
          <Link to={"/"}>
            <button>Cancel</button>
          </Link>
        </div>
      ) : (
        <div className="actions">
          <Link to={"add-product"}>
            <button>ADD</button>
          </Link>
          <button id="delete-product-btn" onClick={handleDelete}>
            MASS DELETE
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
