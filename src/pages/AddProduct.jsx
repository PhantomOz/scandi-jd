import React, { useState, useRef } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import DvdForm from "../components/forms/DvdForm";
import FurnitureForm from "../components/forms/FurnitureForm";
import BookForm from "../components/forms/BookForm";
import "./AddProduct.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const initialValues = {
    sku: "",
    name: "",
    price: 1,
    productType: "",
    size: "",
    weight: "",
    height: "",
    width: "",
    length: "",
  };
  const [formValues, setFormValues] = useState({ ...initialValues });
  const formRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("trying to submit form");
    const addProduct = async () => {
      try {
        const res = await axios({
          url: "https://innoxious-extension.000webhostapp.com/productapi/api/addProduct.php",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: { ...formValues },
        });
        console.log(res.data);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    addProduct();
  };

  return (
    <div className="container">
      <Header frm={true} formRef={formRef} />
      <form id="product_form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input">
          <label htmlFor="sku">SKU</label>
          <input
            type="text"
            name="sku"
            id="sku"
            value={formValues.sku}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            name="price"
            min={1}
            value={formValues.price}
            id="price"
            onChange={handleChange}
            required
          />
        </div>
        <div className="input">
          <label htmlFor="productType">Type Switcher</label>
          <select
            name="productType"
            id="productType"
            value={formValues.productType}
            onChange={handleChange}
            required
          >
            <option value="">Type Switcher</option>
            <option value="DVD" id="DVD">
              DVD-disk
            </option>
            <option value="Furniture" id="Furniture">
              Furniture
            </option>
            <option value="Book" id="Book">
              Book
            </option>
          </select>
        </div>
        {formValues.productType === "DVD" && (
          <DvdForm size={formValues.size} change={handleChange} />
        )}
        {formValues.productType === "Furniture" && (
          <FurnitureForm
            length={formValues.length}
            height={formValues.height}
            width={formValues.width}
            change={handleChange}
          />
        )}
        {formValues.productType === "Book" && (
          <BookForm weight={formValues.weight} change={handleChange} />
        )}
        <button type="submit" ref={formRef}>
          submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default AddProduct;
