import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex-[3_3_0]">
            {cartItems.length === 0 ? <div className="flex items-center justify-center"><h2 className="font-bold text-3xl">Your cart is empty.</h2></div>
              :
              <table className="table-auto w-full">
                <thead>
                  <tr className="text-left border-b-[2px]">
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td><img src={item.imgUrl} width={100} className="object-cover" /></td>
                      <td>{item.productName}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}x</td>
                      <td>
                        <AiFillDelete className="cursor-pointer" onClick={() => dispatch(cartActions.deleteItem(item.id))} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>
          <div className="flex-1 ml-4">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <span className="font-bold text-2xl">${totalAmount}</span>
            </div>
            <p className="text-gray-500 text-sm">taxes and shipping will calculate in checkout</p>
            <button className="bg-[#030c48] text-white py-2 px-6 rounded-md mt-5 w-full">
              <Link to="/shop">Continue Shopping</Link>
            </button>
            <button className="bg-[#030c48] text-white py-2 px-6 rounded-md mt-5 w-full">
              <Link to="/checkout">Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Cart;
