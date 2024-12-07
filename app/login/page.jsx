'use client'
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const [data , setData] = useState({email: "", password:""});

    const inputOnChange = (name , value) => {
        setData((data) => ({
            ...data,
            [name]: value
        }));

    }

    const formSubmit  = async(e) => {
        e.preventDefault(); 
        const options = {method: "POST", body: JSON.stringify(data)};
        const res = await (await fetch('/api/login', options)).json();
        if(res['status'] === 'success'){
            toast.success('Login Successful');
            setData({email: "", password: ""});
            setTimeout(() => {
                window.location.href = "/profile"

            }, 1500)
        }else{
            toast.error("Login Faileds")
        }
    }
  
  return (
    <>
      <form  onSubmit={formSubmit} className="max-w-md bg-slate-100 p-5  mx-auto rounded-lg">
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            required
            onChange={(e) => inputOnChange('email', e.target.value.toLowerCase())}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>





        <div className="mb-5">
          <label htmlFor="password" className="block mb-2">
            Your Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            onChange={(e) => inputOnChange('password', e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>

        <button className="bg-blue-700 text-white px-5 py-3 rounded-lg w-full mb-5" type="submit">
         Submit
        </button>

        <p>Don't have an account? <Link href="/sign-up" className='text-blue-700 font-medium'> Sign Up</Link></p>
      </form>
      <Toaster position="top-left" reverseOrder={false} />
    </>
  );
};

export default Login;
