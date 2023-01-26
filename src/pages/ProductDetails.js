import React, { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import products from "../assets/data/products"
import { BsStarFill, BsStarHalf } from "react-icons/bs"
import { useDispatch } from 'react-redux'
import { cartActions } from "../redux/slices/cartSlice"
import { toast } from 'react-toastify'

const ProductDetails = () => {
  const [tab, setTab] = useState('desc')
  const [rating, setRating] = useState(null)
  const { id } = useParams();
  const dispatch = useDispatch();
  const nameRef = useRef()
  const msgRef = useRef()


  const product = products.find(item => item.id === id)

  const { imgUrl, productName, price, avgRating, reviews, description, shortDesc } = product

  const submitHandler = (e) => {
    e.preventDefault()
    const name = nameRef.current.value;
    const message = nameRef.current.value;
    const reviewObj = {
      userName: name,
      text: message,
      rating
    }

    console.log(reviewObj)
    toast.success('Review submitted!')
  }

  const addToCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price
    }));
    toast.success("Products added succesfully")
  }

  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center'>
          <div className='flex-1'>
            <img src={imgUrl} />
          </div>
          <div className='flex-1 p-6'>
            <h1 className='font-semibold text-3xl mb-5'>{productName}</h1>
            <div className='flex items-center mb-5'>
              <div className='flex mr-4'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
              <div>
                (<span className='font-semibold'>{avgRating}</span>{" "}ratings)
              </div>
            </div>
            <p className='font-semibold mb-5'>${price}</p>
            <p className='mb-5'>{shortDesc}</p>
            <button className="bg-[#030c48] text-white py-2 px-6 rounded-md mt-5" onClick={addToCart}>
              <Link to="">Add To Cart</Link>
            </button>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='flex items-center gap-5'>
          <h6 onClick={() => setTab("desc")} className={`${tab === "desc" ? "font-bold cursor-pointer" : "cursor-pointer"}`}>Description</h6>
          <h6 onClick={() => setTab("rev")} className={`${tab === "rev" ? "font-bold cursor-pointer" : "cursor-pointer"}`}>Reviews ({reviews.length})</h6>
        </div>
        <div className='mt-5'>
          {tab === "desc" ? <div><p>{description}</p></div>
            : <div>
              <div>
                <ul>
                  {
                    reviews?.map((item, index) => (
                      <li key={index}>
                        <h6>John Doe</h6>
                        <span className='font-semibold'>{item.rating} (rating)</span>
                        <p>{item.text}</p>
                      </li>
                    ))}
                </ul>
                <div className='py-10'>
                  <h4 className='text-2xl'>Leave your experience</h4>
                  <form action='' onSubmit={submitHandler}>
                    <div className='mt-4'>
                      <input type="text" required ref={nameRef} placeholder="Enter name" className='outline-none border-[1px] border-[#000] rounded-sm w-full p-1' />
                    </div>
                    <div className='flex gap-4 mt-4'>
                      <span onClick={() => setRating(1)} className='flex justify-center flex-col items-center cursor-pointer'>1 <BsStarFill /></span>
                      <span onClick={() => setRating(2)} className='flex justify-center flex-col items-center cursor-pointer'>2 <BsStarFill /></span>
                      <span onClick={() => setRating(3)} className='flex justify-center flex-col items-center cursor-pointer'>3 <BsStarFill /></span>
                      <span onClick={() => setRating(4)} className='flex justify-center flex-col items-center cursor-pointer'>4 <BsStarFill /></span>
                      <span onClick={() => setRating(5)} className='flex justify-center flex-col items-center cursor-pointer'>5 <BsStarFill /></span>
                    </div>
                    <div className='mt-4'>
                      <textarea required type="text" ref={msgRef} placeholder="Review Message" className='outline-none border-[1px] border-[#000] rounded-sm w-full p-1' />
                    </div>
                    <button className="bg-[#030c48] text-white py-2 px-6 rounded-md mt-5">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section >
  )
}

export default ProductDetails