import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";
import { ref, uploadBytesResumable, getDownloadURK, getDownloadURL } from "firebase/storage"
import { storage } from "../firebase.config";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      const user = await userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`)
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
          console.log(error.message)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              await updateProfile(user, {
                displayName: username,
                photoURL: downloadURL
              });

              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                displayName: username,
                email,
                photoURL: downloadURL
              });
            });
        }
      );
      setLoading(false)
      toast.success('Account created')
      navigate('/login')
    } catch (error) {
      setLoading(true)
      toast.error("Something went wrong")
    }

  }

  return (
    <section>
      <div className="container mx-auto">
        {loading ? <h1>Loading...</h1>
          :
          <div className="flex items-center justify-center flex-col h-[75vh]">
            <h1 className="font-bold text-xl">Signup</h1>
            <div className="bg-[#030c48] p-5 rounded-md w-3/4">
              <form onSubmit={signup}>
                <div>
                  <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full outline-0 rounded-sm mb-4 p-1" />
                </div>
                <div>
                  <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full outline-0 rounded-sm mb-4 p-1" />
                </div>
                <div>
                  <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full outline-0 rounded-sm mb-4 p-1" />
                </div>
                <div>
                  <input type="file" onChange={(e) => setFile(e.target.files[0])} className="text-white" />
                </div>
                <div className="flex justify-center mt-7">
                  <button className="bg-white py-1 px-4 rounded-md font-semibold" onClick={signup}>Create an account</button>
                </div>
                <div className="flex justify-center">
                  <p className="text-gray-400 mt-5">Do you have an account? <Link to="/login" className="font-bold underline">Login</Link></p>
                </div>
              </form>
            </div>
          </div>}

      </div>
    </section>
  )
};

export default Signup;
