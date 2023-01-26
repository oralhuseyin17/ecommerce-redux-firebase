import React from "react";
import { useSelector } from "react-redux";
const Checkout = () => {
  const totalQty = useSelector(state => state.cart.totalQuantity)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <section>
      <div className="container mx-auto">
        <div className="flex">
          <div className="flex-[2_2_0]">
            <div className="pr-5">
              <h6 className="font-bold text-xl mb-3">Billing Information</h6>
              <form>
                <div>
                  <input type="text" placeholder="Enter your name" className="outline-0 border-gray border-[2px] w-full p-2 mb-3" />
                </div>
                <div>
                  <input type="email" placeholder="Enter your email" className="outline-0 border-gray border-[2px] w-full p-2 mb-3" />
                </div>
                <div>
                  <input type="number" placeholder="Phone number" className="outline-0 border-gray border-[2px] w-full p-2 mb-3" />
                </div>
                <div>
                  <input type="text" placeholder="Street address" className="outline-0 border-gray border-[2px] w-full p-2 mb-3" />
                </div>
                <div>
                  <input type="text" placeholder="City" className="outline-0 border-gray border-[2px] w-full p-2 mb-3" />
                </div>
                <div>
                  <input type="text" placeholder="Postal code" className="outline-0 border-gray border-[2px] w-full p-2 mb-3" />
                </div>
                <div>
                  <input type="text" placeholder="Country" className="outline-0 border-gray border-[2px] w-full p-2 mb-3" />
                </div>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-[#030c48] text-white p-3 rounded-md">
              <div className="flex justify-between items-center mb-3">
                <p>Total Qty:</p>
                <p>{totalQty} items</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p>Subtotal:</p>
                <p>${totalAmount}</p>
              </div>
              <div className="flex justify-between items-center mb-3">
                <p>Shipping:</p>
                <p>$0</p>
              </div>

              <div className="flex justify-between items-center border-t-[1px] py-2 mb-5">
                <p className="font-bold text-xl">Total Cost:</p>
                <p className="font-bold text-xl">${totalAmount}</p>
              </div>
              <button className="bg-white font-semibold text-[#030c48] w-full rounded-sm py-1">Place an order</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Checkout;
