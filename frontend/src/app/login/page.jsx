"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function Login() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    try{

      const {data}=await api.post("/auth/login",formData);

      localStorage.setItem("token",data.token);

      toast.success(data.message);

      router.push("/dashboard");

    }catch(error){

      toast.error(error.response?.data?.message || "Login Failed");

    }
  }

  return(
    <>
    <Navbar/>

    <div className="flex justify-center items-center h-[80vh]">

      <form
      onSubmit={handleSubmit}
      className="w-[400px] p-8 rounded-xl shadow-lg border">

      <h1 className="text-3xl font-bold text-center mb-6">
      Login
      </h1>

      <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="border w-full p-3 mb-4 rounded"
      />

      <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      className="border w-full p-3 mb-4 rounded"
      />

      <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded">

      Login

      </button>

      </form>

    </div>

    </>
  )

}