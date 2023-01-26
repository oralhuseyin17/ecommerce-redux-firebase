import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { GrCart } from "react-icons/gr";
import { useSelector } from "react-redux";
import User from "../../assets/images/user-icon.png"
import useAuth from "../../custom-hooks/useAuth";
import { auth } from "../../firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Header = () => {
  const [profile, setProfile] = useState(false);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const navigateToCart = () => {
    navigate('/cart')
  }

  const logout = () => {
    signOut(auth).then(() => {
      toast.success("Logged out");
      navigate('/login')
    }).catch(err => {
      toast.error(err.message)
    })
  }

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="py-5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h3>Logo</h3>
            </div>
            <div>
              <Link to="/home" className="mr-3">
                Home
              </Link>
              <Link to="/shop" className="mr-3">
                Shop
              </Link>
              <Link to="/cart">Cart</Link>
            </div>
            <div className="flex items-center">
              <div className="mr-3 relative">
                <div className="bg-black text-white absolute w-3 h-3 rounded-full flex justify-center items-center right-0 top-0 p-2 text-sm">
                  1
                </div>
                <AiOutlineHeart className="text-3xl" />
              </div>
              <div className="mr-3 relative cursor-pointer" onClick={navigateToCart}>
                <div className="bg-black text-white absolute w-3 h-3 rounded-full flex justify-center items-center right-0 top-0 p-2 text-sm">
                  {totalQuantity}
                </div>
                <GrCart className="text-3xl" />
              </div>
              <div className="relative">
                <img src={currentUser ? currentUser.photoURL : User} width={35} onClick={() => setProfile(!profile)} className="cursor-pointer" />
                <div className={profile ? `visible absolute bg-white shadow-md py-2 px-6` : `hidden absolute bg-white shadow-md py-2 px-6`}>
                  {
                    currentUser
                      ?
                      <span className="cursor-pointer" onClick={logout}>Logout</span>
                      :
                      <div className="flex flex-col">
                        <Link to="/signup" className="mb-3 cursor-pointer" onClick={() => setProfile(!profile)}>Signup</Link>
                        <Link to="/login" className="cursor-pointer" onClick={() => setProfile(!profile)}>Login</Link>
                      </div>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
