import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"
import products from "../assets/data/products"
import ProductList from "../components/product/ProductList"
const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value

    const filteredProducts = products.filter(item => (
      item.category === filterValue
    ))
    setProductsData(filteredProducts)
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts =
      products.filter(item =>
        item.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )

    setProductsData(searchedProducts)
  }
  return (
    <section >
      <div className="container mx-auto">
        <div className="flex justify-between mt-10">
          <div>
            <select onChange={handleFilter} className="bg-black text-white p-2 rounded-md ">
              <option>Filter By Category</option>
              <option value="sofa">Sofa</option>
              <option value="mobile">Mobile</option>
              <option value="chair">Chair</option>
              <option value="watch">Watch</option>
              <option value="wireless">Wireless</option>
            </select>
          </div>
          <div>
            <select className="bg-black text-white p-2 rounded-md">
              <option>Sort By</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          <div className="relative flex items-center">
            <input onChange={handleSearch} type="text" placeholder="Search..." className="outline-0 border-[2px] p-2 rounded-md" />
            <AiOutlineSearch className="absolute right-2" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {productsData.length === 0 ?
          <div className="flex items-center justify-center h-[75vh]">
            <h1 className="text-black text-3">No Products are found!</h1>
          </div>
          :
          <ProductList data={productsData} />}
      </div>
    </section >
  )
};

export default Shop;
