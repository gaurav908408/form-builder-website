"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../../components/Navbar";

import { MdEdit, MdDelete } from "react-icons/md";

import {
  FaWpforms,
  FaClipboardList,
  FaEye,
  FaChartBar,
  FaShareAlt,
} from "react-icons/fa";

export default function Dashboard() {
  const router = useRouter();

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    fetchForms();
  }, []);

  const fetchForms = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API_URL}/forms`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setForms(res.data.forms);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load forms");
    } finally {
      setLoading(false);
    }
  };

  const deleteForm = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this form?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`${API_URL}/forms/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Form Deleted");
      fetchForms();
    } catch (error) {
      console.log(error);
      toast.error("Delete Failed");
    }
  };

  const totalResponses = forms.reduce(
    (total, form) => total + (form.responseCount || 0),
    0
  );

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">

          <h1 className="text-4xl font-extrabold text-gray-800">
            Dashboard 👋
          </h1>

          <p className="text-gray-500 mt-2 text-lg">
            Welcome back! Manage all your forms from one place.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition">

            <FaWpforms size={42} className="mb-4" />

            <h2 className="text-4xl font-bold">
              {forms.length}
            </h2>

            <p className="mt-2">
              Total Forms
            </p>

          </div>

          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition">

            <FaClipboardList size={42} className="mb-4" />

            <h2 className="text-4xl font-bold">
              {totalResponses}
            </h2>

            <p className="mt-2">
              Total Responses
            </p>

          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition">

            <FaEye size={42} className="mb-4" />

            <h2 className="text-4xl font-bold">
              {forms.length}
            </h2>

            <p className="mt-2">
              Published Forms
            </p>

          </div>

          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 shadow-xl hover:scale-105 transition">

            <FaChartBar size={42} className="mb-4" />

            <h2 className="text-4xl font-bold">
              {forms.length}
            </h2>

            <p className="mt-2">
              Active Forms
            </p>

          </div>

        </div>

        {/* Forms Table */}        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <div className="p-6 border-b flex justify-between items-center">

            <h2 className="text-2xl font-bold text-gray-800">
              My Forms
            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="text-left p-5 font-semibold">
                    Title
                  </th>

                  <th className="text-left p-5 font-semibold">
                    Description
                  </th>

                  <th className="text-center p-5 font-semibold">
                    Responses
                  </th>

                  <th className="text-center p-5 font-semibold">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {forms.length === 0 ? (

                  <tr>

                    <td
                      colSpan={4}
                      className="py-16 text-center"
                    >

                      <div className="flex flex-col items-center">

                        <FaWpforms
                          size={70}
                          className="text-blue-500 mb-4"
                        />

                        <h2 className="text-2xl font-bold text-gray-700">
                          No Forms Found
                        </h2>

                        <p className="text-gray-500 mt-2">
                          Create your first form to get started.
                        </p>

                        <button
                          onClick={() => router.push("/create-form")}
                          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                        >
                          Create Form
                        </button>

                      </div>

                    </td>

                  </tr>

                ) : (

                  forms.map((form, index) => (

                    <tr
                      key={form._id}
                      className={`border-b hover:bg-blue-50 transition ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >

                      <td className="p-5 font-semibold">
                        {form.title}
                      </td>

                      <td className="p-5">
                        {form.description || "-"}
                      </td>

                      <td className="text-center font-bold text-blue-600">
                        {form.responseCount || 0}
                      </td>

                      <td className="p-5">

                        <div className="flex justify-center gap-3">

                          <button
                            onClick={() =>
                              router.push(`/builder/${form._id}`)
                            }
                            className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition flex items-center justify-center"
                          >
                            <MdEdit size={20} />
                          </button>

                          <button
                            onClick={() =>
                              router.push(`/form/${form._id}`)
                            }
                            className="w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition flex items-center justify-center"
                          >
                            <FaEye size={18} />
                          </button>

                          <button
                            onClick={() =>
                              router.push(`/responses/${form._id}`)
                            }
                            className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition flex items-center justify-center"
                          >
                            <FaChartBar size={18} />
                          </button>

                          <button
                            onClick={() => {
                              const shareLink = `${window.location.origin}/form/${form._id}`;
                              navigator.clipboard.writeText(shareLink);
                              toast.success("Link Copied Successfully");
                            }}
                            className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition flex items-center justify-center"
                          >
                            <FaShareAlt size={18} />
                          </button>

                          <button
                            onClick={() => deleteForm(form._id)}
                            className="w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition flex items-center justify-center"
                          >
                            <MdDelete size={20} />
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))

                )}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </>
  );
}