"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function ResponsesPage() {
  const { id } = useParams();
  const router = useRouter();

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const [responses, setResponses] = useState([]);
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");

      const [responseRes, formRes] = await Promise.all([
        axios.get(`${API_URL}/responses/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
        axios.get(`${API_URL}/forms/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }),
      ]);

      setResponses(responseRes.data.responses || []);
      setForm(formRes.data.form);

    } catch (error) {
      console.log(error);
      toast.error("Failed to load responses");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg">

        <div className="flex justify-between items-center p-6 border-b">

          <div>
            <h1 className="text-3xl font-bold">
              Form Responses
            </h1>

            <p className="text-gray-500">
              Total Responses : {responses.length}
            </p>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Dashboard
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="bg-gray-100">

                <th className="p-4 text-left">
                  #
                </th>

                <th className="p-4 text-left">
                  Submitted Data
                </th>

                <th className="p-4 text-left">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {responses.length === 0 ? (

                <tr>

                  <td
                    colSpan={3}
                    className="text-center py-10 text-gray-500"
                  >
                    No Responses Found
                  </td>

                </tr>

              ) : (

                responses.map((response, index) => (

                  <tr
                    key={response._id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-4 font-semibold">
                      {index + 1}
                    </td>

                    <td className="p-4">

                      <div className="space-y-3">

                        {Object.entries(response.answers).map(([key, value]) => {

                          const field = form?.fields?.find(
                            (item) => String(item.id) === String(key)
                          );

                          return (
                            <div
                              key={key}
                              className="border rounded-lg p-3 bg-gray-50"
                            >

                              <p className="font-semibold text-blue-600">
                                {field?.label || key}
                              </p>

                              <p className="text-gray-700 mt-1">
                                {String(value)}
                              </p>

                            </div>
                          );
                        })}

                      </div>

                    </td>

                    <td className="p-4">
                      {new Date(response.createdAt).toLocaleString()}
                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}