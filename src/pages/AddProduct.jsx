import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import DvdForm from "../components/forms/DvdForm";
import FurnitureForm from "../components/forms/FurnitureForm";
import BookForm from "../components/forms/BookForm";
import "./AddProduct.scss";

const AddProduct = () => {
  return (
    <div className="container">
      <Header frm={true} />
      <form id="product_form">
        <div className="input">
          <label htmlFor="sku">SKU</label>
          <input type="text" name="sku" id="sku" />
        </div>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="input">
          <label htmlFor="price">Price ($)</label>
          <input type="number" name="price" id="price" />
        </div>
        <div className="input">
          <label htmlFor="productType">Type Switcher</label>
          <select name="productType" id="productType">
            <option value="">Type Switcher</option>
            <option value="DVD" id="DVD">
              DVD
            </option>
            <option value="Furniture" id="Furniture">
              Furniture
            </option>
            <option value="Book" id="Book">
              Book
            </option>
          </select>
        </div>
        {/* <DvdForm />
        <FurnitureForm />
        <BookForm /> */}
      </form>
      <Footer />
    </div>
  );
};

export default AddProduct;
