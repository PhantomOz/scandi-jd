import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ProductCard from "../components/productcard/ProductCard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <div className="productlist">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
