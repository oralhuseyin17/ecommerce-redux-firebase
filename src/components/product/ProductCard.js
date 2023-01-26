import React from "react";
import { FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id: item.id,
      imgUrl: item.imgUrl,
      productName: item.productName,
      price: item.price,
    }))
    toast.success('Product added successfully')
  }

  return (
    <div className="w-[23%] h-auto cursor-pointer">
      <Link to={`/shop/${item.id}`}>
        <div className="w-full">
          <img src={item.imgUrl} />
        </div>
      </Link>
      <Link to={`/shop/${item.id}`}>
        <div className="text-center">
          <p className="font-bold text-2xl">{item.productName}</p>
          <p className="text-md">{item.category}</p>
        </div>
      </Link>
      <div className="flex justify-between items-center">
        <p className="text-md font-bold">{item.price}$</p>
        <FaPlusCircle
          className="text-2xl"
          onClick={addToCart}
        />
      </div>
    </div>
  );
};

export default ProductCard;
