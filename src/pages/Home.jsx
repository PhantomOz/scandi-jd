import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductCard from "../components/productcard/ProductCard";
import "./Home.scss";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "https://innoxious-extension.000webhostapp.com/productapi/api/getProduct.php"
        );
        console.log(res);
        setProducts(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="container">
      <Header selected={selected} />
      <div className="productlist">
        {products?.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            selected={selected}
            sSelected={setSelected}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
