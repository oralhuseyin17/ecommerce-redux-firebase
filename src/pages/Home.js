import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-img.png";
import ProductList from "../components/product/ProductList";
import Services from "../components/services/Services";
import products from "../assets/data/products";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState(products);
  const [bestSalesProducts, setBestSalesProducts] = useState(products);
  const [mobileProducts, setMobileProducts] = useState(products);
  const [wirelessProducts, setWirelessProducts] = useState(products);

  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => {
      return item.category === "chair";
    });
    const filteredBestSalesProducts = products.filter((item) => {
      return item.category === "sofa";
    });
    const filteredMobileProducts = products.filter((item) => {
      return item.category === "mobile";
    });
    const filteredWirelessProducts = products.filter((item) => {
      return item.category === "wireless";
    });
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
  }, []);

  
  return (
    <div>
      <section className="bg-[#f0f8ff] py-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="flex-1">
              <p>Trending product in 2022</p>
              <h1 className="font-bold text-3xl mt-4">
                Make Your Interior More Minimalistic & Modern
              </h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <button className="bg-[#030c48] text-white py-2 px-6 rounded-md mt-5">
                <Link to="/shop">SHOP NOW</Link>
              </button>
            </div>
            <div className="flex-1">
              <img src={heroImg} />
            </div>
          </div>
        </div>
      </section>
      <Services />
      <ProductList data={trendingProducts} title="Trending Products" />
      <ProductList data={bestSalesProducts} title="Best Sales Products" />
      <ProductList data={mobileProducts} title="Phones" />
      <ProductList data={wirelessProducts} title="Wireless" />
    </div>
  );
};

export default Home;
