import React from "react";
import { FaCarAlt } from "react-icons/fa";
const Services = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between">
          <div className="bg-pink-100 flex items-center px-4 py-4 rounded-sm">
            <div className="bg-[#030c48] rounded-full w-7 h-7 flex items-center justify-center mr-3">
              <FaCarAlt className="text-white" />
            </div>
            <div>
              <p className="font-bold">Free Shipping</p>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <div className="bg-cyan-100 flex items-center px-4 py-4 rounded-sm">
            <div className="bg-[#030c48] rounded-full w-7 h-7 flex items-center justify-center mr-3">
              <FaCarAlt className="text-white" />
            </div>
            <div>
              <p className="font-bold">Easy Returns</p>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <div className="bg-lime-100 flex items-center px-4 py-4 rounded-sm">
            <div className="bg-[#030c48] rounded-full w-7 h-7 flex items-center justify-center mr-3">
              <FaCarAlt className="text-white" />
            </div>
            <div>
              <p className="font-bold">Secure Payment</p>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
          <div className="bg-slate-100 flex items-center px-4 py-4 rounded-sm">
            <div className="bg-[#030c48] rounded-full w-7 h-7 flex items-center justify-center mr-3">
              <FaCarAlt className="text-white" />
            </div>
            <div>
              <p className="font-bold">Back Guarantee</p>
              <span>Lorem ipsum dolor sit amet.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
