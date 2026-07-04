"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function BuilderPage() {
  const { id } = useParams();
  const router = useRouter();

  const API_URL =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fields: [],
  });

  useEffect(() => {
    fetchForm();
  }, []);

  const fetchForm = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(`${API_URL}/forms/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFormData({
        title: res.data.form.title,
        description: res.data.form.description,
        fields: res.data.form.fields || [],
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to load form");
    } finally {
      setLoading(false);
    }
  };

  const addField = (type) => {
  const newField = {
    id: Date.now(),
    type,
    label: `${type} Field`,
    placeholder: "",
    required: false,
    options:
      type === "radio" || type === "checkbox"
        ? ["Option 1", "Option 2"]
        : [],
  };

  setFormData((prev) => ({
    ...prev,
    fields: [...prev.fields, newField],
  }));
};
  

  const deleteField = (fieldId) => {
    setFormData((prev) => ({
      ...prev,
      fields: prev.fields.filter((field) => field.id !== fieldId),
    }));
  };

  const updateField = (fieldId, key, value) => {
    setFormData((prev) => ({
      ...prev,
      fields: prev.fields.map((field) =>
        field.id === fieldId
          ? {
              ...field,
              [key]: value,
            }
          : field
      ),
    }));
  };
const addOption = (fieldId) => {
  setFormData((prev) => ({
    ...prev,
    fields: prev.fields.map((field) =>
      field.id === fieldId
        ? {
            ...field,
            options: [...field.options, `Option ${field.options.length + 1}`],
          }
        : field
    ),
  }));
};

const updateOption = (fieldId, optionIndex, value) => {
  setFormData((prev) => ({
    ...prev,
    fields: prev.fields.map((field) => {
      if (field.id !== fieldId) return field;

      const updated = [...field.options];
      updated[optionIndex] = value;

      return {
        ...field,
        options: updated,
      };
    }),
  }));
};

const deleteOption = (fieldId, optionIndex) => {
  setFormData((prev) => ({
    ...prev,
    fields: prev.fields.map((field) => {
      if (field.id !== fieldId) return field;

      return {
        ...field,
        options: field.options.filter(
          (_, index) => index !== optionIndex
        ),
      };
    }),
  }));
};
  const saveForm = async () => {
    try {
      setSaving(true);

      const token = localStorage.getItem("token");

      await axios.put(
        `${API_URL}/forms/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Form Saved Successfully");
    } catch (error) {
      console.log(error);
      toast.error("Unable to save form");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}

      <div className="bg-white shadow-md p-5 flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold">
            Form Builder
          </h1>

          <p className="text-gray-500">
            Build your custom form
          </p>
        </div>

        <div className="flex gap-3">

          <button
            onClick={() => router.push("/dashboard")}
            className="px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Dashboard
          </button>

          <button
            onClick={saveForm}
            disabled={saving}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {saving ? "Saving..." : "Save Form"}
          </button>

        </div>

      </div>

      <div className="grid grid-cols-12 gap-5 p-5">

        {/* Left Sidebar */}

        <div className="col-span-3 bg-white rounded-xl shadow p-5">

          <h2 className="text-xl font-bold mb-5">
            Add Fields
          </h2>

          <button
            onClick={() => addField("text")}
            className="w-full bg-blue-500 text-white py-2 rounded-lg mb-3"
          >
            + Text Field
          </button>

          <button
            onClick={() => addField("email")}
            className="w-full bg-green-500 text-white py-2 rounded-lg mb-3"
          >
            + Email Field
          </button>

          <button
            onClick={() => addField("number")}
            className="w-full bg-orange-500 text-white py-2 rounded-lg mb-3"
          >
            + Number Field
          </button>

          <button
            onClick={() => addField("textarea")}
            className="w-full bg-purple-500 text-white py-2 rounded-lg mb-3"
          >
            + Textarea
          </button>
          <button
  onClick={() => addField("radio")}
  className="w-full bg-pink-500 text-white py-2 rounded-lg mb-3"
>
  + Radio Button
</button>

<button
  onClick={() => addField("checkbox")}
  className="w-full bg-indigo-500 text-white py-2 rounded-lg mb-3"
>
  + Checkbox
</button>
                  </div>

        {/* Right Side */}

        <div className="col-span-9 bg-white rounded-xl shadow p-6">

          <div className="mb-8">

            <label className="block font-semibold mb-2">
              Form Title
            </label>

            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3"
            />

          </div>

          <div className="mb-8">

            <label className="block font-semibold mb-2">
              Description
            </label>

            <textarea
              rows={3}
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3 resize-none"
            />

          </div>

          <hr className="mb-6" />

          <h2 className="text-2xl font-bold mb-6">
            Form Fields
          </h2>

          {formData.fields.length === 0 && (
            <div className="border-2 border-dashed rounded-xl p-12 text-center text-gray-500">
              No fields added yet.
            </div>
          )}

          {formData.fields.map((field, index) => (

            <div
              key={field.id}
              className="border rounded-xl p-5 mb-5 bg-gray-50"
            >

              <div className="flex justify-between items-center mb-5">

                <h3 className="font-bold text-lg">
                  Field {index + 1}
                </h3>

                <button
                  onClick={() => deleteField(field.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>

              </div>

              <div className="grid grid-cols-2 gap-5">

                <div>

                  <label className="block mb-2 font-medium">
                    Label
                  </label>

                  <input
                    type="text"
                    value={field.label}
                    onChange={(e) =>
                      updateField(
                        field.id,
                        "label",
                        e.target.value
                      )
                    }
                    className="w-full border rounded-lg p-3"
                  />

                </div>

                <div>

                  <label className="block mb-2 font-medium">
                    Placeholder
                  </label>

                  <input
                    type="text"
                    value={field.placeholder}
                    onChange={(e) =>
                      updateField(
                        field.id,
                        "placeholder",
                        e.target.value
                      )
                    }
                    className="w-full border rounded-lg p-3"
                  />

                </div>

              </div>

              <div className="mt-5">

                <label className="flex items-center gap-3">

                  <input
                    type="checkbox"
                    checked={field.required}
                    onChange={(e) =>
                      updateField(
                        field.id,
                        "required",
                        e.target.checked
                      )
                    }
                  />

                  Required Field

                </label>

              </div>

              <div className="mt-6">

                <label className="block mb-2 font-medium">
                  Preview
                </label>
                                {field.type === "textarea" ? (
                  <textarea
                    placeholder={field.placeholder}
                    className="w-full border rounded-lg p-3"
                    disabled
                  />
                ) : (
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full border rounded-lg p-3"
                    disabled
                  />
                )}

              </div>

              <div className="mt-5 text-sm text-gray-500">

                <p>
                  <span className="font-semibold">
                    Type:
                  </span>{" "}
                  {field.type}
                </p>

                <p>
                  <span className="font-semibold">
                    Required:
                  </span>{" "}
                  {field.required ? "Yes" : "No"}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}