import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data, title }) => {
  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <h1 className="font-bold text-center text-3xl mb-3">{title}</h1>
        <div className="flex flex-wrap justify-around">
          {data.map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
