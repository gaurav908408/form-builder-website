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

      setForms(res.data.forms || []);
    } catch (error) {
      console.error(error);
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

      toast.success("Form deleted successfully");
      fetchForms();
    } catch (error) {
      console.error(error);
      toast.error("Delete failed");
    }
  };

  const totalResponses = forms.reduce(
    (total, form) => total + (form.responseCount || 0),
    0
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-xl sm:text-2xl font-bold text-blue-600 animate-pulse">
          Loading...
        </div>
      </div>
    );
  }

    return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

          {/* Header */}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

            <div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
                Dashboard 👋
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-base">
                Welcome back! Manage all your forms from one place.
              </p>

            </div>

            <button
              onClick={() => router.push("/create-form")}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300"
            >
              + Create New Form
            </button>

          </div>

          {/* Stats Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">

            {/* Total Forms */}

            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition duration-300">

              <FaWpforms className="text-4xl mb-4" />

              <h2 className="text-3xl font-bold">
                {forms.length}
              </h2>

              <p className="mt-2 text-blue-100">
                Total Forms
              </p>

            </div>

            {/* Total Responses */}

            <div className="bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition duration-300">

              <FaClipboardList className="text-4xl mb-4" />

              <h2 className="text-3xl font-bold">
                {totalResponses}
              </h2>

              <p className="mt-2 text-green-100">
                Total Responses
              </p>

            </div>

            {/* Published */}

            <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition duration-300">

              <FaEye className="text-4xl mb-4" />

              <h2 className="text-3xl font-bold">
                {forms.length}
              </h2>

              <p className="mt-2 text-purple-100">
                Published Forms
              </p>

            </div>

            {/* Active */}

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-xl hover:scale-105 transition duration-300">

              <FaChartBar className="text-4xl mb-4" />

              <h2 className="text-3xl font-bold">
                {forms.length}
              </h2>

              <p className="mt-2 text-orange-100">
                Active Forms
              </p>

            </div>

          </div>

          {/* Forms Section Starts Here */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 border-b">

    <h2 className="text-2xl font-bold text-gray-800">
      My Forms
    </h2>

    <span className="text-sm text-gray-500">
      {forms.length} Form{forms.length !== 1 ? "s" : ""}
    </span>

  </div>

  {/* Desktop Table */}

  <div className="hidden lg:block overflow-x-auto">

    <table className="w-full">

      <thead className="bg-gray-100">

        <tr>

          <th className="text-left px-6 py-4 font-semibold text-gray-700">
            Title
          </th>

          <th className="text-left px-6 py-4 font-semibold text-gray-700">
            Description
          </th>

          <th className="text-center px-6 py-4 font-semibold text-gray-700">
            Responses
          </th>

          <th className="text-center px-6 py-4 font-semibold text-gray-700">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {forms.length === 0 ? (

          <tr>

            <td
              colSpan={4}
              className="text-center py-16"
            >

              <div className="flex flex-col items-center">

                <FaWpforms className="text-6xl text-blue-500 mb-4" />

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
  className={`border-b transition hover:bg-blue-50 ${
    index % 2 === 0 ? "bg-white" : "bg-gray-50"
  }`}
>
  <td className="px-6 py-5 font-semibold text-gray-800">
    {form.title}
  </td>

  <td className="px-6 py-5 text-gray-600">
    {form.description || "-"}
  </td>

  <td className="px-6 py-5 text-center">
    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 font-semibold">
      {form.responseCount || 0}
    </span>
  </td>

  <td className="px-6 py-5">
    <div className="flex justify-center flex-wrap gap-2">

      <button
        onClick={() => router.push(`/builder/${form._id}`)}
        className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
      >
        <MdEdit className="mx-auto" size={18} />
      </button>

      <button
        onClick={() => router.push(`/form/${form._id}`)}
        className="w-10 h-10 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition"
      >
        <FaEye className="mx-auto" size={16} />
      </button>

      <button
        onClick={() => router.push(`/responses/${form._id}`)}
        className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition"
      >
        <FaChartBar className="mx-auto" size={16} />
      </button>

      <button
        onClick={() => {
          const shareLink = `${window.location.origin}/form/${form._id}`;
          navigator.clipboard.writeText(shareLink);
          toast.success("Link Copied Successfully");
        }}
        className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
      >
        <FaShareAlt className="mx-auto" size={16} />
      </button>

      <button
        onClick={() => deleteForm(form._id)}
        className="w-10 h-10 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
      >
        <MdDelete className="mx-auto" size={18} />
      </button>

    </div>
  </td>
</tr>
          ))
        )}

      </tbody>
    </table>

  </div>

  {/* Mobile Cards */}

  <div className="lg:hidden p-4 space-y-4">

    {forms.length === 0 ? (

      <div className="text-center py-12">

        <FaWpforms className="mx-auto text-6xl text-blue-500 mb-4" />

        <h2 className="text-2xl font-bold text-gray-700">
          No Forms Found
        </h2>

        <p className="text-gray-500 mt-2">
          Create your first form to get started.
        </p>

        <button
          onClick={() => router.push("/create-form")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Create Form
        </button>

      </div>

    ) : (

      forms.map((form) => (

        <div
          key={form._id}
          className="bg-gray-50 rounded-xl shadow-md p-5 border"
        >

          <h3 className="text-lg font-bold text-gray-800">
            {form.title}
          </h3>

          <p className="text-gray-500 mt-2">
            {form.description || "-"}
          </p>

          <div className="mt-4 flex items-center justify-between">

            <span className="text-sm text-gray-600">
              Responses
            </span>

            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
              {form.responseCount || 0}
            </span>

          </div>

          <div className="grid grid-cols-5 gap-2 mt-5">

            <button
              onClick={() => router.push(`/builder/${form._id}`)}
              className="h-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              <MdEdit className="mx-auto" />
            </button>

            <button
              onClick={() => router.push(`/form/${form._id}`)}
              className="h-10 rounded-lg bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition"
            >
              <FaEye className="mx-auto" />
            </button>

            <button
              onClick={() => router.push(`/responses/${form._id}`)}
              className="h-10 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition"
            >
              <FaChartBar className="mx-auto" />
            </button>

            <button
              onClick={() => {
                const shareLink = `${window.location.origin}/form/${form._id}`;
                navigator.clipboard.writeText(shareLink);
                toast.success("Link Copied Successfully");
              }}
              className="h-10 rounded-lg bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
            >
              <FaShareAlt className="mx-auto" />
            </button>

            <button
              onClick={() => deleteForm(form._id)}
              className="h-10 rounded-lg bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition"
            >
              <MdDelete className="mx-auto" />
            </button>

          </div>

        </div>

      ))

    )}

  </div>

</div>

</div>

</div>

</>
);
}