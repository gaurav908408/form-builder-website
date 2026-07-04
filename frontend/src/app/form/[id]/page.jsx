"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function PublicFormPage() {
  const { id } = useParams();

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    if (id) {
      fetchForm();
    }
  }, [id]);

  const fetchForm = async () => {
    try {
      const res = await axios.get(`${API_URL}/forms/public/${id}`);
      setForm(res.data.form);
    } catch (error) {
      console.log(error);
      toast.error("Form not found");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (fieldId, value) => {
    setResponses((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${API_URL}/responses`, {
        formId: id,
        answers: responses,
      });

      toast.success(res.data.message);

      setResponses({});

    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Failed to submit response"
      );
    }
  };

  // Loading State
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  // Form Not Found
  if (!form) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold text-red-600">
        Form Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          {form.title}
        </h1>

        <p className="text-gray-600 mb-8">
          {form.description}
        </p>

        <form onSubmit={handleSubmit}>

          {form.fields.length === 0 ? (
            <p className="text-gray-500">
              No fields added yet.
            </p>
          ) : (
            form.fields.map((field, index) => (
              <div
                key={field.id || index}
                className="mb-6"
              >
                <label className="block font-semibold mb-2">
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    rows={4}
                    placeholder={field.placeholder}
                    value={responses[field.id] || ""}
                    onChange={(e) =>
                      handleChange(field.id, e.target.value)
                    }
                    className="w-full border rounded-lg p-3"
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={responses[field.id] || ""}
                    onChange={(e) =>
                      handleChange(field.id, e.target.value)
                    }
                    className="w-full border rounded-lg p-3"
                    required={field.required}
                  />
                )}
              </div>
            ))
          )}

          {form.fields.length > 0 && (
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold mt-4"
            >
              Submit Response
            </button>
          )}

        </form>

      </div>
    </div>
  );
}