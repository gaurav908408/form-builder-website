"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await api.post("/auth/register", formData);

      toast.success(data.message);

      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center h-[80vh]">
        <form
          onSubmit={handleSubmit}
          className="w-[400px] p-8 rounded-xl shadow-lg border"
        >
          <h1 className="text-3xl font-bold mb-6 text-center">
            Register
          </h1>

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border w-full p-3 mb-4 rounded"
          />

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
            className="bg-green-600 hover:bg-green-700 text-white w-full p-3 rounded"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}