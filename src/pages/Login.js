import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify"
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = await userCredential.user

      setLoading(false)
      toast.success("Successfully logged in")
      navigate('/home')

    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }

  }
  return (
    <section>
      <div className="container mx-auto">
        {loading ? <h6>Loading...</h6> :
          <div className="flex items-center justify-center flex-col h-[75vh]">
            <h1 className="font-bold text-xl">Login</h1>
            <div className="bg-[#030c48] p-5 rounded-md w-3/4">
              <form onSubmit={login}>
                <div>
                  <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full outline-0 rounded-sm mb-4 p-1" />
                </div>
                <div>
                  <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full outline-0 rounded-sm mb-4 p-1" />
                </div>
                <div className="flex justify-center mt-7">
                  <button className="bg-white py-1 px-4 rounded-md font-semibold ">Login</button>
                </div>
                <div className="flex justify-center">
                  <p className="text-gray-400 mt-5">Don't have an account? <Link to="/signup" className="font-bold underline">Create an account</Link></p>
                </div>
              </form>
            </div>
          </div>
        }

      </div>
    </section>
  )
};

export default Login;
